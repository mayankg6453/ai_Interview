"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useForm } from "react-hook-form";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { toast } from "sonner";
import FormField from "./FormField";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase/client";
import { signIn, signUp } from "@/lib/actions/auth.action";

const authFormSchema = (type: FormType) => {
	return z.object({
		name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
		email: z.string().email(),
		password: z.string().min(3),
	});
};

const AuthForm = ({ type }: { type: FormType }) => {
	const router = useRouter();
	const [errorMessage, setErrorMessage] = useState("");
	const formSchema = authFormSchema(type);
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const handleInputChange = () => {
		setErrorMessage("");
	};

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			setErrorMessage(""); // Clear error message before attempting submission
			if (type === "sign-up") {
				const { name, email, password } = values;

				const userCredentials = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);

				const result = await signUp({
					uid: userCredentials.user.uid,
					name: name!,
					email,
					password,
				});
				if (!result?.success) {
					toast.error(result?.message);
					return;
				}
				toast.success("Account Created Successfully, please sign-in");
				router.push("/sign-in");
			} else {
				const { email, password } = values;
				const userCredentials = await signInWithEmailAndPassword(
					auth,
					email,
					password
				);

				const idToken = await userCredentials.user.getIdToken();
				if (!idToken) {
					toast.error("Failed to sign in. Please try again.");
					return;
				}
				await signIn({ email, idToken });

				console.log("Sign-IN", values);
				toast.success("Sign-In Successfully");
				router.push("/");
			}
		} catch (error) {
			if (error instanceof Error && type === "sign-in") {
				if (
					error.message.includes("auth/invalid-credential") ||
					error.message.includes("auth/wrong-password")
				) {
					setErrorMessage("Invalid user ID or password.");
				} else {
					toast.error("Something went wrong: " + error.message);
				}
			} else {
				toast.error("An unexpected error occurred.");
			}
		}
	}
	const isSignIn = type === "sign-in";

	return (
		<div className="card-border lg:min-w-[566px]">
			<div className="flex flex-col gap-6 card py-14 px-10">
				<div className="flex flex-row gap-2 justify-center">
					<Image src="/logo.svg" width={32} height={32} alt="logo" />
					<h2 className="text-primary-100">InterPrep</h2>
				</div>
				<h3>Practice Interview with AI</h3>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="w-full space-y-16 mt-4 form"
					>
						{!isSignIn && (
							<FormField
								control={form.control}
								name="name"
								label="Name"
								placeholder="Your Name"
							/>
						)}
						{errorMessage && (
							<p className="text-red-500 text-sm">{errorMessage}</p>
						)}
						<FormField
							control={form.control}
							name="email"
							label="Email"
							type="email"
							placeholder="name@email.com"
							onChange={handleInputChange}
						/>
						<FormField
							control={form.control}
							name="password"
							label="Password"
							type="password"
							placeholder="Enter Your Password"
							onChange={handleInputChange}
						/>
						<Button className="btn" type="submit">
							{isSignIn ? "Sign-In" : "Create an Account"}
						</Button>
					</form>
				</Form>
				<p className="text-center">
					{isSignIn ? "Don't have an account?" : "Already have an account?"}
					<Link
						href={!isSignIn ? "/sign-in" : "/sign-up"}
						className="font-bold text-user-primary ml-1"
					>
						{isSignIn ? "Sign Up" : "Sign In"}
					</Link>
				</p>
			</div>
		</div>
	);
};

export default AuthForm;
