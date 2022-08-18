

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


// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( {color: '#0000FF', wireframe: true} );

const geometry = new THREE.SphereGeometry(1, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.set(0, 0, 4);



const render = () => {
  renderer.render(scene, camera);
};

const update = () => {
  cube.rotation.x += 0;
  cube.rotation.y += 0.005;
};

const reponsive = () => {
  window.addEventListener('resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });
}

const infinityLoop = () => {
  requestAnimationFrame(infinityLoop);
  update();
  render();
  reponsive();
}



infinityLoop();
scene.background = new THREE.Color('skyblue');
controls = new THREE.DragControls([cube], camera, renderer.domElement);
