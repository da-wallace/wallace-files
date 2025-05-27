"use client";

import { forwardRef } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";
import type { z } from "zod";

// Form Root Component
interface FormProps<T extends Record<string, any>> {
  schema: z.ZodSchema<T>;
  onSubmit: (data: T) => void | Promise<void>;
  defaultValues?: Partial<T>;
  children: React.ReactNode;
  className?: string;
}

function Form<T extends Record<string, any>>({
  schema,
  onSubmit,
  defaultValues,
  children,
  className,
}: FormProps<T>) {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
}

// Form Field Component
interface FormFieldProps {
  name: string;
  children: React.ReactNode;
}

function FormField({ name, children }: FormFieldProps) {
  return <div className="space-y-2">{children}</div>;
}

// Form Label Component
interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, required, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={clsx(
          "block text-sm font-medium text-gray-700",
          className
        )}
        {...props}
      >
        {children}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
    );
  }
);

FormLabel.displayName = "FormLabel";

// Form Control Component (Input wrapper)
interface FormControlProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const FormControl = forwardRef<HTMLInputElement, FormControlProps>(
  ({ className, name, type = "text", ...props }, ref) => {
    const { register, formState: { errors } } = useFormContext();
    const error = errors[name];

    return (
      <input
        {...register(name)}
        ref={ref}
        type={type}
        className={clsx(
          // TailwindUI input styles
          "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6",
          error && "ring-red-300 focus:ring-red-500",
          className
        )}
        {...props}
      />
    );
  }
);

FormControl.displayName = "FormControl";

// Form Message Component
interface FormMessageProps {
  name: string;
  className?: string;
}

function FormMessage({ name, className }: FormMessageProps) {
  const { formState: { errors } } = useFormContext();
  const error = errors[name];

  if (!error) return null;

  return (
    <p className={clsx("text-sm text-red-600", className)}>
      {error.message as string}
    </p>
  );
}

// Form Description Component
interface FormDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const FormDescription = forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={clsx("text-sm text-gray-500", className)}
        {...props}
      />
    );
  }
);

FormDescription.displayName = "FormDescription";

export {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
};
