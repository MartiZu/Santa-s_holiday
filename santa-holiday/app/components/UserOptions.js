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
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@", trips);
  const [selectedTravel, setSelectedTravel] = useState(null);
  const [selection, setSelection] = useState(null);

  const handleTravelSelection = (travel) => {
    setSelectedTravel(travel);
    setSelection(travel);
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
              checked={selectedTravel}
              onCheckedChange={() => handleTravelSelection(travel)}
            >
              {`${travel.start} to ${travel.end}`}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <div>Hello {selection}</div>
    </>
  );
}
