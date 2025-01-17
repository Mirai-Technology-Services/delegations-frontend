"use client";

import { MapPinIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { useFormState } from "react-dom";
import { ErrorMessage } from "@/components/AuthErrorMessage";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import { startTripAction } from "../data/actions/trip-actions";
import { DatePicker } from "@nextui-org/date-picker";
import { now, getLocalTimeZone } from "@internationalized/date";

const INITIAL_STATE = {
  data: null,
};

interface StartTripFormProps {
  delegation_id: number;
  location: string;
  meter: number;
}

export default function StartTripForm(props: StartTripFormProps) {
  const [formState, formAction] = useFormState(startTripAction, INITIAL_STATE);
  const [startLocation, setStartLocation] = useState(props.location);
  const [meterStart, setMeterStart] = useState(props.meter.toString());

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-4 min-w-96">
        <h1 className="text-3xl font-semibold pb-4">
          New Delegation: {props.delegation_id} 🚚
        </h1>
        <Input
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
          endContent={
            <MapPinIcon className="h-5 w-5 text-default-400 pointer-events-none flex-shrink-0" />
          }
          name="location"
          label="Start Location"
          labelPlacement="outside"
          placeholder="Enter start location"
          variant="bordered"
          isInvalid={formState?.zodErrors?.location}
          errorMessage={formState?.zodErrors?.location}
        />
        <Input
          value={meterStart}
          onChange={(e) => setMeterStart(e.target.value)}
          type="number"
          name="meter"
          label="Start Meter"
          labelPlacement="outside"
          variant="bordered"
          isInvalid={formState?.zodErrors?.meter}
          errorMessage={formState?.zodErrors?.meter}
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">km</span>
            </div>
          }
        />
        <DatePicker
          label="Start Time"
          labelPlacement="outside"
          variant="bordered"
          hideTimeZone
          hourCycle={24}
          showMonthAndYearPickers
          defaultValue={now(getLocalTimeZone())}
          name="time"
        />
        <Input
          name="delegation_id"
          type="hidden"
          value={props.delegation_id.toString()}
        />
        <SubmitButton />
        <ErrorMessage message={formState.message} />
        <Button
          as={Link}
          href="/dashboard"
          variant="light"
          className="text-primary"
        >
          Back to Dashboard
        </Button>
      </div>
    </form>
  );
}
