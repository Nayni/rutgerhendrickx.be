import clsx from "clsx";
import { useTheme as useNextTheme } from "next-themes";
import { useCallback, useEffect, useMemo, useState } from "react";

export type Theme = "light" | "dark";

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<div>
			<button
				className={clsx([
					"group",
					"w-[32px]",
					"h-[32px]",
					"flex",
					"justify-center",
					"items-center",
					"rounded-full",
					"border-2",
					"hover:border-4",
					"border-blue-700",
					"hover:border-blue-900",
					"dark:border-sky-400",
					"dark:hover:border-sky-300",
				])}
				onClick={() => toggleTheme()}
				aria-label="Toggle theme"
			>
				<div className="relative">
					<span className="hidden">Toggle theme</span>
					{theme === "light" ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className="w-[20px] h-[20px] text-slate-700 group-hover:text-slate-900"
						>
							<path fill="currentColor" d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z" />
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className="w-[20px] h-[20px] text-sky-300 group-hover:text-sky-100"
						>
							<path
								fill="currentColor"
								d="M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M11,18H13V15.87C14.73,15.43 16,13.86 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13.86 9.27,15.43 11,15.87V18Z"
							/>
						</svg>
					)}
				</div>
			</button>
		</div>
	);
}

export function useTheme() {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useNextTheme();

	/**
	 * "useTheme" from next-themes causes a hydration mismatch when ran on the server.
	 * To avoid this we'll wrap their hook and add a client-mounted effect.
	 */
	useEffect(() => setMounted(true), []);

	const currentTheme = useMemo<Theme>(() => {
		if (!mounted) return "light";

		return (resolvedTheme ?? "light") as Theme;
	}, [mounted, resolvedTheme]);

	const toggleTheme = useCallback(() => {
		setTheme(currentTheme === "light" ? "dark" : "light");
	}, [currentTheme, setTheme]);

	return useMemo(
		() => ({
			theme: currentTheme,
			toggleTheme,
		}),
		[currentTheme, toggleTheme],
	);
}
