"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group";
import HighlightedTitle from "@/components/common/highlight-title";
import { extractHighlightText } from "@/lib/utils";
import { type CSSProperties } from "react";

const formSchema = z.object({
    fullName: z
        .string()
        .min(5, "Full name must be at least 5 characters.")
        .max(32, "Full name must be at most 32 characters."),
    companyName: z
        .string()
        .min(3, "Last name must be at least 3 characters.")
        .max(32, "Last name must be at most 32 characters."),
    email: z
        .string()
        .email("Email is invalid.")
        .min(5, "Email must be at least 5 characters.")
        .max(32, "Email must be at most 32 characters."),
    phone: z
        .string()
        .min(7, "Phone number must be at least 7 characters.")
        .max(15, "Phone number must be at most 15 characters."),
    projectType: z
        .string()
        .min(3, "Project type must be at least 3 characters.")
        .max(32, "Project type must be at most 32 characters."),
    craneReq: z
        .string()
        .min(3, "Crane requirement must be at least 3 characters.")
        .max(32, "Crane requirement must be at most 32 characters."),
    message: z
        .string()
        .min(5, "Message must be at least 5 characters.")
        .max(1000, "Message must be at most 1000 characters."),
});

const ContactForm = () => {
    const form = useForm({
        defaultValues: {
            fullName: "",
            companyName: "",
            email: "",
            phone: "",
            projectType: "",
            craneReq: "",
            message: "",
        },
        validators: {
            onSubmit: formSchema,
        },
        onSubmit: async ({ value }) => {
            toast("You submitted the following values:", {
                description: (
                    <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
                        <code>{JSON.stringify(value, null, 2)}</code>
                    </pre>
                ),
                position: "bottom-right",
                classNames: {
                    content: "flex flex-col gap-2",
                },
                style: {
                    "--border-radius": "calc(var(--radius)  + 4px)",
                } as CSSProperties,
            });
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
                                    name="fullName"
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
                                                            e.target.value
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
                                                            e.target.value
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
                                                            e.target.value
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
                                                            e.target.value
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
                                                            e.target.value
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
                                    name="craneReq"
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
                                                            e.target.value
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
                                                            e.target.value
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
                        <Button type="submit" form="contact-form">
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
