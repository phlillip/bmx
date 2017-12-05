// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 4;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

var light = new THREE.HemisphereLight( 0xeeeeee, 0x888888, 1 );
	light.position.set( 0, 20, 0 );
	scene.add( light );
	
	// controls
    controls = new THREE.OrbitControls( camera );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Central gem
var geometrycenter = new THREE.SphereGeometry( 0.5, 6, 7 );

var materialcenter = new THREE.MeshPhongMaterial( { 
	color: 0x32cd32, 
        shading: THREE.FlatShading,
        polygonOffset: true,
        polygonOffsetFactor: 0.5, // positive value pushes polygon further away
        polygonOffsetUnits: 0.5
	} );
	
// mesh solid
    var mesh = new THREE.Mesh( geometrycenter, materialcenter );
    scene.add( mesh );
    
     // mesh wireframe
    var geo = new THREE.EdgesGeometry( mesh.geometry ); // or WireframeGeometry
    var mat = new THREE.LineBasicMaterial( { color: 0x21bc21, linewidth: 1 } );
    var wireframemesh = new THREE.LineSegments( geo, mat );
    mesh.add( wireframemesh );
    
var cubecenter = new THREE.Mesh( geometrycenter, materialcenter );




// inner cage
var geometryinner = new THREE.BoxGeometry( 1, 1, 1 );
var geoinner = new THREE.EdgesGeometry( geometryinner ); // or WireframeGeometry( geometry )
var matinner = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 2 } );
var wireframeinner = new THREE.LineSegments( geoinner, matinner );

// outer cage
var geometry = new THREE.BoxGeometry( 2, 2, 2 );
var geo = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry( geometry )
var mat = new THREE.LineBasicMaterial( { color: 0xff1493, linewidth: 4 } );
var wireframe = new THREE.LineSegments( geo, mat );

// Add objects
scene.add( cubecenter );
scene.add( wireframe );
scene.add( wireframeinner );

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  wireframe.rotation.x -= 0.02;
  wireframe.rotation.y -= 0.02;
  wireframeinner.rotation.x += 0.01;
  wireframeinner.rotation.y += 0.01;
  //cubecenter.rotation.x += 0.005;
  //cubecenter.rotation.y += 0.005;
  //wireframemesh.rotation.x += 0.005;
  //wireframemesh.rotation.y += 0.005;

  // Render the scene
  renderer.render(scene, camera);
};

render();
