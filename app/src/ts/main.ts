/// <reference path="../../../typings/index.d.ts" />

import * as controllers from "./controllers";

let app = angular.module('animApp', ['ngAnimate']);

app
.controller('appController', controllers.AppCtrl);

