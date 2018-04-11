import * as THREE from 'three';
import humanobj from '../assets/human.obj';
// import ObjMtlLoader from 'obj-mtl-loader';
import OBJLoader from 'three-obj-loader';
import json from '../assets/female.json';
import heightmap from '../assets/france_terrain.png';


class Loader {
    constructor(scene){
        console.log('OBJ',humanobj);
        console.log('OBJ',json);
        // var loader = THREE.OBJLoader(THREE.DefaultLoadingManager);


        var loader = new THREE.ObjectLoader();
        var image = new Image();
        // var material = materials[ 0 ];
		// var object = new THREE.Mesh( geometry, material );
		// scene.add( object );
        var material = json.materials[0];
        var object = new THREE.Mesh(json.geometries[0]);
        // scene.add(object);
        // loader.load(
        //     // resource URL
        //     json,

        //     // onLoad callback
        //     // Here the loaded data is assumed to be an object
        //     function ( obj ) {
        //         // Add the loaded object to the scene
        //         scene.add( obj );
        //     },

        //     // onProgress callback
        //     function ( xhr ) {
        //         console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        //     },

        //     // onError callback
        //     function ( err ) {
        //         console.error( 'An error happened' );
        //     }
        // );
    }
    
    init(){


    }
}
export default Loader;