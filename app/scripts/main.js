console.log('\'Allo \'Allo!');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000)

/* We want depth so we will pick a PerspectiveCamera. Bigger the field of view the more we can see */

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/*GAME LOGIC*/
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
