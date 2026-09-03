"use client";

import { useForm } from "@tanstack/react-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { subscribeSchema } from "@/lib/zod";
import { toast } from "sonner";
import { Field, FieldGroup } from "../ui/field";
import { subscribeAction } from "@/actions/subscribe-action";

const SubscribeForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
    },
    validators: {
      onSubmit: subscribeSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        setLoading(true);
        const response = await subscribeAction(value);
        if (response.data) {
          toast.success("Subscribed successfully!");
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
    <form
      className="flex items-center gap-1 pt-5"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <FieldGroup>
        <form.Field
          name="email"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  type="email"
                  placeholder="Enter your email ID"
                  className="bg-white h-9.5 rounded-sm placeholder:text-sm border-none text-black"
                />
              </Field>
            );
          }}
        />
      </FieldGroup>
      <Button
        disabled={loading}
        type="submit"
        className="bg-white text-primary hover:bg-white/90 hover:text-primary"
      >
        Subscribe
      </Button>
    </form>
  );
};

export default SubscribeForm;
