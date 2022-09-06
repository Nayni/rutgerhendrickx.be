import { gql, GraphQLClient } from "graphql-request";

const client = new GraphQLClient(process.env.HYGRAPH_ENVIRONMENT, {
	headers: {
		authorization: `Bearer ${process.env.HYGRAPH_API_TOKEN}`,
		"gcms-stage": process.env.NODE_ENV === "production" ? "PUBLISHED" : "DRAFT",
	},
});

export interface JobExperience {
	id: string;
	company: string;
	role: string;
	description: string;
	startDate: string;
	endDate: string;
	tags: string[];
}

export interface JobExperiencesQueryResult {
	jobExperiences: JobExperience[];
}

export async function getJobExperiences() {
	const data = await client.request<JobExperiencesQueryResult>(gql`
		query getJobExperiences {
			jobExperiences(orderBy: createdAt_DESC) {
				id
				company
				role
				description
				startDate
				endDate
				tags
			}
		}
	`);

	return data.jobExperiences;
}
