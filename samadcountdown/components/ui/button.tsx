import * as React from "react"; // Import React
import { Slot } from "@radix-ui/react-slot"; // Import Slot component for conditional rendering
import { cva, type VariantProps } from "class-variance-authority"; // Import CVA for variant handling

import { cn } from "@/lib/utils"; // Import utility function for class names

// Define button variants with CVA (class variance authority)
const buttonVariants = cva(
  // Base styles for the button
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    // Define variant and size options
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Define ButtonProps interface to extend HTML button attributes and include variants
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean; // Option to render a custom component as the button
}

// Define and export the Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"; // Use Slot if asChild is true, otherwise render as button
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))} // Apply variant and size styles
        ref={ref} // Reference to the button element
        {...props} // Spread other button props
      />
    );
  }
);

// Set the display name for debugging purposes
Button.displayName = "Button";

export { Button, buttonVariants }; // Export the Button component and button variant