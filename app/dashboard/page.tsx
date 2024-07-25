import Link from "next/link";
import { Button } from "@nextui-org/button";
import { fetchWithAuth } from "../data/utils/fetchWithAuth";
import OngoingTrip from "./OngoingTrip";
import TripsTable from "../trips/TripsTable";
import NoDelegation from "./NoDelegation";
import DelegationNoTrip from "./DelegationNoTrip";
import DelegationTrip from "./DelegationTrip";

async function fetchDashboardInfo() {
  const url = "http://localhost:3001/api/trips/dashboard";
  var response = await fetchWithAuth(url);
  return response.body; // Return the response body directly
}

export default async function Dashboard() {
  const dashboardInfo = await fetchDashboardInfo();
  console.log(dashboardInfo);

  if (!dashboardInfo.hasActiveDelegation) {
    return <NoDelegation />;
  }

  if (!dashboardInfo.hasActiveTrip) {
    return <DelegationNoTrip delegation={dashboardInfo.activeDelegation} />;
  }

  return <DelegationTrip delegation={dashboardInfo.activeDelegation} />;
}
