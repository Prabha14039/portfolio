import {Suspense,useEffect,useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'; 
import CanvasLoader from '../Loader';


const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.65}
      groundColor="black" />
      <pointLight intensity={1} />
    <spotLight
      position={[-20,50,10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
    />
      <primitive 
        object={computer.scene}
        scale={isMobile? 0.66: 0.95}
        position={isMobile ? [0,-3,-2.2]:[0,-4,-1.5]}/>
    </mesh>
  )
}

const ComputersCanvas =()=>{
  const[isMobile,setIsMobile]=useState(false);
  useEffect(()=>{
    const MediaQuery = window.matchMedia('(max-width:500px)');

      setIsMobile(MediaQuery.matches);

      const handleMediaQueryChange= (event) => {
        setIsMobile(event.matches);
      }
      MediaQuery.addEventListener('change',handleMediaQueryChange);
      return() => {
        MediaQuery.removeEventListener('change',handleMediaQueryChange);
      }
  },[] )
  return(
    <Canvas
      frameLoop="demand"
      shadows
      camera={{position : [20,3,5], fov: 25}}
      gl={{ preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        /> 
      <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas;
