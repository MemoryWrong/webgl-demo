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
import Particles from '../components/particles';
import Orbitcontrols from 'three-orbitcontrols';




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
		// container.appendChild( stats.dom );  //增加状态信息 


    //init camera
    var utils = new Utils(scene,width,height);
    var camera =utils.camera;
    scene.add(camera);
    console.log(camera);
    camera.position.set( 0, 20, 100 );
    
    //init coordinate system
    var coordinateSystem = utils.initCoordinateSystem();
    scene.add(coordinateSystem);

    // init light
    var light = utils.light;
    scene.add(light);
    console.log(light);
    

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    // init particle system
    var particles = new Particles(10000);
    scene.add(particles.particleSystem);
		particles.particleSystem.sortParticles = true;

     
      

			var animate = function () {
        requestAnimationFrame( animate );
        particles.updateParticles();


				// cube.rotation.x += 0.1;
				// cube.rotation.y += 0.1;
				renderer.render(scene, camera);
			};

			animate();


};