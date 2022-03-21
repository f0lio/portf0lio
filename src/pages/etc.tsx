import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Layout from '@components/Layout';
import { Title } from '@components/common/Text';
import { MaxWidthWrapper } from '@components/common/Containers';

function Box(props) {
	// This reference will give us direct access to the mesh

	const mesh = useRef();
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);

	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame((state, delta) => {
		if (mesh.current) {
			// mesh.current!.rotation.x += 0.01;
			// mesh.current!.rotation.y += 0.01;
			// mesh.current!.rotation.z += 0.01;
		}
	});

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 1}
			onClick={(event) => setActive(!active)}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	);
}

const Etc = () => {
	return (
		<Layout pageName={'etc'} pageTitle="F0lio - Etc">
			<MaxWidthWrapper>
				<Title>Etc</Title>
				{/* <Canvas>
					<ambientLight />
					<pointLight position={[10, 10, 10]} />
					<Box position={[-1.2, 0, 0]} />
					<Box position={[1.2, 0, 0]} />
				</Canvas> */}
			</MaxWidthWrapper>
		</Layout>
	);
};
export default Etc;
