console.log('sup world');

/* CREATE A NEW THREE.JS SCENE */
var scene = new THREE.Scene();

/* CREATE A NEW THREE.JS CAMERA */
/* The PerspectiveCamera Method has a large field of view */
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000)

/* RENDER OUR THREE.JS SCENE */
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* ADD EVENT LISTENER */
/* This allows the page to be resizeable */
window.addEventListener('resize', function(){
  console.log('resize');
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize( width, height );
  camera.aspect= width/height;
  camera.updateProjectionMatrix();
});

/* ADD CONTROSL TO SCENE  */

var controls = new THREE.OrbitControls( camera, renderer.domElement);

/* SCENE LOGIC */
var update = function() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.005;
};

/* DRAW SCENE */
var render = function() {
  renderer.render(scene, camera);
};

/* CREATE THE SHAPE */
var geometry = new THREE.BoxGeometry(1, 1, 1);

/* CREATE A MATERIAL COLOR OR IMAGE TEXTURE */
var material = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  wireframe: true
});

var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 3;

/* RUN GAME LOOP (UPDATE, RENDER, REPEAT) */
var GameLoop = function() {
  requestAnimationFrame(GameLoop);
  update();
  render();
};


GameLoop();
