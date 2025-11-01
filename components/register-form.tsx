"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"

type RoleType = "customer" | "rider"

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [role, setRole] = useState<RoleType>("customer")

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Register as a rider or customer to get started
          </p>
        </div>

        <Field>
          <FieldLabel>Account type</FieldLabel>
          <div className="flex gap-2">
            <Button
              type="button"
              variant={role === "customer" ? undefined : "ghost"}
              onClick={() => setRole("customer")}
            >
              Customer
            </Button>
            <Button
              type="button"
              variant={role === "rider" ? undefined : "ghost"}
              onClick={() => setRole("rider")}
            >
              Rider
            </Button>
          </div>
          <input name="role" type="hidden" value={role} />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" name="email" type="email" placeholder="m@example.com" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="phone_number">Phone number</FieldLabel>
          <Input id="phone_number" name="phone_number" type="tel" placeholder="+1234567890" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="home_address">Home address</FieldLabel>
          <Input id="home_address" name="home_address" type="text" placeholder="123 Main St" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" name="password" type="password" required />
        </Field>

        <Field>
          <Button type="submit" className="w-full">
            Create account
          </Button>
        </Field>

        <FieldSeparator>Or</FieldSeparator>

        <Field>
          <Button variant="outline" type="button" className="w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 mr-2">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            Continue with Google
          </Button>

          <FieldDescription className="text-center">
            Already have an account?{" "}
            <Link href="/login" className="underline underline-offset-4">
              Login
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}