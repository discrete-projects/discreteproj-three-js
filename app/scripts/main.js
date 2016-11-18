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

/* CREATE THE SHAPE */
var geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
var cubeMaterials = [
  // new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide}), /* RIGHT SIDE */
  new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('../images/1.jpg'), side: THREE.DoubleSide}), /* RIGHT SIDE */
  new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('../images/2.jpg'), side: THREE.DoubleSide}), /* LEFT SIDE */
  new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('../images/3.jpg'), side: THREE.DoubleSide}), /* TOP SIDE */
  new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('../images/4.jpg'), side: THREE.DoubleSide}), /* BOTTOM SIDE */
  new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('../images/5.jpg'), side: THREE.DoubleSide}), /* FRONT SIDE */
  new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('../images/6.jpg'), side: THREE.DoubleSide})  /* BACK SIDE */
];

/* CREATE A MATERIAL COLOR OR IMAGE TEXTURE */
var material = new THREE.MeshFaceMaterial(cubeMaterials);
// var material = new THREE.MeshBasicMaterial({
//   color: 0xFFFFFF,
//   wireframe: true
// });

var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 3;

/* Ambient Light */
var ambientLight = new THREE.AmbientLight (0xFFFFFF, 0.5);
scene.add( ambientLight );

var light1 = new THREE.PointLight( 0xFF0040, 6, 50 );
scene.add(light1);


var light2 = new THREE.PointLight( 0xFF40FF, 5, 50 );
scene.add(light2);


var light3 = new THREE.PointLight( 0x80FF80, 8, 50 );
scene.add(light3);


var directionalLight - new THREE.DirectionalLight( 0xFFFFFF, 1 );
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

var spotLight = mew THREE.SportLight(0XFF45F6, 25);
spotLight.position.set(0, 3, 0);
scene.add(spotLight);


/* SCENE LOGIC */
var update = function() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.005;

  var time = Date.now() * 0.0005;

  light1.position.x = Math.sin(time * 0.7) * 30;
  light1.position.y = Math.cos(time * 0.5) * 40;
  light1.position.z = Math.cos(time * 0.3) * 30;

  light2.position.x = Math.sin(time * 0.7) * 30;
  light2.position.y = Math.cos(time * 0.5) * 40;
  light2.position.z = Math.cos(time * 0.3) * 30;

  light3.position.x = Math.sin(time * 0.7) * 30;
  light3.position.y = Math.cos(time * 0.5) * 40;
  light3.position.z = Math.cos(time * 0.3) * 30;
};

/* DRAW SCENE */
var render = function() {
  renderer.render(scene, camera);
};


/* RUN GAME LOOP (UPDATE, RENDER, REPEAT) */
var GameLoop = function() {
  requestAnimationFrame(GameLoop);
  update();
  render();
};


GameLoop();
