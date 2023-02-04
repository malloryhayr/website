import 'server-only';

interface WakatimeLanguagesAllTimeResponse {
	data: {
		color: string;
		name: string;
		percent: number;
	}[];
}

interface WakatimeTimeDisplay {
	decimal: string;
	digital: string;
	hours: number;
	minutes: number;
	name: string;
	percent: number;
	text: string;
	total_seconds: number;
}

interface WakatimeStatsAllTimeResponse {
	data: {
		best_day: {
			created_at: string;
			date: string;
			id: string;
			modified_at: string;
			text: string;
			total_seconds: number;
		};
		categories: {
			decimal: string;
			digital: string;
			hours: number;
			minutes: number;
			name: string;
			percent: number;
			text: string;
			total_seconds: number;
		}[];
		created_at: string;
		daily_average: number;
		daily_average_including_other_language: number;
		days_including_holidays: number;
		days_minus_holidays: number;
		dependencies: WakatimeTimeDisplay[];
		editors: WakatimeTimeDisplay[];
		end: string;
		holidays: number;
		human_readable_daily_average: string;
		human_readable_daily_average_including_other_language: string;
		human_readable_range: string;
		human_readable_total: string;
		human_readable_total_including_other_language: string;
		id: string;
		is_already_updating: boolean;
		is_coding_activity_visible: boolean;
		is_including_today: boolean;
		is_other_usage_visible: boolean;
		is_stuck: boolean;
		is_up_to_date: boolean;
		is_up_to_date_pending_future: boolean;
		languages: WakatimeTimeDisplay[];
		machines: (WakatimeTimeDisplay & { machine_name_id: string })[];
		modified_at: string;
		operating_systems: WakatimeTimeDisplay[];
		percent_calculated: number;
		projects: WakatimeTimeDisplay[];
		range: 'all_time';
		start: string;
		status: string;
		timeout: number;
		timezone: string;
		total_seconds: number;
		total_seconds_including_other_language: number;
		user_id: string;
		username: 'iGalaxy';
		writes_only: boolean;
	};
}

export async function getWakatimeStatsAllTime(): Promise<WakatimeStatsAllTimeResponse> {
	let res = await fetch(
		`https://wakatime.com/api/v1/users/current/stats/all_time?api_key=${process.env.WAKATIME_KEY}`,
		{ next: { revalidate: 21600 } }
	);

	return res.json();
}

export async function getWakatimeLanguagesAllTime(): Promise<WakatimeLanguagesAllTimeResponse> {
	let res = await fetch(
		`https://wakatime.com/share/@iGalaxy/b8841fb0-94ff-4d39-b281-276b7ba55131.json`,
		{ next: { revalidate: 21600 } }
	);

	return res.json();
}
