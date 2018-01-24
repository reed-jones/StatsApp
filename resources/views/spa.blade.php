<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>
        <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans|Righteous" rel="stylesheet">
        <!-- Styles -->
        <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    </head>
    <body>
       <div id='app'></div>
       <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
       <script src="{{ asset('js/main.js') }}"></script>
    </body>
</html>
