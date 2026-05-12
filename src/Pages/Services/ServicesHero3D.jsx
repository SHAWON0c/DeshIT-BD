import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Cpu,
  Globe2,
  Smartphone,
  Sparkles,
} from "lucide-react";
import Button from "../../Components/UI/Button";

const heroPoints = [
  "Product discovery",
  "Architecture and UI planning",
  "Engineering, QA, and launch",
];

const serviceTiles = [
  { label: "Web", Icon: Globe2 },
  { label: "Mobile", Icon: Smartphone },
  { label: "AI", Icon: BrainCircuit },
  { label: "IoT", Icon: Cpu },
  { label: "Custom", Icon: Code2 },
];

const ServicesHero3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 1.4, 7.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    scene.add(root);

    const red = new THREE.Color("#EB2127");
    const darkRed = new THREE.Color("#C81016");
    const white = new THREE.Color("#ffffff");

    const ambient = new THREE.AmbientLight(0xffffff, 1.15);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const redLight = new THREE.PointLight(red, 3.2, 12);
    redLight.position.set(-3.8, 2.6, 3);
    scene.add(redLight);

    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x2b1115,
      roughness: 0.42,
      metalness: 0.22,
      emissive: 0x260608,
      emissiveIntensity: 0.25,
    });

    const topMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.28,
      metalness: 0.08,
      emissive: 0xffffff,
      emissiveIntensity: 0.05,
    });

    const accentMaterial = new THREE.MeshStandardMaterial({
      color: red,
      roughness: 0.35,
      metalness: 0.25,
      emissive: darkRed,
      emissiveIntensity: 0.35,
    });

    const hexShape = new THREE.Shape();
    const radius = 1.15;
    for (let index = 0; index < 6; index += 1) {
      const angle = (Math.PI / 3) * index + Math.PI / 6;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      if (index === 0) hexShape.moveTo(x, y);
      else hexShape.lineTo(x, y);
    }
    hexShape.closePath();

    const hexGeometry = new THREE.ExtrudeGeometry(hexShape, {
      depth: 0.22,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.025,
      bevelThickness: 0.025,
    });
    hexGeometry.center();

    for (let layer = 0; layer < 4; layer += 1) {
      const mesh = new THREE.Mesh(hexGeometry, layer === 0 ? topMaterial : coreMaterial);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.y = 0.68 - layer * 0.22;
      mesh.scale.setScalar(1 - layer * 0.06);
      root.add(mesh);
    }

    const nodeGroup = new THREE.Group();
    root.add(nodeGroup);

    const nodeGeometry = new THREE.IcosahedronGeometry(0.2, 1);
    for (let index = 0; index < 10; index += 1) {
      const node = new THREE.Mesh(nodeGeometry, accentMaterial);
      const angle = (Math.PI * 2 * index) / 10;
      node.position.set(Math.cos(angle) * 2.3, 0.15 + Math.sin(index) * 0.15, Math.sin(angle) * 2.3);
      nodeGroup.add(node);
    }

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: red,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
    });

    [2.25, 3.1].forEach((ringRadius, index) => {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(ringRadius, ringRadius + 0.012, 128),
        ringMaterial
      );
      ring.rotation.x = Math.PI / 2;
      ring.rotation.z = index * 0.45;
      root.add(ring);
    });

    const lineMaterial = new THREE.LineBasicMaterial({
      color: red,
      transparent: true,
      opacity: 0.38,
    });

    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-3.2, 0, 0),
      new THREE.Vector3(3.2, 0, 0),
      new THREE.Vector3(0, 0, -3.2),
      new THREE.Vector3(0, 0, 3.2),
    ]);
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    root.add(lines);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 90;
    const positions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 7;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 3.5;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        color: white,
        size: 0.018,
        transparent: true,
        opacity: 0.42,
      })
    );
    scene.add(particles);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      const nextWidth = Math.max(1, width);
      const nextHeight = Math.max(1, height);
      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight, false);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    let frameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      root.rotation.y = elapsed * 0.32;
      root.rotation.x = Math.sin(elapsed * 0.55) * 0.08;
      nodeGroup.rotation.y = elapsed * 0.5;
      particles.rotation.y = elapsed * 0.05;
      redLight.position.x = Math.sin(elapsed) * 3.5;
      redLight.position.z = Math.cos(elapsed) * 3.5;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      mount.removeChild(renderer.domElement);
      hexGeometry.dispose();
      nodeGeometry.dispose();
      ringMaterial.dispose();
      lineMaterial.dispose();
      coreMaterial.dispose();
      topMaterial.dispose();
      accentMaterial.dispose();
      particlesGeometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#111827] pt-36 pb-16 text-white md:pt-44 md:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(235,33,39,0.24),transparent_32%)]"></div>
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-0">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#EB2127]">
              <Sparkles className="h-4 w-4" />
              Service engineering studio
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-[68px]">
              Build service systems that move like products
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-xl">
              Ondrobit combines strategy, UI, engineering, QA, and launch
              support into one focused service flow for web, mobile, AI,
              automation, and connected systems.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroPoints.map((point) => (
                <div key={point} className="flex items-start gap-2 text-sm text-gray-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#EB2127]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button as={Link} to="/contact" variant="primary">
                Discuss service scope
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button as="a" href="#catalog" variant="darkOutline">
                Browse catalog
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[420px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] md:h-[520px]">
              <div ref={mountRef} className="absolute inset-0" />

              <div className="pointer-events-none absolute left-5 top-5 rounded-lg border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#EB2127]">
                  Service Core
                </p>
                <p className="mt-1 text-sm text-white">Design to deployment</p>
              </div>

              <div className="pointer-events-none absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {serviceTiles.map(({ label, Icon }) => (
                  <div
                    key={label}
                    className="rounded-lg border border-white/10 bg-white/10 p-3 text-center backdrop-blur-md"
                  >
                    {React.createElement(Icon, {
                      className: "mx-auto h-5 w-5 text-[#EB2127]",
                    })}
                    <p className="mt-1 text-xs font-semibold text-white">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero3D;
