"use client";

import { Canvas } from "@react-three/fiber";

import Record from "./(components)/Record";

export default function Shelf() {
	return (
		<div style={{ width: "min(900px, 100vw)" }}>
			<h2 style={{ color: "var(--color-header)" }}>music</h2>
			<Canvas
				style={{ width: "min(900px, 100vw)", aspectRatio: "2 / 1" }}
				shadows
			>
				<ambientLight />
				<pointLight castShadow />
				<Record position={[0, 0, 0]} />
			</Canvas>
			<h2 style={{ color: "var(--color-header)" }}>games</h2>
			<h2 style={{ color: "var(--color-header)" }}>movies</h2>
		</div>
	);
}
