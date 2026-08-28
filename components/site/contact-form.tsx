"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Field, FieldControl, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import { type FormEvent, useId, useState } from "react";

const REASONS = [
  "Product question",
  "Product development",
  "Platform or tool access",
  "General enquiry",
];

/**
 * Short general contact form (spec §10). Includes the unclassified handling
 * notice. Contact details / destination are not yet confirmed (spec §14), so
 * submit shows guidance rather than sending to an unconfirmed endpoint.
 */
export function ContactForm() {
  const reasonId = useId();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <Alert variant="warning">
        <ShieldAlert aria-hidden />
        <AlertTitle>Keep your message unclassified</AlertTitle>
        <AlertDescription>
          Do not enter classified or sensitive operational information in this
          form. Describe your request at an unclassified level.
        </AlertDescription>
      </Alert>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name">
          <FieldLabel>Name</FieldLabel>
          <FieldControl render={<Input autoComplete="name" />} />
        </Field>
        <Field name="organisation">
          <FieldLabel>Organisation or unit</FieldLabel>
          <FieldControl render={<Input autoComplete="organization" />} />
        </Field>
      </div>

      <Field name="email">
        <FieldLabel>Work email</FieldLabel>
        <FieldControl render={<Input type="email" autoComplete="email" />} />
      </Field>

      <div className="grid gap-1.5">
        <label
          htmlFor={reasonId}
          className="text-sm font-medium leading-tight text-fg"
        >
          Reason for contact
        </label>
        <Select name="reason">
          <SelectTrigger id={reasonId}>
            <SelectValue placeholder="Select a reason" />
          </SelectTrigger>
          <SelectContent>
            {REASONS.map((reason) => (
              <SelectItem key={reason} value={reason}>
                {reason}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Field name="related">
        <FieldLabel>Relevant product, platform or tool (if applicable)</FieldLabel>
        <FieldControl render={<Input />} />
      </Field>

      <Field name="message">
        <FieldLabel>Message</FieldLabel>
        <FieldControl render={<Textarea rows={5} />} />
      </Field>

      {submitted ? (
        <Alert variant="info">
          <CheckCircle2 aria-hidden />
          <AlertTitle>Contact channel is being confirmed</AlertTitle>
          <AlertDescription>
            The online contact channel and shared mailbox are being confirmed.
            Approved contact details will be published here once available.
          </AlertDescription>
        </Alert>
      ) : null}

      <div>
        <Button type="submit" size="lg">
          Send message
        </Button>
      </div>
    </form>
  );
}
