import * as React from "react"; // Import React
import { cn } from "@/lib/utils"; // Import utility function for class names

// Define InputProps interface to extend HTML input attributes
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

// Define and export the Input component
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type} // Input type (e.g., text, number, etc.)
        className={cn(
          "flex h-10 w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref} // Reference to the input element
        {...props} // Spread other input props
      />
    );
  }
);

// Optionally set display name for debugging
Input.displayName = "Input";

export { Input };



// import * as React from "react"; // Import React

// import { cn } from "@/lib/utils"; // Import utility function for class names


// // Define InputProps interface to extend HTML input attributes
// export interface InputProps 
// extends React.InputHTMLAttributes<HTMLInputElement> {}


// // Define and export the Input component
// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ className, type, ...props }, ref) => {
//         return (
//             <input
//               type={type} // Input type (e.g., text, number, etc.)
//               className={cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
//                 className )}
//               ref={ref}           // Reference to the input element
//               {...props}              // Spread other input props
//             />
//           );
//         }
//       );

// export {Input}