"use client";

import useSWR from "swr";

import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import { SiMastodon } from "@icons-pack/react-simple-icons";

const rosettaFont = localFont({
	src: "./(fonts)/rosetta.woff",
	display: "swap",
});

export default function Spotify() {
	const { data, error, isLoading } = useSWR<{ data: MastodonResponse }>(
		"/api/mastodon",
		(...args: [string | URL | Request, RequestInit?]) =>
			fetch(...args).then((res) => res.json())
	);

	function attachmentMap(attachment: MastodonAttachment) {
		const scaling = 210 / attachment.meta.original.width;
		return (
			<Link
				key={`attachment-${attachment.id}`}
				href={attachment.url}
				target="_blank"
			>
				<Image
					src={attachment.url}
					style={{
						cursor: "zoom-in",
						margin: "5px",
						borderRadius: "7px",
						objectFit: "cover",
						blockSize: "auto",
						border: "1px solid #2c3c52",
						verticalAlign: "top",
					}}
					width={210}
					height={attachment.meta.original.height * scaling}
					alt={attachment.description}
				/>
			</Link>
		);
	}

	if (data) {
		const post = data.data[0];
		const isBoosted = post.reblog ? true : false;

		return (
			<Link
				href={isBoosted ? post.reblog!.url : post.url}
				target="_blank"
				style={{ textDecoration: "none" }}
				className="embed"
			>
				<div
					style={{
						border: "1px solid #2c3c52",
						padding: "10px",
						minHeight: "75px",
						color: "#d4e3ed",
						borderRadius: "7px",
						marginTop: "1em",
						position: "relative",
						paddingBottom: "28px",
					}}
					className="mastodon"
				>
					{/* tweet-top */}
					{isBoosted ? (
						<div
							style={{
								marginLeft: "35px",
								marginBottom: "7px",
								fontSize: "13px",
							}}
						>
							<span
								style={{
									color: "rgb(119, 178, 85)",
									marginRight: "10px",
									verticalAlign: "text-bottom",
									display: "inline-block",
								}}
								className={rosettaFont.className}
							>
								
							</span>
							<span style={{ display: "inline-block", color: "#8394a1" }}>
								<Link
									href={post.account.url}
									target="_blank"
									style={{ color: "#8394a1" }}
								>
									{post.account.display_name}
								</Link>{" "}
								boosted
							</span>
						</div>
					) : (
						<></>
					)}
					{/* tweet-avatar-link */}
					<Link
						href={isBoosted ? post.reblog!.account.url : post.account.url}
						target="_blank"
						className="avatar"
						style={{ float: "left", marginRight: "10px" }}
					>
						<Image
							src={
								isBoosted ? post.reblog!.account.avatar : post.account.avatar
							}
							width={48}
							height={48}
							alt={
								isBoosted
									? post.reblog!.account.display_name
									: post.account.display_name
							}
							style={{ zIndex: 2, position: "relative", borderRadius: "5px" }}
						/>
					</Link>
					{/* tweet-header */}
					<div
						style={{
							display: "inline-block",
							width: "210px",
						}}
					>
						<Link
							href={isBoosted ? post.reblog!.account.url : post.account.url}
							target="_blank"
							style={{
								display: "inline",
								textDecoration: "none",
								position: "relative",
								bottom: "3px",
							}}
						>
							<b
								style={{
									maxWidth: "200px",
									display: "inline-block",
									overflow: "hidden",
									verticalAlign: "bottom",
									whiteSpace: "nowrap",
									fontWeight: 700,
									fontSize: "14px",
									color: "#d4e3ed",
									textOverflow: "ellipsis",
								}}
							>
								{isBoosted
									? post.reblog?.account.display_name
									: post.account.display_name}
							</b>
							<br />
							<span
								style={{
									display: "inline",
									direction: "ltr",
									unicodeBidi: "embed",
									fontSize: "13px",
									color: "#8394a1",
									textDecoration: "none",
								}}
							>
								@
								{isBoosted
									? post.reblog?.account.username
									: post.account.username}
							</span>
						</Link>
					</div>
					{/* tweet-body */}
					<article style={{ display: "flow-root", marginBottom: "-24px" }}>
						<div
							style={{
								display: "inline",
								fontSize: "14px",
								lineHeight: "20px",
								fontWeight: 400,
							}}
						>
							<span
								style={{ wordBreak: "break-word", whiteSpace: "break-spaces" }}
								dangerouslySetInnerHTML={{
									__html: isBoosted ? post.reblog?.content || "" : post.content,
								}}
							/>
						</div>
						{(isBoosted && post.reblog?.media_attachments.length != 0) ||
						post.media_attachments.length != 0 ? (
							<div
								style={{
									display: "block",
									position: "relative",
									right: "5px",
									width: "fit-content",
								}}
							>
								{isBoosted
									? post.reblog?.media_attachments.map(attachmentMap)
									: post.media_attachments.map(attachmentMap)}
							</div>
						) : (
							<></>
						)}
					</article>
					<SiMastodon
						style={{
							position: "absolute",
							top: "10px",
							right: "10px",
						}}
						width={16}
						color="rgb(212, 227, 237)"
					/>
				</div>
			</Link>
		);
	}
	return (
		<div
			style={{
				backgroundColor: "#1b2836",
				border: "1px solid #2c3c52",
				padding: "10px",
				minHeight: "75px",
				color: "#d4e3ed",
				borderRadius: "7px",
				marginTop: "1em",
				display: "flex",
				justifyContent: "end",
				flexDirection: "column",
				alignItems: "end",
			}}
			className="embed mastodon"
		>
			<SiMastodon
				style={{ float: "right", marginRight: "-2px", marginBottom: "-4px" }}
				width={16}
				color="rgb(212, 227, 237)"
			/>
		</div>
	);
}

interface MastodonResponse {
	0: MastodonPost;
}

interface MastodonPost {
	id: string;
	created_at: string;
	in_reply_to_id?: string;
	in_reply_to_account_id?: string;
	sensitive: boolean;
	spoiler_text: string;
	visibility: string;
	language?: string;
	uri: string;
	url: string;
	replies_count: number;
	reblogs_count: number;
	favourites_count: number;
	edited_at?: string;
	local_only: boolean;
	content: string;
	reblog?: MastodonPost;
	application?: {
		name: string;
		website?: string;
	};
	account: {
		id: string;
		username: string;
		acct: string;
		display_name: string;
		locked: boolean;
		bot: boolean;
		discoverable: boolean;
		group: boolean;
		created_at?: string;
		note: string;
		url: string;
		uri: string;
		avatar: string;
		avatar_static: string;
		header: string;
		header_static: string;
		followers_count: number;
		following_count: number;
		statuses_count: number;
		last_status_at: string;
		noindex: true;
		emojis: MastodonEmoji[];
		roles: {
			id: string;
			name: string;
			color: string;
		}[];
		fields: {
			name: string;
			value: string;
			verified_at?: string;
		}[];
	};
	media_attachments: MastodonAttachment[];
	emojis: MastodonEmoji[];
	card?: {
		url: string;
		title: string;
		description: string;
		language: string;
		type: string;
		author_name: string;
		author_url: string;
		provider_name: string;
		provider_url: string;
		html: string;
		width: number;
		height: number;
		image?: string;
		image_description: string;
		embed_url: string;
		blurhash?: string;
		published_at: string;
	};
}

interface MastodonEmoji {
	shortcode: string;
	url: string;
	static_url: string;
	visible_in_picker: boolean;
}

interface MastodonAttachment {
	id: string;
	type: string;
	url: string;
	preview_url: string;
	remote_url?: string;
	preview_remote_url?: string;
	text_url?: string;
	meta: {
		original: {
			width: number;
			height: number;
			size: string;
			aspect: number;
		};
		small: {
			width: number;
			height: number;
			size: string;
			aspect: number;
		};
		focus: {
			x: number;
			y: number;
		};
	};
	description: string;
	blurhash: string;
}
