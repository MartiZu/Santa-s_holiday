"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UserOptions({ trips }) {
  const [selectedTravel, setSelectedTravel] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [cheapDate, setCheapDate] = useState(null);
  const [cheapPrice, setCheapPrice] = useState(null);
  const [display, setDisplay] = useState(false);

  const handleTravelSelection = (travel) => {
    setSelectedTravel(travel);
    setStart(travel.start);
    setEnd(travel.end);
    setCheapDate(travel.cheapest_travel.date);
    setCheapPrice(travel.cheapest_travel.price);
    setDisplay(true);
  };

  return (
    <main className="flex flex-col">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Choose your travel destination</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <ScrollArea className="h-[200px] rounded-md border p-4">
            <DropdownMenuLabel>Travel Options</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {trips.map((travel) => (
              <DropdownMenuItem
                key={travel.id}
                checked={selectedTravel === travel}
                onClick={() => handleTravelSelection(travel)}
              >
                {`${travel.start} to ${travel.end}`}
              </DropdownMenuItem>
            ))}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
      {display ? (
        <Card>
          <CardHeader>
            <CardTitle>
              <span className="text-red-500">Santa</span> is going to {end} this
              Christmas!! Bye bye {start}
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p></p>
          </CardContent>
          <CardFooter>
            <p>
              {" "}
              The cheapest travel date is{" "}
              <span className="text-red-500">{cheapDate}</span> and the average
              price is £{cheapPrice}.
            </p>
          </CardFooter>
        </Card>
      ) : null}
    </main>
  );
}
