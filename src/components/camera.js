import * as THREE from 'three';

class Camera {
    constructor(scene){
        this.camera = new THREE.PerspectiveCamera( 60, width / height, 1, 2000 );
        camera.position.x = -10;
        camera.position.y = 15;
        camera.position.z = 500;
        camera.lookAt( scene.position );
        scene.add(camera);
    
        console.log('initing camera....');
    }

}
export default Camera;