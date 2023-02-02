'use client';

import React from 'react';
import { Tooltip } from 'react-tooltip';

export default function AgeTooltip({
	id,
	children,
}: React.PropsWithChildren<{
	id: string;
}>) {
	return (
		<div>
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
		</div>
	);
}
