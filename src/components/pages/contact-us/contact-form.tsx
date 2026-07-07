"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group";
import HighlightedTitle from "@/components/common/highlight-title";
import { extractHighlightText } from "@/lib/utils";
import { useState } from "react";
import { contactUsSchema } from "@/lib/zod";
import { submitContactUsForm } from "@/data/loader";

const ContactForm = () => {
	const [loading, setLoading] = useState(false);

	const form = useForm({
		defaultValues: {
			name: "",
			companyName: "",
			email: "",
			phone: "",
			projectType: "",
			craneRequirement: "",
			message: "",
		},
		validators: {
			onSubmit: contactUsSchema,
		},
		onSubmit: async ({ value }) => {
			try {
				setLoading(true);
				const response = await submitContactUsForm(value);
				if (response.data) {
					toast.success("Message sent successfully!");
					form.reset();
				} else {
					toast.error("Something went wrong!");
				}
			} catch {
				toast.error("Something went wrong!");
			} finally {
				setLoading(false);
			}
		},
	});

	return (
		<div className="lg:col-span-3 space-y-3 mt-5 md:mt-0">
			<HighlightedTitle
				title="Request a <b>quote</b>"
				highlights={extractHighlightText("Request a <b>quote</b>")}
			/>
			<p className="text-[#414651]">
				Tell us about your project requirements, and our team will
				recommend the most suitable crane solution for your needs.
			</p>

			<div className="mt-5">
				<div>
					<form
						id="contact-form"
						onSubmit={(e) => {
							e.preventDefault();
							form.handleSubmit();
						}}
					>
						<FieldGroup>
							<div className="grid lg:grid-cols-2 gap-3">
								<form.Field
									name="name"
									children={(field) => {
										const isInvalid =
											field.state.meta.isTouched &&
											!field.state.meta.isValid;
										return (
											<Field data-invalid={isInvalid}>
												<FieldLabel
													htmlFor={field.name}
													className="text-sm font-normal"
												>
													Full Name*
												</FieldLabel>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(
															e.target.value,
														)
													}
													aria-invalid={isInvalid}
													placeholder="Enter your full name"
													autoComplete="off"
													className="border-[#A4A7AE] px-2.5 py-5 bg-transparent rounded-sm placeholder:text-sm"
												/>
												{isInvalid && (
													<FieldError
														errors={
															field.state.meta
																.errors
														}
													/>
												)}
											</Field>
										);
									}}
								/>
								<form.Field
									name="companyName"
									children={(field) => {
										const isInvalid =
											field.state.meta.isTouched &&
											!field.state.meta.isValid;
										return (
											<Field data-invalid={isInvalid}>
												<FieldLabel
													htmlFor={field.name}
													className="text-sm font-normal"
												>
													Company Name*
												</FieldLabel>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(
															e.target.value,
														)
													}
													aria-invalid={isInvalid}
													placeholder="Enter company name"
													autoComplete="off"
													className="border-[#A4A7AE] px-2.5 py-5 bg-transparent rounded-sm placeholder:text-sm"
												/>
												{isInvalid && (
													<FieldError
														errors={
															field.state.meta
																.errors
														}
													/>
												)}
											</Field>
										);
									}}
								/>
							</div>
							<div className="grid lg:grid-cols-2 gap-3">
								<form.Field
									name="email"
									children={(field) => {
										const isInvalid =
											field.state.meta.isTouched &&
											!field.state.meta.isValid;
										return (
											<Field data-invalid={isInvalid}>
												<FieldLabel
													htmlFor={field.name}
													className="text-sm font-normal"
												>
													Email ID*
												</FieldLabel>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(
															e.target.value,
														)
													}
													aria-invalid={isInvalid}
													placeholder="Enter your Email ID"
													autoComplete="off"
													className="border-[#A4A7AE] px-2.5 py-5 bg-transparent rounded-sm placeholder:text-sm"
												/>
												{isInvalid && (
													<FieldError
														errors={
															field.state.meta
																.errors
														}
													/>
												)}
											</Field>
										);
									}}
								/>
								<form.Field
									name="phone"
									children={(field) => {
										const isInvalid =
											field.state.meta.isTouched &&
											!field.state.meta.isValid;
										return (
											<Field data-invalid={isInvalid}>
												<FieldLabel
													htmlFor={field.name}
													className="text-sm font-normal"
												>
													Phone Number*
												</FieldLabel>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(
															e.target.value,
														)
													}
													aria-invalid={isInvalid}
													placeholder="Enter phone number"
													autoComplete="off"
													className="border-[#A4A7AE] px-2.5 py-5 bg-transparent rounded-sm placeholder:text-sm"
												/>
												{isInvalid && (
													<FieldError
														errors={
															field.state.meta
																.errors
														}
													/>
												)}
											</Field>
										);
									}}
								/>
							</div>
							<div className="grid lg:grid-cols-2 gap-3">
								<form.Field
									name="projectType"
									children={(field) => {
										const isInvalid =
											field.state.meta.isTouched &&
											!field.state.meta.isValid;
										return (
											<Field data-invalid={isInvalid}>
												<FieldLabel
													htmlFor={field.name}
													className="text-sm font-normal"
												>
													Project Type
												</FieldLabel>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(
															e.target.value,
														)
													}
													aria-invalid={isInvalid}
													placeholder="Project Type"
													autoComplete="off"
													className="border-[#A4A7AE] px-2.5 py-5 bg-transparent rounded-sm placeholder:text-sm"
												/>
												{isInvalid && (
													<FieldError
														errors={
															field.state.meta
																.errors
														}
													/>
												)}
											</Field>
										);
									}}
								/>
								<form.Field
									name="craneRequirement"
									children={(field) => {
										const isInvalid =
											field.state.meta.isTouched &&
											!field.state.meta.isValid;
										return (
											<Field data-invalid={isInvalid}>
												<FieldLabel
													htmlFor={field.name}
													className="text-sm font-normal"
												>
													Crane Requirement
												</FieldLabel>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(
															e.target.value,
														)
													}
													aria-invalid={isInvalid}
													placeholder="Crane Requirement"
													autoComplete="off"
													className="border-[#A4A7AE] px-2.5 py-5 bg-transparent rounded-sm placeholder:text-sm"
												/>
												{isInvalid && (
													<FieldError
														errors={
															field.state.meta
																.errors
														}
													/>
												)}
											</Field>
										);
									}}
								/>
							</div>
							<form.Field
								name="message"
								children={(field) => {
									const isInvalid =
										field.state.meta.isTouched &&
										!field.state.meta.isValid;
									return (
										<Field data-invalid={isInvalid}>
											<FieldLabel
												htmlFor={field.name}
												className="text-sm font-normal"
											>
												Message
											</FieldLabel>
											<InputGroup>
												<InputGroupTextarea
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(
															e.target.value,
														)
													}
													placeholder="Tell us about your project or ask a question"
													rows={6}
													className="min-h-24 resize-none border-[#A4A7AE] bg-[#F5F5F5] rounded-sm placeholder:text-sm"
													aria-invalid={isInvalid}
												/>
											</InputGroup>
											{isInvalid && (
												<FieldError
													errors={
														field.state.meta.errors
													}
												/>
											)}
										</Field>
									);
								}}
							/>
						</FieldGroup>
					</form>
				</div>
				<div className="mt-5 flex flex-col-reverse lg:flex-row items-center justify-between gap-5 lg:gap-0">
					<Field orientation="horizontal">
						<Button
							type="submit"
							form="contact-form"
							disabled={loading}
						>
							Submit
						</Button>
					</Field>

					<div className="bg-[#E6E9EF] pl-2 pr-5 py-1 rounded-sm leading-tight lg:whitespace-nowrap">
						<span className="text-secondary text-xs font-medium">
							Your information will be used solely to respond to
							your inquiry and provide project support.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
