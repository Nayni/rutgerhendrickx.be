import clsx from "clsx";
import format from "date-fns/format";

export interface TimelineProps {
	children: React.ReactNode | React.ReactNode[];
}

export function Timeline({ children }: TimelineProps) {
	return (
		<div
			className={clsx([
				"relative",
				"before:content-['']",
				"before:absolute",
				"before:w-[4px]",
				"before:h-full",
				"before:top-0",
				"before:left-0",
				"sm:before:left-[50%]",
				"sm:before:ml-[-4px]",
				"dark:before:bg-sky-500",
				"before:bg-sky-700",
			])}
		>
			{children}
		</div>
	);
}

export interface TimelineItemProps {
	period: React.ReactNode;
	children: React.ReactNode;
}

export function TimelineItem({ period, children }: TimelineItemProps) {
	return (
		<div
			className={clsx([
				"group",
				"relative",
				"flex",
				"flex-col",
				"sm:flex-row",
				"sm:even:flex-row-reverse",
				"flex-nowrap",
				"justify-between",
				"items-start",
			])}
		>
			<div
				className={clsx([
					"z-10",
					"absolute",
					"top-[12px]",
					"left-0",
					"sm:left-[50%]",
					"before:content-['']",
					"before:absolute",
					"before:w-[24px]",
					"before:h-[2px]",
					"before:top-[10px]",
					"sm:before:left-[-24px]",
					"before:z-[99999]",
					"dark:before:bg-sky-500",
					"before:bg-sky-700",
					"sm:group-even:before:left-0",
					"group-even:before:w-[20px]",
				])}
			/>
			<div className="flex-1 basis-0">
				<div
					className={clsx([
						"dark:bg-slate-800/80",
						"shadow-card",
						"border-l-[4px]",
						"border-solid",
						"dark:border-sky-500",
						"border-sky-700",
						"rounded",
						"my-[8px]",
						"ml-[20px]",
						"sm:ml-0",
						"group-even:ml-[20px]",
						"sm:group-odd:mr-[24px]",
						"sm:group-odd:border-l-0",
						"sm:group-odd:border-r-[4px]",
					])}
				>
					{children}
				</div>
			</div>
			<div className="flex-1">
				<div className="mx-8 my-3 group-even:text-right">{period}</div>
			</div>
		</div>
	);
}

export interface TimelinePeriodProps {
	startDate: Date;
	endDate?: Date;
}

export function TimelinePeriod({ startDate, endDate }: TimelinePeriodProps) {
	const startDateLabel = format(startDate, "MMM yyyy");
	const endDateLabel = endDate ? format(endDate, "MMM yyyy") : "Present";

	return (
		<div className={clsx(["dark:text-slate-500", "text-slate-500", "uppercase", "text-sm"])}>
			{startDateLabel} - {endDateLabel}
		</div>
	);
}
