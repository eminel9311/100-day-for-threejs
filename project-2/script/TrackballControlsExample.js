

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
/**
 * fov - 75: góc đặt camera, thể hiện kích cỡ của vật thể để trước camera
 * window.innerWidth / window.innerHeight - độ phân giải của camera
 * 0.1 - độ gần của camera, default 0.1
 * 2000 - độ xa của camera, default 2000
 */
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);



const geometry = new THREE.SphereGeometry(1, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

camera.position.set(0, 0, 3);

const render = () => {
  renderer.render(scene, camera )
}

const update = () => {
  sphere.rotation.x += 0;
  sphere.rotation.y += 0.05;
}

const infinityLoop = () => {
  requestAnimationFrame(infinityLoop);
  render();
  update();
  controls.update();
}
scene.background = new THREE.Color( 'skyblue' );
const controls = new THREE.TrackballControls(camera, renderer.domElement);

infinityLoop();
// const render = () => {
//   renderer.render(scene, camera);
// };

// const update = () => {
//   cube.rotation.x += 0;
//   cube.rotation.y += 0.005;
// };

