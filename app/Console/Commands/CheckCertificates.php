<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Website;
use App\sslStatus;
use Spatie\SslCertificate\SslCertificate;

class CheckCertificates extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ssl:check';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Checks SSL certs for all applicable websites';

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
        $websites = Website::where('ssl', true)->get();

        foreach($websites as $site) {
            $check = SslCertificate::createForHostName($site->url);
            $cert = new sslStatus();
            $cert->website_id = $site->id;
            $cert->valid = $check->isValid(); // returns true if the certificate is currently valid
            $cert->issuer = $check->getIssuer(); // returns "Let's Encrypt Authority X3"
            $cert->days_left = $check->expirationDate()->diffInDays(); // returns an int
            $cert->save();
        }
    }
}
