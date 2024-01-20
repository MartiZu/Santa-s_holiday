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

  const handleTravelSelection = (travel) => {
    setSelectedTravel(travel);
  };

  return (
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
            onCheckedChange={() => handleTravelSelection(travel)}
          >
            {`${travel.start} to ${travel.end}`}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
