declare namespace NodeJS {
	interface ProcessEnv {
		readonly HYGRAPH_ENVIRONMENT: string;
		readonly HYGRAPH_API_TOKEN: string;
	}
}
