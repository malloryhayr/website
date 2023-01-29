'use client';

import React, { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

export default function AgeTooltip({
	id,
	children,
}: React.PropsWithChildren<{
	id: string;
}>) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return isMounted ? (
		<Tooltip
			anchorId={id}
			place="top"
			className="ageTooltip"
			noArrow
			clickable
			offset={2}
		>
			{children}
		</Tooltip>
	) : (
		<></>
	);
}
