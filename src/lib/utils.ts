export const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

export function formatSeconds(
	input: number,
	options?: {
		hours?: boolean;
		minutes?: boolean;
		seconds?: boolean;
		compact?: boolean;
	}
) {
	const defaultOptions = {
		hours: true,
		minutes: true,
		seconds: false,
		compact: false,
	};
	options = { ...defaultOptions, ...options };

	const hours = Math.floor(input / 3600);
	const minutes = Math.floor((input % 3600) / 60);
	const seconds = Math.floor((input % 3600) % 60);

	if (!options.compact) {
		if (options.hours && options.minutes && options.seconds) {
			return `${hours} hour${hours != 1 ? 's' : ''}, ${minutes} minute${
				minutes != 1 ? 's' : ''
			}, and ${seconds} second${seconds != 1 ? 's' : ''}`;
		} else if (options.hours && options.minutes) {
			return `${hours} hour${hours != 1 ? 's' : ''} and ${minutes} minute${
				minutes != 1 ? 's' : ''
			}`;
		} else if (options.hours) {
			return `${hours} hour${hours != 1 ? 's' : ''}`;
		}
	}

	return `${options.hours ? `${hours}h` : ''} ${
		options.minutes ? `${minutes}m` : ''
	} ${options.seconds ? `${seconds}s` : ''}`.trim();
}

export function sum(...values: number[]): number {
	return values.reduce((a, b) => a + b, 0);
}
