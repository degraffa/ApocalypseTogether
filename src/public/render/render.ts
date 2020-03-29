import {Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh} from "three";

// // three js stuff
// const threejsDiv = document.getElementById("threejs");
// const width = threejsDiv.clientWidth;
// const height = threejsDiv.clientHeight;

// const scene = new Scene();
// const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);

// const renderer = new WebGLRenderer();
// document.getElementById("threejs").appendChild(renderer.domElement);
// renderer.setSize(width, height);

// const geometry = new BoxGeometry();
// const material = new MeshBasicMaterial( { color: 0x00ff00 });
// const cube = new Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// const animate = () => {
//     requestAnimationFrame(animate);

//     console.log("yo bitch");
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
// };
// animate();