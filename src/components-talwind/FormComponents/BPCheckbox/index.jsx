import React, { forwardRef } from "react";
import clsx from "clsx";

/**
 * @typedef {Object} CheckboxProps
 * @property {React.InputHTMLAttributes<HTMLInputElement>} [props]
 */

/**
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<CheckboxProps> & React.RefAttributes<HTMLInputElement>>}
 */
export const BPCheckbox = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      type="checkbox"
      ref={ref}
      className={clsx(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
      {...props}
    />
  );
});
