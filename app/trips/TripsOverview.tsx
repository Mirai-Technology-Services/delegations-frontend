"use client";

import { format } from "date-fns";
import { Trip } from "../../types";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

interface TripsOverviewProps {
  trips: Trip[];
}

export default function TripsOverview({ trips }: TripsOverviewProps) {
  return (
    <Table aria-label="Trips Table">
      <TableHeader>
        <TableColumn>Start Time</TableColumn>
        <TableColumn>End Time</TableColumn>
        <TableColumn>Start Location</TableColumn>
        <TableColumn>End Location</TableColumn>
        <TableColumn>Meter Start</TableColumn>
        <TableColumn>Meter End</TableColumn>
      </TableHeader>
      <TableBody items={trips}>
        {(trip: Trip) => (
          <TableRow key={trip.trip_id}>
            <TableCell>
              {format(new Date(trip.start_time), "yyyy-MM-dd HH:mm:ss")}
            </TableCell>
            <TableCell>
              {format(new Date(trip.end_time), "yyyy-MM-dd HH:mm:ss")}
            </TableCell>
            <TableCell>{trip.start_location}</TableCell>
            <TableCell>{trip.end_location}</TableCell>
            <TableCell>{trip.meter_start}</TableCell>
            <TableCell>{trip.meter_end}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
