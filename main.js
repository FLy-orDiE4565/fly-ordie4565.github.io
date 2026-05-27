import * as THREE from 'three';
function main() {
    const canvas = document.querySelector('#c');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas,
        alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(3,1,4);
    const material = new THREE.MeshBasicMaterial({color:0x60aadc});
    const cube = new THREE.Mesh(geometry,material);

    scene.add(cube);
    camera.position.z = 5;

    function animate(time) {
        cube.rotation.x = time / 2000;
        cube.rotation.y = time / 500;
        renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);
}
main();