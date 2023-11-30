"use client";

import { ThreeElements, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

export default function Record(props: ThreeElements["mesh"]) {
	const [hovered, setHovered] = useState(false);
	const [clicked, setClicked] = useState(false);
	return (
		<mesh
			{...props}
			scale={clicked ? 1.5 : 1}
			rotation={[0, hovered ? 0.5 : Math.PI / 2, hovered ? 0.5 : 0]}
			onClick={() => setClicked(!clicked)}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
		>
			<boxGeometry args={[1, 1, 0.03125]} />
			<meshStandardMaterial color={"white"} />
		</mesh>
	);
}
