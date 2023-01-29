export type GameStatus =
	| 'NOT_STARTED'
	| 'PLAYING'
	| 'COMPLETED_NOT_FULLY'
	| 'COMPLETED_FULLY'
	| 'NOT_FOR_COMPLETION'
	| 'WILL_NOT_COMPLETE';

export type GamePlatform =
	| 'STEAM'
	| 'EPIC'
	| 'ORIGIN'
	| 'PC'
	| 'OCULUS_PC'
	| 'OCULUS_QUEST'
	| 'NSW'
	| '3DS'
	| 'WII'
	| 'WIIU'
	| 'XBONE'
	| 'XBSX'
	| 'PS5';

export type GameTag =
	| 'EARLY_ACCESS'
	| 'FAVORITE'
	| 'PARTY'
	| 'REPLAYABLE'
	| 'VR';

export interface Game {
	title: string;
	release: string;
	platform: GamePlatform[];
	steamid?: string;
	cover: string;
	tags?: GameTag[];
}

export interface GamesResponse {
	notStarted: Game[];
	playing: Game[];
	completedNotFully: Game[];
	completedFully: Game[];
	notForCompletion: Game[];
	willNotComplete: Game[];
}

export type GameWithPlaytime = Game & { playtime: number | undefined };

export interface GamesResponseWithPlaytime {
	notStarted: GameWithPlaytime[];
	playing: GameWithPlaytime[];
	completedNotFully: GameWithPlaytime[];
	completedFully: GameWithPlaytime[];
	notForCompletion: GameWithPlaytime[];
	willNotComplete: GameWithPlaytime[];
}

export interface SteamLibraryResponse {
	response: {
		game_count: number;
		games: {
			appid: number;
			name: string;
			playtime_2weeks: number;
			playtime_forever: number;
			img_icon_url: string;
			has_community_visible_stats: boolean;
			achievements: SteamAchievement[];
		}[];
	};
}

export interface SteamAchievement {
	apiname: string;
	achieved: 0;
	unlocktime: 0;
}
