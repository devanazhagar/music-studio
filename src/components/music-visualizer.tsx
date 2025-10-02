"use client";

import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { Button } from './ui/button';
import { Play, Pause } from 'lucide-react';

function getFrequencyData(analyser: AnalyserNode) {
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);
    return dataArray;
}

function Scene({ analyser }: { analyser: AnalyserNode | null }) {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} color="white" intensity={0.8} />
      <Core analyser={analyser} />
      {analyser && <Tendrils analyser={analyser} />}
      <OrbitControls enableZoom={false} />
    </>
  );
}

function Core({ analyser }: { analyser: AnalyserNode | null }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (analyser) {
      const dataArray = getFrequencyData(analyser);
      // Bass frequencies (first few bins)
      const bass = dataArray.slice(0, 4).reduce((a, b) => a + b, 0) / 4;
      const scale = 1 + (bass / 255) * 0.5;
      if (meshRef.current) {
        meshRef.current.scale.set(scale, scale, scale);
      }
    } else {
      const time = clock.getElapsedTime();
      const scale = 1 + 0.1 * Math.sin(time * 1.5);
      if (meshRef.current) {
        meshRef.current.scale.set(scale, scale, scale);
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#ff00ff"
        emissive="#ff00ff"
        emissiveIntensity={0.7}
        toneMapped={false}
      />
    </mesh>
  );
}

function Tendrils({ analyser }: { analyser: AnalyserNode }) {
  const count = 200;
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -20 + Math.random() * 40;
      const yFactor = -20 + Math.random() * 40;
      const zFactor = -20 + Math.random() * 40;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const dataArray = getFrequencyData(analyser);
    const midHigh = dataArray.slice(10, 100).reduce((a, b) => a + b, 0) / 90;
    const energy = midHigh / 255;

    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.max(1.5, Math.cos(t) * 5 * (1 + energy));

      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshStandardMaterial
        color="#00ffff"
        emissive="#00ffff"
        emissiveIntensity={0.6}
        toneMapped={false}
      />
    </instancedMesh>
  );
}

export function MusicVisualizer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);

      if (!analyser) {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const source = audioContext.createMediaElementSource(audioRef.current);
        const newAnalyser = audioContext.createAnalyser();
        newAnalyser.fftSize = 256;
        source.connect(newAnalyser);
        newAnalyser.connect(audioContext.destination);
        setAnalyser(newAnalyser);
      }
    }
  };

  return (
    <div className="relative w-full h-full">
      <audio ref={audioRef} src="/music.mp3" loop />
      <div className="absolute top-4 left-4 z-10">
        <Button onClick={handlePlayPause} size="icon">
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      </div>
      <Canvas camera={{ position: [0, 0, 15] }}>
        <Scene analyser={analyser} />
        <EffectComposer>
            <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} intensity={1.5} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}