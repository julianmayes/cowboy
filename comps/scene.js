import ReactDOM from "react-dom";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Cactus from "../public/Cactus";
import useScrollTop from "../hooks/useScrollTop";
import { PerspectiveCamera } from "@react-three/drei";

export default function Scene({ scrollTop, position, windowSize }) {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        zIndex: -100,
        background: "#fef1dc",
      }}
    >
      <Suspense fallback={null}>
        <PerspectiveCamera
          fov={75}
          makeDefault
          rotation={
            windowSize.width > 500
              ? [
                  0.1 + -position.y / windowSize.height / 5,
                  0.25 + -position.x / windowSize.width / 2.5,
                  0,
                ]
              : [0, 0, 0]
          }
          position={windowSize.width > 500 
            ? [0, 0, 0] : [0, 0, 10]}
        />
        <ambientLight />
        <pointLight position={[-10, -10, 10]} />
        <pointLight
          position={[-10, -10, 100]}
          color={"#FF9900"}
          intensity={10}
        />
        <Cactus px={5} py={-5} pz={-10} ry={1} scrollTop={scrollTop} />
        <Cactus px={-10} py={-5} pz={-30} ry={2} scrollTop={scrollTop} />
      </Suspense>
    </Canvas>
  );
}