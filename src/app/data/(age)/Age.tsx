'use client';

import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';

import { BIRTHDAY } from '@/lib/constants';
import AgeTooltip from './AgeTooltip';

export default function Age() {
	dayjs.extend(isoWeeksInYear);
	dayjs.extend(isLeapYear);

	const weeksAlive = dayjs().diff(dayjs(BIRTHDAY), 'weeks');
	const yearsAlive = dayjs().diff(dayjs(BIRTHDAY), 'years');
	const yearsAliveDisplay = dayjs()
		.diff(dayjs(BIRTHDAY), 'years', true)
		.toFixed(2);

	return (
		<>
			<p style={{ marginBottom: '10px' }}>
				<span style={{ color: '#ab48ab' }}>{yearsAliveDisplay}</span> years
				alive (<span style={{ color: '#ab48ab' }}>{weeksAlive}</span> weeks)
			</p>
			<div>
				{Array(yearsAlive)
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
									height: '0.55rem',
									width: `calc(${dayjs(
										`${2005 + i}-03-13`
									).isoWeeksInYear()}*0.55rem + ${
										dayjs(`${2005 + i}-03-13`).isoWeeksInYear() - 1
									}*0.26rem)`,
									marginBottom: '0.3rem',
									display: 'flex',
									justifyContent: 'space-between',
									marginLeft: '2rem',
								}}
							>
								{Array(dayjs(`${2005 + i}-03-13`).isoWeeksInYear())
									.fill(undefined)
									.map((y, j) => (
										<div key={`year${i}-week${j}`}>
											<div
												style={{
													height: '0.55rem',
													width: '0.55rem',
													backgroundColor: 'rgb(171, 72, 171)',
												}}
												id={`year${i}-week${j}`}
											/>
										</div>
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
							height: '0.55rem',
							width: 'calc(52*0.55rem + 51*0.26rem)',
							marginBottom: '0.26rem',
							display: 'flex',
							justifyContent: 'space-between',
							marginLeft: '2rem',
						}}
						key={`year${yearsAlive}`}
					>
						{Array(dayjs().diff(dayjs('2022-03-13'), 'weeks'))
							.fill(undefined)
							.map((y, j) => (
								<div
									style={{
										height: '0.55rem',
										width: '0.55rem',
										backgroundColor:
											Array(dayjs().diff(dayjs('2022-03-13'), 'weeks')).fill(
												undefined
											).length ==
											j + 1
												? '#ffffff00'
												: 'rgb(171, 72, 171)',
										boxShadow:
											Array(dayjs().diff(dayjs('2022-03-13'), 'weeks')).fill(
												undefined
											).length ==
											j + 1
												? '0px 0px 0px 1px #ffacff inset'
												: 'none',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
									key={`year${yearsAlive}-week${j}`}
									id={`year${yearsAlive}-week${j}`}
								>
									{Array(dayjs().diff(dayjs('2022-03-13'), 'weeks')).fill(
										undefined
									).length ==
									j + 1 ? (
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
												<strong>
													Week{' '}
													{j +
														1 +
														yearsAlive *
															dayjs(
																`${2005 + yearsAlive}-03-13`
															).isoWeeksInYear()}
												</strong>{' '}
												<br />
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
								</div>
							))}
						{Array(
							dayjs(`${2005 + yearsAlive}-03-13`).isoWeeksInYear() -
								dayjs().diff(dayjs('2022-03-13'), 'weeks')
						)
							.fill(undefined)
							.map((y, j) => (
								<div
									style={{
										height: '0.55rem',
										width: '0.55rem',
										boxShadow: '0px 0px 0px 1px rgb(171, 72, 171) inset',
									}}
									key={`year${yearsAlive}-week${
										dayjs().diff(dayjs('2022-03-13'), 'weeks') + j
									}`}
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
