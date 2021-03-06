@extends('layouts.backend')

@section('content')
    <section class="hero is-fullheight" style="background-color: #717171;">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-white">Login</h3>
                    <p class="subtitle has-text-white">Please login to proceed.</p>
                    <div class="box" style="border: 1px solid #4b5fe2;">
                        <figure class="avatar">
                            <img src="https://placehold.it/128x128" style="border-radius: 50%;">
                        </figure>
                        <form class="form-horizontal" method="POST" action="{{ route('password.request') }}">
                            {{ csrf_field() }}

                            <input type="hidden" name="token" value="{{ $token }}">

                            @if (session('status'))
                                <div class="alert alert-success">
                                    {{ session('status') }}
                                </div>
                            @endif

                            <div class="field">
                                <div class="control">
                                    <div class="field{{ $errors->has('email') ? ' has-error' : '' }}">
                                        <input name="email" class="input no-shadow" type="email" value="{{ old('email') }}" placeholder="Your Email" autofocus="">
                                        @if ($errors->has('email'))
                                            <span class="help-block">
                                                <p class="text-danger title is-6" style="color: red;">{{ $errors->first('email') }}</p>
                                            </span>
                                        @endif
                                    </div>
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <div class="field{{ $errors->has('password') ? ' has-error' : '' }}">
                                        <input name="password" class="input no-shadow" type="password" placeholder="Your Password">
                                        @if ($errors->has('password'))
                                            <span class="help-block">
                                                <p class="text-danger title is-6">{{ $errors->first('password') }}</p>
                                            </span>
                                        @endif
                                    </div>
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <div class="field{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                                        <input  type="password" class="input no-shadow" name="password_confirmation" placeholder="Confirm Password">

                                        @if ($errors->has('password_confirmation'))
                                            <span class="help-block">
                                                <p class="text-danger title is-6">{{ $errors->first('password_confirmation') }}</p>
                                            </span>
                                        @endif
                                    </div>
                                </div>
                            </div>

                            <button type="submit" class="button is-fullwidth is-outlined is-rounded" style="color: white;background-color: #4b5fe2;">
                                Reset Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
