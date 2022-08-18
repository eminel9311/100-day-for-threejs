
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// check when the browser size has changed and adjust the camera accordingly
window.addEventListener('resize', function () {
  var WIDTH = window.innerWidth;
  var HEIGHT = window.innerHeight;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
});

var controls = new THREE.OrbitControls(camera, renderer.domElement);

camera.position.z = 600;
camera.position.y = 100;
camera.position.x = -100;

// instantiate a loader
var loader = new THREE.ObjectLoader();

// load a resource
loader.load
  (
    // resource URL
    './models/mining-dump-truck/mining-dump-truck.json',
    // Function when resource is loaded
    function (object) {
      scene.add(object);
    }
  );

var ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.8);
scene.add(ambientLight);


// game logic
var update = function () { };

// draw scene
var render = function () {
  renderer.render(scene, camera);
};

// run game loop (update, render, repeat)
var GameLoop = function () {
  requestAnimationFrame(GameLoop);
  update();
  render();
};

GameLoop();
