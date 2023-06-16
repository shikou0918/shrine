@extends('layouts.app')

@section('content')
<body class="antialiased" style="height: 100vh; overflow: hidden;">
    <div
        id="app"
        data-google-api-key="{{ $google_api_key }}"
    ></div>
    <form id="external_submit"></form>
</body>
@endsection
