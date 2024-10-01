"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Torus = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Torus Geometry
    const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);

    // Material
    const material = new THREE.MeshStandardMaterial({ color: 0x800080, metalness: 0.5, roughness: 0.5 });

    // Create and position 5 torus meshes stacked on each other with a little gap
    const tori: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const torus = new THREE.Mesh(geometry, material);
      torus.position.y = i * 0.3; // Adjust the gap between the rings
      torus.rotation.x = Math.PI / 4; // Bend the rings 45 degrees
      tori.push(torus);
      scene.add(torus);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      tori.forEach((torus, index) => {
        torus.rotation.y += 0.01 * (index + 1); // Add rotation for animation
      });
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default Torus;
