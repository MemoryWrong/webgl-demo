'use strict';
import * as THREE from 'three';
import Camera from '../components/camera';

if (module.hot) {
  module.hot.accept();
}

import 'babel-polyfill';
import '../styles/index.scss';
import * as three from 'three';
import Camera from '../components/camera';

(function(){
    let container = document.getElementById('WebGL-output');
    let width = container.clientWidth,height = container.clientHeight;

    /**
     * the entry point of the whole project. can load different modules
     * or classes using ES6 and threeJS
     * 
    */

    //init scene
    var scene = new THREE.Scene();
    var group = new THREE.Group();
    scene.add( group );
    
    //init camera
    var camera = new Camera(scene);

    //init controls
    var light = new Light(scene);



})();