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
		await fetch('https://gh-pinned-repos.egoist.dev/?username=iGalaxyYT', {
			next: { revalidate: 10 },
		})
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
				href={`https://github.com/iGalaxyYT`}
				target="_blank"
				style={{ color: '#ab48ab' }}
			>
				GitHub
			</a>
		</p>
	);
}

function ProjectCard({
	children,
	color,
}: React.PropsWithChildren<{ color: string }>) {
	return (
		<div
			style={{
				width: '20rem',
				margin: '0.5rem',
				border: `2px solid ${color}`,
				padding: '0.5rem',
			}}
			className="project"
		>
			{children}
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
			}}
		>
			{data.map(repo => {
				const emoji = `${repo?.description
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

				return (
					<ProjectCard key={`project-${repo.repo}`} color="#ffacff">
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
								{emoji} {repo.repo}
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
							>
								Read More
							</a>
						</p>
					</ProjectCard>
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
			}}
		>
			<ProjectCard color="#ab48ab">
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
			</ProjectCard>
			<ProjectCard color="#852c85">
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
			</ProjectCard>
			<ProjectCard color="#631663">
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
			</ProjectCard>
			<ProjectsFooter />
		</div>
	);
}
