export interface GitHubPinnedRepo {
	owner: string;
	repo: string;
	description: string;
	language: string;
	languageColor: string;
	stars: string;
	forks: string;
}

async function getData() {
	const data: GitHubPinnedRepo[] = await (
		await fetch(
			'https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=malloryhayr',
			{
				next: { revalidate: 10 },
			}
		)
	).json();

	return data;
}

function formatDescription(description: string) {
	if (description.length >= 34 && description[34] != ' ') {
		return {
			firstLine: description.slice(0, 32) + '-',
			secondLine: description.slice(32),
		};
	} else {
		return {
			firstLine: description.slice(
				0,
				description.length >= 33 ? 33 : description.length
			),
			secondLine: description.length >= 33 ? description.slice(33) : '',
		};
	}
}

function ProjectsFooter() {
	return (
		<p
			style={{
				color: '#ab48ab',
				textAlign: 'right',
				width: '100%',
				fontSize: '12px',
			}}
		>
			Fetched from{' '}
			<a
				href={`https://github.com/malloryhayr`}
				target="_blank"
				style={{ color: '#ab48ab' }}
				className="external"
			>
				GitHub
			</a>
		</p>
	);
}

function ProjectCard({
	repo,
	color,
	children,
}: React.PropsWithChildren<{
	repo: GitHubPinnedRepo | undefined;
	color: string;
}>) {
	if (!repo) {
		return (
			<div
				style={{
					width: '20.25rem',
					marginTop: '0.5rem',
					marginBottom: '0.5rem',
					border: `2px solid ${color}`,
					padding: '0.5rem',
					color: color,
				}}
				className="project"
			>
				{children}
			</div>
		);
	}

	const EMOJI_OVERRIDES: { [key: string]: string } = {
		'mcpeachpies/mcpeachpies-datapacks': '🍑',
	};

	let emoji = `${repo?.description
		.match(/\p{Extended_Pictographic}/gu)
		?.flat()
		.join('')}`;
	let description = repo?.description.replace(
		`${repo?.description
			.match(/\p{Extended_Pictographic}/gu)
			?.flat()
			.join('')} `,
		''
	);

	if (repo.owner == 'iGalaxyYT' && repo.repo == 'website')
		description += " (You're looking at it!)";

	if (EMOJI_OVERRIDES[`${repo.owner}/${repo.repo}`])
		emoji = EMOJI_OVERRIDES[`${repo.owner}/${repo.repo}`];

	return (
		<div
			style={{
				width: '20.25rem',
				marginTop: '0.5rem',
				marginBottom: '0.5rem',
				border: `2px solid ${color}`,
				padding: '0.5rem',
				color: color,
			}}
			className="project"
		>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<strong
					style={{
						display: 'inline-block',
						width: '210px',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
					}}
				>
					{emoji != 'undefined' ? `${emoji}` : ''}{' '}
					{repo.owner != 'iGalaxyYT' ? `${repo.owner}/` : ''}
					{repo.repo}
				</strong>
				<p>{repo.stars}★</p>
			</div>
			<p>{formatDescription(description).firstLine}</p>
			<p
				style={{
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					textOverflow: 'ellipsis',
				}}
			>
				{formatDescription(description).secondLine}
				&nbsp;
			</p>
			<p style={{ textAlign: 'right' }}>
				<a
					href={`https://github.com/${repo.owner}/${repo.repo}`}
					target="_blank"
					className="external"
				>
					Read More
				</a>
			</p>
		</div>
	);
}

export default async function Projects() {
	const data = await getData();

	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-between',
				marginTop: '0.5rem',
				marginLeft: '0.5rem',
				marginRight: '0.5rem',
			}}
		>
			{data.map(repo => {
				return (
					<ProjectCard
						key={`project-${repo.repo}`}
						color="#ffacff"
						repo={repo}
					/>
				);
			})}
			<ProjectsFooter />
		</div>
	);
}

export function ProjectsLoading() {
	'use client';

	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-between',
				marginTop: '0.5rem',
				marginLeft: '0.5rem',
				marginRight: '0.5rem',
			}}
		>
			<ProjectCard color="#ab48ab" repo={undefined}>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<strong>███████</strong>
					<p>0★</p>
				</div>
				<p>███████████████████████████████████</p>
				<p>██████████████████████</p>
				<p style={{ textAlign: 'right' }}>
					<a target="_blank" className="external" style={{ color: '#ab48ab' }}>
						Read More
					</a>
				</p>
			</ProjectCard>
			<ProjectCard color="#852c85" repo={undefined}>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<strong>███████</strong>
					<p>0★</p>
				</div>
				<p>███████████████████████████████████</p>
				<p>██████████████████████</p>
				<p style={{ textAlign: 'right' }}>
					<a target="_blank" className="external" style={{ color: '#852c85' }}>
						Read More
					</a>
				</p>
			</ProjectCard>
			<ProjectCard color="#631663" repo={undefined}>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<strong>███████</strong>
					<p>0★</p>
				</div>
				<p>███████████████████████████████████</p>
				<p>██████████████████████</p>
				<p style={{ textAlign: 'right' }}>
					<a target="_blank" className="external" style={{ color: '#631663' }}>
						Read More
					</a>
				</p>
			</ProjectCard>
			<ProjectsFooter />
		</div>
	);
}
