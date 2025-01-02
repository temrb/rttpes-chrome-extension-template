import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

function formatEnumToTitleCase(enumValue: string): string {
	return enumValue
		.toLowerCase()
		.split('_')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

export { cn, formatEnumToTitleCase };
