const scene =  new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
/**
 * fov - 75: góc đặt camera, thể hiện kích cỡ của vật thể để trước camera
 * window.innerWidth / window.innerHeight - độ phân giải của camera
 * 0.1 - độ gần của camera, default 0.1
 * 2000 - độ xa của camera, default 2000
 */
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000 );
console.log(window.innerWidth,  window.innerHeight)
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: '#0000FF', wireframe: true} );

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
}



infinityLoop()