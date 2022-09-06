import Image from "next/image";

const EMAIL = process.env.NEXT_PUBLIC_EMAIL;
const MAILTO_URL = `mailto:${EMAIL}`;

export function Contact() {
	return (
		<div className="flex gap-2">
			<div className="flex-1">
				<div>
					<h2 className="text-2xl font-bold text-sky-700 dark:text-sky-400">
						Got a question?
						<span className="block ml-4 text-base font-normal text-sky-600 dark:text-sky-300">
							or maybe a new opportunity?
						</span>
					</h2>
					<p className="mt-12">
						Don&apos;t hestitate to{" "}
						<a
							className="font-semibold underline text-sky-700 dark:text-sky-500 hover:font-bold hover:text-sky-900 dark:hover:text-sky-400"
							href={MAILTO_URL}
						>
							get in touch!
						</a>
					</p>
				</div>
			</div>
			<div className="hidden md:block relative flex-1 rounded-xl shadow-card dark:bg-slate-800/80 h-[300px]">
				<Image
					className="rounded-xl"
					alt="Mountains"
					src="/mailbox.jpg"
					layout="fill"
					objectFit="cover"
					quality={100}
				/>
			</div>
		</div>
	);
}
