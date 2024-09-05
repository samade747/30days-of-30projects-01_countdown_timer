import { ClassValue, clsx } from "clsx"; // Import clsx for conditional class names
import { twMerge } from "tailwind-merge"; // Import tailwind-merge for merging class names

// Utility function to merge and conditionally apply class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)); // Merge class names using clsx and tailwind-merge
}
