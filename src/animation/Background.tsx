import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";


const Particles = () => {
    const pointsRef = useRef<THREE.Points>(null!);

    useFrame(() => {
        if (pointsRef.current) {
            pointsRef.current.rotation.x += 0.0005;
            pointsRef.current.rotation.y += 0.0005;
        }
    });

    return (
        <Points ref={pointsRef} scale={1.5}>
            <sphereGeometry args={[1.5, 64, 64]} />
            <PointMaterial color="#000" size={0.01} transparent opacity={0.8} />
        </Points>
    );
};

const Background = () => {
    useEffect(() => {
        console.log("Background.tsx montato!");
    }, []);
    return (
        <div className="">
            <Canvas className=" w-full h-full" camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <Particles /> {/* Adesso useFrame è dentro il Canvas! ✅ */}
            </Canvas>
        </div>
    );
};

export default Background;
