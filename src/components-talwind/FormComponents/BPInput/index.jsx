import React, { forwardRef } from "react";
import clsx from "clsx";

/**
 * @typedef {Object} InputProps
 * @property {React.InputHTMLAttributes<HTMLInputElement>} [props]
 */

/**
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<InputProps> & React.RefAttributes<HTMLInputElement>>}
 */
export const BPInput = forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={clsx(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
