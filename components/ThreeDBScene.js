"use client"
// components/ThreeDDatabaseScene.js
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDDatabaseScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x111111);
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Lighting
        const light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(10, 10, 10);
        scene.add(light);

        // Mailbox
        const mailboxGroup = new THREE.Group();

        // Main Box
        const boxGeometry = new THREE.BoxGeometry(1, 0.6, 0.6);
        const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        const box = new THREE.Mesh(boxGeometry, boxMaterial);
        mailboxGroup.add(box);

        // Flag
        const flagGeometry = new THREE.BoxGeometry(0.1, 0.4, 0.02);
        const flagMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });
        const flag = new THREE.Mesh(flagGeometry, flagMaterial);
        flag.position.set(0.55, 0.3, 0);
        mailboxGroup.add(flag);

        // Slot
        const slotGeometry = new THREE.BoxGeometry(0.6, 0.02, 0.02);
        const slotMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
        const slot = new THREE.Mesh(slotGeometry, slotMaterial);
        slot.position.set(0, 0.2, 0.31);
        mailboxGroup.add(slot);

        scene.add(mailboxGroup);

        // Positioning
        mailboxGroup.position.z = -5;

        // Animation
        let xPos = -5;
        function animate() {
            requestAnimationFrame(animate);

            xPos += 0.02; // Moving speed
            if (xPos > 5) xPos = -5; // Reset position
            mailboxGroup.position.x = xPos;

            renderer.render(scene, camera);
        }

        camera.position.z = 5;
        animate();

        // Cleanup on component unmount
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default ThreeDDatabaseScene;
