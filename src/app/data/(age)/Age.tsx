import dayjs from 'dayjs';

import { BIRTHDAY } from '@/lib/constants';
import AgeTooltip from './AgeTooltip';

const EVENTS = {
	'2005-03-13': 'I was born.',
};

export default function Age() {
	const weeksAlive = dayjs().diff(dayjs(BIRTHDAY), 'weeks');
	const yearsAlive = dayjs().diff(dayjs(BIRTHDAY), 'years');
	const yearsAliveDisplay = dayjs()
		.diff(dayjs(BIRTHDAY), 'years', true)
		.toFixed(2);

	return (
		<>
			<p style={{ marginBottom: '10px' }}>
				I've been alive for {yearsAliveDisplay} years. That's {weeksAlive}{' '}
				weeks.
			</p>
			<div>
				{Array(Math.floor(weeksAlive / 52))
					.fill(undefined)
					.map((x, i) => (
						<div
							style={{ display: 'flex', alignItems: 'center' }}
							key={`year${i}`}
						>
							<span
								style={{
									color: 'rgb(171, 72, 171)',
									paddingBottom: '4px',
									position: 'absolute',
									userSelect: 'none',
								}}
							>
								{i.toString().padStart(3, '0')}
							</span>
							<div
								style={{
									height: '0.6rem',
									width: 'calc(52*0.6rem + 51*0.3rem)',
									marginBottom: '0.3rem',
									display: 'flex',
									justifyContent: 'space-between',
									marginLeft: '2rem',
								}}
							>
								{Array(52)
									.fill(undefined)
									.map((y, j) => (
										<>
											<div
												style={{
													height: '0.6rem',
													width: '0.6rem',
													backgroundColor: Object.keys(EVENTS).find(
														x =>
															weeksAlive + dayjs(x).diff(dayjs(), 'weeks') ==
															j + i * 52
													)
														? '#ffacff'
														: 'rgb(171, 72, 171)',
												}}
												key={`year${i}-week${j}`}
												id={`year${i}-week${j}`}
											/>
											{Object.keys(EVENTS).find(
												x =>
													weeksAlive + dayjs(x).diff(dayjs(), 'weeks') ==
													j + i * 52
											) ? (
												<AgeTooltip id={`year${i}-week${j}`}>
													<strong>Week {j + 1 + i * 52}</strong> <br />
													{
														EVENTS[
															Object.keys(EVENTS).find(
																x =>
																	weeksAlive +
																		dayjs(x).diff(dayjs(), 'weeks') ==
																	j + i * 52
															) as keyof typeof EVENTS
														]
													}
												</AgeTooltip>
											) : (
												<></>
											)}
										</>
									))}
							</div>
						</div>
					))}
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<span
						style={{
							color: 'rgb(171, 72, 171)',
							paddingBottom: '4px',
							position: 'absolute',
							userSelect: 'none',
						}}
					>
						{yearsAlive.toString().padStart(3, '0')}
					</span>
					<div
						style={{
							height: '0.6rem',
							width: 'calc(52*0.6rem + 51*0.3rem)',
							marginBottom: '0.3rem',
							display: 'flex',
							justifyContent: 'space-between',
							marginLeft: '2rem',
						}}
						key={`year${yearsAlive}`}
					>
						{Array(weeksAlive % 52)
							.fill(undefined)
							.map((y, j) => (
								<div
									style={{
										height: '0.6rem',
										width: '0.6rem',
										backgroundColor:
											j + 1 + yearsAlive * 52 == weeksAlive
												? '#ffffff00'
												: Object.keys(EVENTS).find(
														x =>
															weeksAlive + dayjs(x).diff(dayjs(), 'weeks') ==
															j + yearsAlive * 52
												  )
												? '#ffacff'
												: 'rgb(171, 72, 171)',
										boxShadow:
											j + 1 + yearsAlive * 52 == weeksAlive
												? '0px 0px 0px 1px #ffacff inset'
												: 'none',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
									key={`year${yearsAlive}-week${j}`}
									id={`year${yearsAlive}-week${j}`}
								>
									{j + 1 + yearsAlive * 52 == weeksAlive ? (
										<>
											<div
												style={{
													height: 'calc(100% - 2px)',
													width: 'calc(100% - 2px)',
													display: 'flex',
													justifyContent: 'start',
													alignItems: 'start',
												}}
											>
												<div
													style={{
														width: `${
															(dayjs().diff(dayjs(BIRTHDAY), 'weeks', true) -
																dayjs().diff(dayjs(BIRTHDAY), 'weeks') / 1) *
															100
														}%`,
														height: '100%',
														backgroundColor: '#ffacff',
													}}
												></div>
											</div>
											<AgeTooltip id={`year${yearsAlive}-week${j}`}>
												<strong>Week {j + 1 + yearsAlive * 52}</strong> <br />
												<span>
													This week.{' '}
													<span style={{ color: 'rgb(171, 72, 171)' }}>
														(
														{(
															(dayjs().diff(dayjs(BIRTHDAY), 'weeks', true) -
																dayjs().diff(dayjs(BIRTHDAY), 'weeks') / 1) *
															100
														).toFixed(2)}
														% complete)
													</span>
												</span>
											</AgeTooltip>
										</>
									) : (
										<></>
									)}
									{Object.keys(EVENTS).find(
										x =>
											weeksAlive + dayjs(x).diff(dayjs(), 'weeks') ==
											j + yearsAlive * 52
									) ? (
										<AgeTooltip id={`year${yearsAlive}-week${j}`}>
											<strong>Week {j + 1 + yearsAlive * 52}</strong> <br />
											{
												EVENTS[
													Object.keys(EVENTS).find(
														x =>
															weeksAlive + dayjs(x).diff(dayjs(), 'weeks') ==
															j + yearsAlive * 52
													) as keyof typeof EVENTS
												]
											}
										</AgeTooltip>
									) : (
										<></>
									)}
								</div>
							))}
						{Array(52 - (weeksAlive % 52))
							.fill(undefined)
							.map((y, j) => (
								<div
									style={{
										height: '0.6rem',
										width: '0.6rem',
										boxShadow: '0px 0px 0px 1px rgb(171, 72, 171) inset',
									}}
									key={`year${yearsAlive}-week${(weeksAlive % 52) + j}`}
								/>
							))}
					</div>
				</div>
			</div>
		</>
	);
}

export function AgeLoading() {
	return (
		<>
			<p style={{ marginBottom: '10px' }}>
				I've been alive for ██ years. That's ███ weeks.
			</p>
		</>
	);
}
