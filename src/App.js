import './App.css';
import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

const points = [];
points.push(new THREE.Vector3(- 10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
// const cube = new THREE.Mesh(geometry, matrial);
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);

scene.add(line);

// camera.position.z = 5;
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  // line.rotation.x += 0.01;
  // line.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
