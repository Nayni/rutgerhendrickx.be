import "~/ui/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark">
			<>
				<Head>
					<title>rutgerhendrickx.be</title>
					<meta name="description" content="Personal website of Rutger Hendrickx" />
					<meta property="og:title" content="rutgerhendrickx.be" />
					<meta property="og:description" content="Personal website of Rutger Hendrickx" />
					<meta property="og:type" content="website" />
					<meta property="twitter:card" content="summary" />
					<meta property="twitter:creator" content="rutgerhendrickx@gmail.com" />
					<meta property="twitter:title" content="rutgerhendrickx.be" />
					<meta property="twitter:description" content="Personal website of Rutger Hendrickx" />
					<meta
						property="keywords"
						content="rutger, hendrickx, rutgerhendrickx, cv, curriculum vitae, personal website, portfolio"
					/>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Component {...pageProps} />
			</>
		</ThemeProvider>
	);
}
