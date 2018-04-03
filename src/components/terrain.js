import * as THREE from 'three';
// import * as url from '../assets/terrain.png';
import heightmap from '../assets/terrain.png';

class Terrain{
    constructor(width, height) {
        console.log("init the terrain....");
        this.width = width;
        this.height = height;

        // define the height and width of the geometry and segments of height and width;
        this.geometry = new THREE.PlaneGeometry(
            width,
            height,
            width - 1,
            height - 1
        );
        let rotation = new THREE.Matrix4().makeRotationX(-Math.PI / 2);
        this.geometry.applyMatrix(rotation);

        this.loadImg();
    }
  

    getHeightData(img, size) {

        var canvas = document.createElement( 'canvas' );
        canvas.width = size;
        canvas.height = size;
        var context = canvas.getContext( '2d' );
    
        var area = size * size, data = new Float32Array( area );
    
        context.drawImage(img,0,0);
    
        for ( var i = 0; i < area; i ++ ) {
          data[i] = 0;
        }
    
        var imgd = context.getImageData(0, 0, size, size);
        var pix = imgd.data;
    
        var j=0;
        for (var i = 0, n = pix.length; i < n; i += (4)) {
          var all = pix[i]+pix[i+1]+pix[i+2];
          data[j++] = all/30;
        }
    
        return data;
    }

    loadImg(){
        console.log(heightmap);

        var img = new Image();
        console.log(img);
        
        var self = this;
        img.onload = function() {
          var heightData = self.getHeightData( img, 256 );
          console.log(heightData);
        //   // buildTerrainMesh( size, heightData, seaLevel_isOptional )
        //   var terrainMesh = buildTerrainMesh( 256, heightData, 1.0 );
        //   var terrain = loadTriangleMeshToVBO( terrainMesh );
        //   scene.add( terrain );
        };
        // var url = require('../assets/terrain.png');
        img.src = heightmap;
    }

    build() {
        // this.geometry.computeBoundingSphere();
        this.geometry.computeVertexNormals();
        this.material = new THREE.MeshLambertMaterial({
            wireframe:true
        });

        // loading the height map and get the data of the height
        // mapping the height data to x axis value;

        for(var i=0; i<this.geometry.vertices.length;i++){
            this.geometry.vertices[i].y = Math.random();
        }
        // console.log(this.geometry.vertices);
        
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.x = 0;
        this.mesh.position.z = 0;

        return this.mesh;
    }

}

export default Terrain;