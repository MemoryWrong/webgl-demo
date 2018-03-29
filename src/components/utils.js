import * as THREE from 'three';
import Orbitcontrols from 'three-orbitcontrols';


// initialize the light and provide all kinds of methods
class Utils{
    
    constructor(scene, width,height){
        // init camera 
        this.light = new THREE.AmbientLight(0x686868);
        this.camera = new THREE.PerspectiveCamera( 60, width / height, 1, 2000 );
        this.camera.position.z = 10;
        this.camera.lookAt( scene.position );
        //控制地球
        let orbitControls = new /*THREE.OrbitControls*/Orbitcontrols(this.camera);
        orbitControls.autoRotate = false;
        console.log('initing camera....');

        // init light 
        this.light = new THREE.DirectionalLight(0xe0e0e0);
        this.light.position.set(1, 1, 0).normalize();
    }
    updateCamera(){
        console.log("update the camera....");
        
    }
    updateLight(){
        console.log("update the light....");

    }
    initCoordinateSystem(){
        console.log('initing the coordinate system...');
        // var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
        var material = new THREE.LineBasicMaterial( {
            color: 0xffffff,
            linewidth: 1,
            linecap: 'round', //ignored by WebGLRenderer
            linejoin:  'round' //ignored by WebGLRenderer
        } );
        
        var geometry = new THREE.Geometry();

        geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
        geometry.vertices.push(new THREE.Vector3( 0, 0, 250) );

        geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
        geometry.vertices.push(new THREE.Vector3( 0, 250, 0) );

        geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
        geometry.vertices.push(new THREE.Vector3( 250, 0, 0) );

        var line = new THREE.Line( geometry, material );
        return line;
    }
    
    
}

export default Utils;