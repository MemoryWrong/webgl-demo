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
import Terrain from '../components/terrain';
import Loader from '../components/loader';
import Particles from '../components/particles';
import Orbitcontrols from 'three-orbitcontrols';
import { Particle } from 'three';

import OBJLoader from 'three-obj-loader';

import humanobj from '../assets/human.obj';
import heightmap from '../assets/france_terrain.png';




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
    renderer.shadowMap.enabled = true;

    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( width, height );
    container.appendChild( renderer.domElement );
		// container.appendChild( stats.dom );  //增加状态信息 


    //init camera
    var utils = new Utils(scene,width,height);
    var camera =utils.camera;
    scene.add(camera);
    // console.log(camera);

    // init light
    var light = utils.light;
    scene.add(light);
    // console.log(light);
    // scene.add(utils.showCamera());
    // scene.add(utils.showLight());
    
    //axes
    var axes = new THREE.AxesHelper(100);
    scene.add(axes);
    //grid xz
    var gridXZ = new THREE.GridHelper(100, 99);
    scene.add(gridXZ);


    // load objects;
    // var loader = new Loader(scene);


    // init particle system
    // var particles = new Particles(1000);
    // scene.add(particles.particleSystem);
		// particles.particleSystem.sortParticles = true;

    // init terrain system
    var terrain = new Terrain(660,660);
    var box = terrain.build();
    scene.add(box); 

    var animate = function () {
      requestAnimationFrame( animate );
      // particles.updateParticles();

      // update the position of the light;
      // utils.updateLight();
      // console.log(box);
      box.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();


};