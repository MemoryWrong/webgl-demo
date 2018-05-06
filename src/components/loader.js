import * as THREE from 'three';
import humanobj from '../assets/human.obj';
// import ObjMtlLoader from 'obj-mtl-loader';
import OBJLoader from 'three-obj-loader';
import json from '../assets/female.json';
import heightmap from '../assets/france_terrain.png';


class Loader {
    constructor(scene){
        // console.log('OBJ',humanobj);
        console.log('JSON',json);

        // var object = new THREE.Mesh(json.geometries[0],json.materials[0]);
        // scene.add(object);


        // load a resource
        // instantiate a loader
        var loader = new THREE.JSONLoader();
        
        loader.load(
            // resource URL
            json,
            // onLoad callback
            function ( geometry, materials ) {
                var material = materials[ 0 ];
                var object = new THREE.Mesh( geometry, material );
                scene.add( object );
            },

            // onProgress callback
            function ( xhr ) {
                console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
            },

            // onError callback
            function( err ) {
                console.log( 'An error happened' );
            }
        );
    }
    
    init(){


    }
}
export default Loader;