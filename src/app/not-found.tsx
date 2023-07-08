import Image from 'next/image';

export default function NotFound() {
	return (
		<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
			<Image
				src="/assets/under_construction.gif"
				width={256}
				height={256}
				alt="under construction"
			/>
		</div>
	);
}
