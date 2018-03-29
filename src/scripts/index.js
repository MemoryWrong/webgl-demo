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

    // init light
    var light = utils.light;
    scene.add(light);
    console.log(light);
    
    scene.add(utils.showCamera());
    scene.add(utils.showLight());
    
    //init coordinate system
    var coordinateSystem = utils.initCoordinateSystem();
    scene.add(coordinateSystem);

    var geometry = new THREE.BoxGeometry( 50, 50, 50 );
    geometry.computeVertexNormals();
    // var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    // Make a material
  var material = new THREE.MeshPhongMaterial({
    ambient: 0x555555,
    color: 0xffffff,
    specular: 0xffffff,
    shininess: 50,
    shading: THREE.SmoothShading
  });
  //   var material = new THREE.MeshLambertMaterial({
  //     color:0xffffff,
  //     // wireframe:true
  // });
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    // init particle system
    // var particles = new Particles(100);
    // scene.add(particles.particleSystem);
		// particles.particleSystem.sortParticles = true;

     
      

    var animate = function () {
      requestAnimationFrame( animate );
      // particles.updateParticles();


      // cube.rotation.x += 0.1;
      // cube.rotation.y += 0.1;
      renderer.render(scene, camera);
    };

    animate();


};