import * as THREE from 'three';
class Light {
    constructor(scene){
        this.light = new THREE.DirectionalLight(0xe0e0e0);
        light.position.set(1, 1, 0).normalize();
        scene.add(light);
    }
    

}
export default Camera;