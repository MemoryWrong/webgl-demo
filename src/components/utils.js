import * as THREE from 'three';
import Orbitcontrols from 'three-orbitcontrols';


// initialize the light and provide all kinds of methods
class Utils{
    
    constructor(scene, width,height){
        // init camera 
        // this.light = new THREE.AmbientLight(0x686868);
        this.camera = new THREE.PerspectiveCamera( 60, width / height, 1, 2000 );
        this.camera.position.z = 10;
        this.camera.lookAt( scene.position );
        this.camera.position.set(50,50,50);
        //control
        let orbitControls = new /*THREE.OrbitControls*/Orbitcontrols(this.camera);
        orbitControls.autoRotate = false;
        // console.log('initing camera....');

        this.light = new THREE.PointLight(0xffffff, 1, 0);
        this.light.position.set(-100, 100, -100);


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
    showLight(){
        var geometry = new THREE.BoxGeometry( 2, 2, 2 );
        var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
        var cube = new THREE.Mesh( geometry, material );
        cube.position.set(this.light.position.x,this.light.position.y,this.light.position.z);
        return cube;
    }
    showCamera(){
        var geometry = new THREE.BoxGeometry( 10, 10, 10 );
        var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
        var cube = new THREE.Mesh( geometry, material );
        cube.position.set(this.camera.position.x,this.camera.position.y,this.camera.position.z);
        return cube;
    }
    
}

export default Utils;