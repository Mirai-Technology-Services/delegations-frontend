import StartTripForm from "./StartTripForm";

export default function StartTrip() {
  return (
    <div className="flex items-center justify-center">
      <StartTripForm
        startLocation={"Home"}
        delegationNumber={1}
        startMeter={10}
      />
    </div>
  );
}
