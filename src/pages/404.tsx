import Link from 'next/link';
import '../app/globals.scss';

export default function NotFound() {
	return (
		<main style={{ marginTop: '80px' }}>
			<p>
				<strong>404: not found</strong>
			</p>
			<p>
				return to{' '}
				<Link className="navLink" href="/">
					/
				</Link>
			</p>
		</main>
	);
}
