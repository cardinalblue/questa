//
// Available modules include (this is not a complete list):
// var Scene = require('Scene');
// var Textures = require('Textures');
// var Materials = require('Materials');
// var FaceTracking = require('FaceTracking');
// var Animation = require('Animation');
// var Reactive = require('Reactive');
//
// Example script
//
// Loading required modules
// var Scene = require('Scene');
// var FaceTracking = require('FaceTracking');
//
// Binding an object's property to a value provided by the face tracker
// Scene.root.child('object0').transform.rotationY = FaceTracking.face(0).transform.rotationX;
//
// If you want to log objects, use the Diagnostics module.

var Diagnostics = require('Diagnostics');
var Animation = require('Animation');
var Scene = require('Scene');
var TouchGestures = require('TouchGestures');

// -------------------------------------------------------------------------------
// Utility

function log(...args) { Diagnostics.log(...args); }

// -------------------------------------------------------------------------------
// Base elements

var   base 	 	= Scene.root.child("Device").child("Camera").child("Focal Distance");
var   canvas 	= base.child("2DCanvas0");
const text0  	= canvas.child("text0");
const rect0   = canvas.child("rect0");

// -------------------------------------------------------------------------------
// Main

var n = 0;
TouchGestures.onTap(rect0).subscribe(e => {
	n = n + 1;
	text0.text = '' + n;
});

log('script.js ran');