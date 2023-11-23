import Link from "next/link";

import {
	SiYoutube,
	SiMastodon,
	SiTwitter,
	SiTumblr,
} from "@icons-pack/react-simple-icons";

import YouTube from "./(components)/(socials)/YouTube";

export default async function Home() {
	return (
		<div style={{ width: "min(900px, 100vw)", display: "flex" }}>
			<div style={{ width: "calc(600px - 0.625em)", marginRight: "1.25em" }}>
				<main>
					<h2>about me</h2>
					<p>Hey! I'm Mallory</p>
					<p>
						I'm a student, computer scientist, game designer, & Minecraft
						enthusiast. I make things, sometimes
					</p>
					<p>
						I help with community management over at{" "}
						<Link href="https://existencesmp.com" target="_blank">
							Existence SMP
						</Link>
					</p>
				</main>
			</div>
			<div style={{ width: "calc(300px - 0.625em)", marginTop: "2.5em" }}>
				<h2 style={{ color: "var(--color-header)", textAlign: "center" }}>
					elsewhere on the web
				</h2>
				<YouTube />
				<main
					style={{
						marginTop: "1em",
						padding: "0",
						backgroundColor: "#ffe9cf",
						borderColor: "#dbb68a",
						color: "#8a341a",
					}}
				>
					<h3
						style={{
							display: "inline-flex",
							marginTop: "0.9em",
							marginLeft: "1em",
							marginRight: "1em",
						}}
					>
						<SiMastodon style={{ marginRight: "0.25em" }} /> mastodon
					</h3>
				</main>
				<main
					style={{
						marginTop: "1em",
						padding: "0",
						backgroundColor: "#c7e8fc",
						borderColor: "#336791",
						color: "#214c70",
					}}
				>
					<h3
						style={{
							display: "inline-flex",
							marginTop: "0.9em",
							marginLeft: "1em",
							marginRight: "1em",
						}}
					>
						<div
							style={{
								width: "24px",
								height: "24px",
								background: "linear-gradient(#214c70, #5489b4)",
								marginRight: "0.25em",
								borderRadius: "0.125em",
							}}
						></div>{" "}
						bluesky
					</h3>
				</main>
				<main
					style={{
						marginTop: "1em",
						padding: "0",
						color: "#001935",
					}}
				>
					<h3
						style={{
							display: "inline-flex",
							marginTop: "0.9em",
							marginLeft: "1em",
							marginRight: "1em",
						}}
					>
						<SiTumblr style={{ marginRight: "0.25em" }} /> tumblr
					</h3>
				</main>
			</div>
		</div>
	);
}
