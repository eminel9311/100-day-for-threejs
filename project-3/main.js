

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// create the shape
var geometry = new THREE.TorusGeometry(10, 4, 16, 100); // size of box

var textureLoader = new THREE.TextureLoader();
var texture0 = textureLoader.load('images/brick.jpg'); //right
//create material, color or image
var material =
  new THREE.MeshLambertMaterial({
    color: 0xc9f6cb,
    side: THREE.DoubleSide
  });
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.set(30, 30, 20);

var light = new THREE.DirectionalLight(0xffffff);
light.position.set(1, 1, 1);
scene.add(light);

var light = new THREE.DirectionalLight(0x002288);
light.position.set(- 1, - 1, - 1);
scene.add(light);

var light = new THREE.AmbientLight(0x222222);
scene.add(light);

//game login
var update = function () {
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.005;
};

// draw scene
var render = function () {
  renderer.render(scene, camera);
};

//run gameloop (update, render, repeat)
var GameLoop = function () {
  requestAnimationFrame(GameLoop);
  update();
  render();
};

GameLoop();
// Just for fun
scene.background = new THREE.Color('skyblue');

// orbit control:
var controls = new THREE.OrbitControls(camera, renderer.domElement);

