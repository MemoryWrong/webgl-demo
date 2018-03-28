class Loader{
    constructor(){

    }
    imageLoader(src){
        src = '/src/assets/terrain.png';
        
        return new Promise((resolve, reject)=>{
            var img = new Image();
            img.onload = ()=>{
                resolve(img);
            }
            img.src = src;
        })
    }
}