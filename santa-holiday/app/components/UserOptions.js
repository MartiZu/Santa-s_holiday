"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function UserOptions({ trips }) {
  const [selectedTravel, setSelectedTravel] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [cheapDate, setCheapDate] = useState(null);
  const [cheapPrice, setCheapPrice] = useState(null);

  const handleTravelSelection = (travel) => {
    console.log("*************", travel);
    setSelectedTravel(travel);
    setStart(travel.start);
    setEnd(travel.end);
    setCheapDate(travel.cheapest_travel.date);
    setCheapPrice(travel.cheapest_travel.price);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Choose your travel destination</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
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
        </DropdownMenuContent>
      </DropdownMenu>
      <div>
        From {start} to {end}. The cheapest travel date is {cheapDate} and the
        average price is {cheapPrice}.
      </div>
    </>
  );
}
