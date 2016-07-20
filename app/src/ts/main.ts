/// <reference path="../../../typings/index.d.ts" />

import * as controllers from "./controllers";

let app = angular.module('animApp', ['ngAnimate']);

$.noConflict();

app
.controller('appController', controllers.AppCtrl)

.animation('.fade', function(){
	return {
		addClass: function(element:any, doneFnc:any){
			jQuery(element).fadeOut(2000);
		},
		removeClass: function(element:any, doneFnc:any){
			jQuery(element).fadeIn(2000);
		}
	}
});
