/* eslint-disable react/no-unknown-property */
import { useSnapshot } from "valtio";
import state from "../store";
import { easing } from 'maath';
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'; // Add this line to import the THREE object

const Shirt = () => {
    const snap  = useSnapshot(state)
    const {nodes, materials} = useGLTF('/shirt_baked.glb');
    const logoTexture = useTexture(snap.logoDecal) || new THREE.Texture(); // Use a default texture if loading fails
    const fullTexture = useTexture(snap.fullDecal) || new THREE.Texture(); // Use a default texture if loading fails


    useFrame((state, delta) =>  easing.dampC(materials.lamber1.color, snap.color, 0.25, delta));
    const stateString = JSON.stringify(snap);
    return (
        <group key={stateString}>
            <mesh castShadow geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} material-roughness={1} dispose={null}>
                {snap.isFullTexture && (
                    <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} map={fullTexture} />
                )}
                {snap.isLogoTexture && (
                    <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} map={logoTexture} map-anisotropy={16} depthTest={false} depthWrite={true} />
                )}
            </mesh>
        </group>
    );
};

export default Shirt;