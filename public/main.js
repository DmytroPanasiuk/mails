"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_routes_1 = require('./app/app.routes');
require('rxjs/add/operator/toPromise');
var app_component_1 = require('./app/app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_DIRECTIVES,
    app_routes_1.APP_ROUTES_CONFIG,
    http_1.HTTP_PROVIDERS
]);
