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

interface EndTripFormProps {
  delegationNumber: number;
  endMeter: number;
}

export default function EndTripForm(props: EndTripFormProps) {
  const [formState, formAction] = useFormState(startTripAction, INITIAL_STATE);
  const [endLocation, setEndLocation] = useState("");
  const [meterEnd, setMeterEnd] = useState(props.endMeter.toString());

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setEndLocation(`Lat: ${latitude}, Lon: ${longitude}`);
        },
        (error) => {
          console.error("Error getting current location", error);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-4 min-w-96">
        <h1 className="text-3xl font-semibold pb-4">
          End delegation: {props.delegationNumber} 🚚
        </h1>
        <Input
          value={endLocation}
          onChange={(e) => setEndLocation(e.target.value)}
          endContent={
            <MapPinIcon className="h-5 w-5 text-default-400 pointer-events-none flex-shrink-0" />
          }
          name="end_location"
          label="End Location"
          labelPlacement="outside"
          placeholder="Enter end location"
          variant="bordered"
          isInvalid={formState?.zodErrors?.start_location}
          errorMessage={formState?.zodErrors?.start_location}
        />
        <Button onClick={handleUseCurrentLocation} variant="bordered">
          Use Current Location
        </Button>
        <Input
          value={meterEnd}
          onChange={(e) => setMeterEnd(e.target.value)}
          type="number"
          name="meter_end"
          label="End Meter"
          labelPlacement="outside"
          variant="bordered"
          isInvalid={formState?.zodErrors?.meter_start}
          errorMessage={formState?.zodErrors?.meter_start}
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">km</span>
            </div>
          }
        />
        <DatePicker
          label="End Time"
          variant="bordered"
          hideTimeZone
          showMonthAndYearPickers
          defaultValue={now(getLocalTimeZone())}
          name="end_time"
        />
        <Input
          name="delegation_id"
          type="hidden"
          value={props.delegationNumber.toString()}
        />
        <ErrorMessage message={formState.message} />
        <SubmitButton />
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
