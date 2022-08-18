const scene =  new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
/**
 * fov - 75: góc đặt camera, thể hiện kích cỡ của vật thể để trước camera
 * window.innerWidth / window.innerHeight - độ phân giải của camera
 * 0.1 - độ gần của camera, default 0.1
 * 2000 - độ xa của camera, default 2000
 */
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000 );
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const textureLoader = new THREE.TextureLoader();

const textureRight= textureLoader.load( 'images/1.jpg' );
const textureLeft = textureLoader.load( 'images/2.jpg' );
const textureTop = textureLoader.load( 'images/3.jpg' );
const textureBottom = textureLoader.load( 'images/4.jpg' );
const textureFront = textureLoader.load( 'images/5.jpg' );
const textureBack = textureLoader.load( 'images/6.jpg' );

const material = [
  new THREE.MeshBasicMaterial({map: textureRight}), //right
  new THREE.MeshBasicMaterial({map: textureLeft}), //left
  new THREE.MeshBasicMaterial({map: textureTop}), //top
  new THREE.MeshBasicMaterial({map: textureBottom}), //bottom
  new THREE.MeshBasicMaterial({map: textureFront}), //front
  new THREE.MeshBasicMaterial({map: textureBack}), //back
];


const cube = new THREE.Mesh( geometry, material );

scene.add( cube );

camera.position.set( 0, 0, 5 );


const render = () => {
  renderer.render(scene, camera);
};

const update = () => {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.005;
};

const infinityLoop = () => {
  requestAnimationFrame(infinityLoop);
  update();
  render();
  controls.update();
}


var controls = new THREE.TrackballControls(camera, renderer.domElement);
scene.background = new THREE.Color('skyblue');

infinityLoop();


