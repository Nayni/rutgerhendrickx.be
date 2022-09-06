import type { GetStaticPropsResult } from "next";

import { getJobExperiences, JobExperiencesQueryResult } from "~/data/hygraph";
import { Contact } from "~/ui/contact";
import { Copyright } from "~/ui/copyright";
import { ExperienceTimeline } from "~/ui/experience-timeline";
import { Intro } from "~/ui/intro";
import { Nav } from "~/ui/nav";
import { ThemeToggle } from "~/ui/theme";

interface Props {
	jobExperiences: JobExperiencesQueryResult["jobExperiences"];
}

export default function Home({ jobExperiences }: Props) {
	return (
		<div className="ml-auto mr-auto max-w-7xl">
			<main className="mx-[3vw] sm:mx-[5vw]">
				<div className="mt-24 max-w-2xl">
					<Intro />
				</div>
				<div className="mt-12">
					<ExperienceTimeline jobExperiences={jobExperiences} />
				</div>
				<div className="mt-12">
					<Contact />
				</div>
				<div className="mt-12">
					<Nav />
				</div>
			</main>
			<footer className="mx-[3vw] sm:mx-[5vw] mt-12 mb-12 flex justify-between items-end">
				<Copyright />
				<ThemeToggle />
			</footer>
		</div>
	);
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
	const jobExperiences = await getJobExperiences();

	return {
		props: {
			jobExperiences: jobExperiences ?? [],
		},
	};
}
