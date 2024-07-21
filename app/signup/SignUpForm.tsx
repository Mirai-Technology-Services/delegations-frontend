import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { registerUserAction } from "../data/actions/auth-actions";

export default function SignUpForm() {
  return (
    <form action={registerUserAction}>
      <div className="flex flex-col gap-4 min-w-96">
        <h1 className="text-3xl font-semibold pb-4">Sign Up 🎉</h1>
        <Input
          autoFocus
          endContent={
            <UserIcon className="h-5 w-5 text-default-400 pointer-events-none flex-shrink-0" />
          }
          name="firstName"
          label="First Name"
          labelPlacement="outside"
          placeholder="Enter your first name"
          variant="bordered"
        />
        <Input
          endContent={
            <UserIcon className="h-5 w-5 text-default-400 pointer-events-none flex-shrink-0" />
          }
          name="lastName"
          label="Last Name"
          labelPlacement="outside"
          placeholder="Enter your last name"
          variant="bordered"
        />
        <Input
          endContent={
            <EnvelopeIcon className="h-5 w-5 text-default-400 pointer-events-none flex-shrink-0" />
          }
          name="email"
          label="Email"
          labelPlacement="outside"
          placeholder="Enter your email"
          variant="bordered"
        />
        <Input
          endContent={
            <LockClosedIcon className="h-5 w-5 text-default-400 pointer-events-none flex-shrink-0" />
          }
          name="password"
          label="Password"
          labelPlacement="outside"
          placeholder="Enter your password"
          type="password"
          variant="bordered"
        />
        <Button type="submit" color="primary">
          Sign Up
        </Button>
        <Button
          as={Link}
          href="/login"
          variant="light"
          className="text-primary"
        >
          Already have an account? Log In
        </Button>
      </div>
    </form>
  );
}
