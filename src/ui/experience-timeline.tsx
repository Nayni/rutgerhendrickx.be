import { JobExperience } from "~/data/hygraph";

import { Tag } from "./tag";
import { Timeline, TimelineItem, TimelinePeriod } from "./timeline";

export interface ExperienceTimelineProps {
	jobExperiences: JobExperience[];
}

export function ExperienceTimeline({ jobExperiences }: ExperienceTimelineProps) {
	return (
		<Timeline>
			{jobExperiences.map((experience, index) => (
				<TimelineItem
					key={index}
					period={
						<TimelinePeriod
							startDate={new Date(experience.startDate)}
							endDate={experience.endDate ? new Date(experience.endDate) : undefined}
						/>
					}
				>
					<div className="px-6 py-4">
						<p className="text-lg font-bold text-sky-700 dark:text-sky-400">{experience.company}</p>
						<p className="text-md font-semibold text-sky-500 dark:text-sky-300">{experience.role}</p>
						{multiLineStringToArray(experience.description).map((paragraph, i) => (
							<p key={i} className="mt-2">
								{paragraph}
							</p>
						))}
					</div>
					<div className="w-full h-[1px] bg-slate-700/10 dark:bg-slate-700" />
					<div className="px-6 py-4">
						<div className="flex flex-wrap gap-2">
							{experience.tags.map((tag, i) => (
								<Tag key={i}>{tag}</Tag>
							))}
						</div>
					</div>
				</TimelineItem>
			))}
		</Timeline>
	);
}

function multiLineStringToArray(s: string) {
	return s.split("\n").filter(Boolean);
}
