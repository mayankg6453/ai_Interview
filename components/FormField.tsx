import React from "react";
import { Controller, FieldValues, Path, Control } from "react-hook-form";
import {
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
interface FormFieldProps<T extends FieldValues> {
	control: Control<T>;
	name: Path<T>;
	label: string;
	placeholder?: string;
	type?: "text" | "email" | "password";
}
const FormField = ({
	control,
	name,
	label,
	placeholder,
	type = "text",
}: FormFieldProps<T>) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<FormItem>
					<FormLabel className="label">{label}</FormLabel>
					<FormC>
						<Input
							className="input"
							type={type}
							placeholder={placeholder}
							{...field}
						/>
					</FormC ontrol>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default FormField;
