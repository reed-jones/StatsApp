<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Website;
use App\Uptime;
use App\Library\Ping;

class CheckUptime extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sites:uptime';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Pings all websites, and measures latency, and pageload';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        $websites = Website::all();

        foreach($websites as $site) {
            // now attempt first ping
            $ping = new Ping($site->url);
            $latency = $ping->ping();
            $ip = $ping->getIpAddress();
            $pageLoad = null;
            if ($latency) {
                $time_start = microtime(true);
                $client = new \GuzzleHttp\Client();
                $protocol = $site->ssl ? 'https://' : 'http://';
                $res = $client->request('GET', $protocol . $site->url);
                //echo $res->getStatusCode();
                $t = $res->getBody();
                $time_end = microtime(true);
                $pageLoad = number_format($time_end - $time_start, 4, '.', '');

                $uptime = new Uptime();
                $uptime->website_id = $site->id;
                $uptime->latency = $latency;
                $uptime->loadSpeed = $pageLoad;
                $uptime->save();
            }
        }
    }
}
