# WebGL Particle Demo

This project is webgl demo contains a lot of WebGL features like particle system, terrain and etc. And this project is using the [es6-starter-kit](https://github.com/wbkd/yet-another-webpack-es6-starterkit) as the es6-starter. 


### Content
![alt text](https://github.com/MemoryWrong/webgl-demo/blob/master/src/assets/demo.png)

```
1. webgl THREE.js terrian features 
2. particle system demo (need to modify the code)


```

### Installation

```
npm install
```

### Start Dev Server 

```
npm run dev
```

### Build Prod Version

```
npm run build
```

### Features:

* ES6 Support via [babel-loader](https://github.com/babel/babel-loader)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)
* Hot Module Replacement

When you run `npm run build` we use the [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) to move the css to a separate file and included in the head of your `index.html`, so that the styles are applied before any javascript gets loaded. We disabled this function for the dev version, because the loader doesn't support hot module replacement.
