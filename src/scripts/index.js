'use strict';
import * as THREE from 'three';

if (module.hot) {
  module.hot.accept();
}

import 'babel-polyfill';
import '../styles/index.scss';
import Camera from '../components/camera';
import Light from '../components/light';
import Utils from '../components/utils';

window.onload = function(){

    let container = document.getElementById('gl-output');
    let width = container.clientWidth,height = container.clientHeight;
    console.log('width,height',width, height);
    /**
     * the entry point of the whole project. can load different modules
     * or classes using ES6 and threeJS
     * 
    */
    
    console.log(document.getElementById('gl-output'));
    
    //init scene
    var scene = new THREE.Scene();
    var group = new THREE.Group();
    scene.add( group );
    
    //creating the renderer to render things....
    var renderer = new THREE.WebGLRenderer();
    // renderer.setClearColor( 0xffffff );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( width, height );
    container.appendChild( renderer.domElement );

    //init camera
    var utils = new Utils(scene,width,height);
    
    var camera =utils.camera;
    scene.add(camera);
    console.log(camera);
    
    // init light
    var light = utils.light;
    scene.add(light);
    console.log(light);
    
    //init controls

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

      // var scene = new THREE.Scene();
			// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			// var renderer = new THREE.WebGLRenderer();
			// renderer.setSize( window.innerWidth, window.innerHeight );
			// document.body.appendChild( renderer.domElement );

			// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			// var cube = new THREE.Mesh( geometry, material );
			// scene.add( cube );

			// camera.position.z = 10;

      

			var animate = function () {
				requestAnimationFrame( animate );

				// cube.rotation.x += 0.1;
				// cube.rotation.y += 0.1;

				renderer.render(scene, camera);
			};

			animate();


};