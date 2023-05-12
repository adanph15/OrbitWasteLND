import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';


const scene = new THREE.Scene();

function Map() {
  const sceneRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    sceneRef.current.appendChild(scene);
  }, []);

  return (
    <div ref={sceneRef} />
  );
}

const camera = new THREE.PerspectiveCamera(
  75, // campo de visión
  window.innerWidth / window.innerHeight, // relación de aspecto
  0.1, // distancia del plano cercano
  1000 // distancia del plano lejano
);
camera.position.set(0, 0, 10);
scene.add(camera);

const earthGeometry = new THREE.SphereGeometry(5, 32, 32);
const earthTexture = new THREE.TextureLoader().load('path/to/earth/texture.jpg');
const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh);
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
boxMesh.position.set(1, 2, 3);
scene.add(boxMesh);
boxMesh.addEventListener('click', () => {
  boxMesh.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
});

export default Map;