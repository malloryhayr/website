'use client';

import Image from 'next/image';

import Logo from '../apple-icon.png';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeChanger() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted)
		return <Image src={Logo} width={32} height={32} alt="icon" id="logo" />;

	const themes = [
		'red',
		'orange',
		'yellow',
		'green',
		'blue',
		'purple',
		// 'rainbow',
	];

	function getNextTheme() {
		if (theme == undefined) return 0;
		const currentIndex = themes.indexOf(theme);
		let newIndex = currentIndex + 1;
		console.log(newIndex, themes.length);
		if (currentIndex >= themes.length - 1) newIndex = 0;
		return newIndex;
	}

	return (
		<Image
			src={Logo}
			width={32}
			height={32}
			alt="icon"
			onClick={() => setTheme(themes[getNextTheme()])}
			onMouseDown={() => setClicked(true)}
			onMouseUp={() => setClicked(false)}
			onMouseLeave={() => setClicked(false)}
			className={clicked ? 'clicked' : ''}
			id="logo"
		/>
	);
}
