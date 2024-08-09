/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react';
// import { Center } from '@react-three/drei';
import { Environment, Center } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CameraRig from './CameraRig';
import Backdrop from './Backdrop';
import Shirt from './Shirt';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error caught by boundary:', error, errorInfo);
    this.props.onError(error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong with the 3D rendering.</h1>;
    }

    return this.props.children; 
  }
}

const CanvasModel = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('CanvasModel mounted');
    return () => {
      console.log('CanvasModel unmounted');
    };
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <ErrorBoundary onError={setError}>
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 0], fov: 25 }} 
        gl={{ preserveDrawingBuffer: true }} 
        className='w-full max-w-full h-full transition-all ease-in'
        onCreated={({ gl }) => {
          console.log('Canvas created');
          gl.domElement.addEventListener('webglcontextlost', (event) => {
            console.log('WebGL context lost:', event);
          });
        }}
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <CameraRig>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>
    </ErrorBoundary>
  );
};

export default CanvasModel;