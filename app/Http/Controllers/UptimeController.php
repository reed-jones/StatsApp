<?php

namespace App\Http\Controllers;

use App\Uptime;
use App\Library\Ping;
use Illuminate\Http\Request;

class UptimeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ping = new Ping('reedjones.com');
        $latency = $ping->ping();
        $ip = $ping->getIpAddress();
        $pageLoad = null;
        if ($latency) {
            $time_start = microtime(true);
            $client = new \GuzzleHttp\Client();
            $res = $client->request('GET', 'reedjones.com');
            //echo $res->getStatusCode();
            $t = $res->getBody();
            $time_end = microtime(true);
            $pageLoad = number_format($time_end - $time_start, 4, '.', '');
        }
        dd([
            'host'  => $ping->getHost(),
            // 'ttl'   => $ping->getTtl(),
            // 'Timeout'   =>$ping->getTimeout(),
            'latency' => $latency,
            'pageLoad' => $pageLoad,
            'ip' => $ip
        ]);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Uptime  $uptime
     * @return \Illuminate\Http\Response
     */
    public function show(Uptime $uptime)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Uptime  $uptime
     * @return \Illuminate\Http\Response
     */
    public function edit(Uptime $uptime)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Uptime  $uptime
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Uptime $uptime)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Uptime  $uptime
     * @return \Illuminate\Http\Response
     */
    public function destroy(Uptime $uptime)
    {
        //
    }
}
