import clsx from "clsx";

export interface TagProps {
	children: React.ReactNode;
}

export function Tag({ children }: TagProps) {
	return (
		<div
			className={clsx([
				"px-2",
				"py-1",
				"rounded-full",
				"text-xs",
				"font-medium",
				"bg-sky-700/10",
				"dark:bg-sky-400/10",
				"text-sky-700",
				"dark:text-sky-400",
			])}
		>
			{children}
		</div>
	);
}
