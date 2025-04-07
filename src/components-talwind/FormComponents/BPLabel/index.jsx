import React, { forwardRef } from "react";
import clsx from "clsx";

/**
 * @typedef {Object} LabelProps
 * @property {React.LabelHTMLAttributes<HTMLLabelElement>} [props]
 */

/**
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<LabelProps> & React.RefAttributes<HTMLLabelElement>>}
 */
export const BPLabel = forwardRef(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={clsx(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  );
});
