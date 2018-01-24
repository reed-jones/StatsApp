<?php

namespace App\Http\Controllers;

use App\Website;
use App\Uptime;
use App\sslStatus;
use App\Library\Ping;
use Spatie\SslCertificate\SslCertificate;
use Illuminate\Http\Request;

class WebsiteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return \Auth::user()->websites;

        return Website::where('user_id', \Auth::user()->id)
        ->with('sslLatest')
        ->with('uptimeAll')
        ->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // validation...
        $validatedData = $request->validate([
            // 'url' => 'required|active_url', // needs DNS
            'url' => 'bail|required|url',
        ]);
        $regex = '/^(https?:\/\/)(.+)/';
        $matches = [];
        preg_match($regex, $request->url, $matches);

        $protocol = $matches[1];
        $url = $matches[2];

        if ($url) {
            return response(
            [
                'error' => 'Invalid URL'
            ], 400);
        }

        $website = new Website();
        $website->user_id = $request->user()->id;
        $website->url = $url;
        $website->ssl = $protocol === 'https://';
        $website->name = $request->name;
        $website->save();

        // now attempt first ping
        $ping = new Ping($website->url);
        $latency = $ping->ping();
        $ip = $ping->getIpAddress();
        $pageLoad = null;
        if ($latency) {
            $time_start = microtime(true);
            $client = new \GuzzleHttp\Client();
            $res = $client->request('GET', $website->url);
            //echo $res->getStatusCode();
            $t = $res->getBody();
            $time_end = microtime(true);
            $pageLoad = number_format($time_end - $time_start, 4, '.', '');

            $website->ipv4 = $ip;
            $website->save();

            $uptime = new Uptime();
            $uptime->website_id = $website->id;
            $uptime->latency = $latency;
            $uptime->loadSpeed = $pageLoad;
            $uptime->save();

            if ($website->ssl) {
                $check = SslCertificate::createForHostName('https://' . $website->url);
                $cert = new sslStatus();
                $cert->website_id = $website->id;
                $cert->valid = $check->isValid(); // returns true if the certificate is currently valid
                $cert->issuer = $check->getIssuer(); // returns "Let's Encrypt Authority X3"
                $cert->days_left = $check->expirationDate()->diffInDays(); // returns an int
                $cert->save();
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Website  $website
     * @return \Illuminate\Http\Response
     */
    public function show(Website $website)
    {
        // if website belongs to user
        // return $website;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Website  $website
     * @return \Illuminate\Http\Response
     */
    public function edit(Website $website)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Website  $website
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Website $website)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Website  $website
     * @return \Illuminate\Http\Response
     */
    public function destroy(Website $website)
    {
        // if website belongs to user
        if($website->user->id === \Auth::user()->id) {
            $website->delete();
            return 204;
        } else {
            return ['status' => 'Unauthorized'];
        }
    }
}
