"use client";

import { useState } from "react";
import Image from "next/image";
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
  const [otherDates, setOtherDates] = useState([]); // [
  const [display, setDisplay] = useState(false);
  const [displayOtherDates, setDisplayOtherDates] = useState(false);

  const handleTravelSelection = (travel) => {
    setSelectedTravel(travel);
    setStart(travel.start);
    setEnd(travel.end);
    setCheapDate(travel.cheapest_travel.date);
    setCheapPrice(travel.cheapest_travel.price);
    setDisplay(true);
    setOtherDates(travel.dates);
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
          <CardFooter>
            <p>
              {" "}
              The cheapest travel date is {cheapDate} and the average price is £
              {cheapPrice}.
            </p>
          </CardFooter>
          <div>
            <Image
              src={"/santaGif.gif"}
              width={250}
              height={250}
              alt=""
              className="p-12 rounded-full animate-bounce"
            />
          </div>
          <div className="flex flex-row content-center justify-center">
            <button
              className="bg-red-500 rounded-sm p-2 text-white mb-3"
              variant="outline"
              onClick={() => setDisplayOtherDates(true)}
            >
              See More
            </button>
          </div>
        </Card>
      ) : null}

      {displayOtherDates ? (
        <Card>
          <CardHeader>
            <CardTitle>
              Hello <span className="text-red-500">Santa</span>
            </CardTitle>
            <CardDescription>
              {" "}
              Grab your reindeers and fly on another date - splash some of that
              Christmas <span className="text-green-500">cash!</span>{" "}
            </CardDescription>
          </CardHeader>

          <CardContent>
            {otherDates.map((date) => (
              <p className="py-2 border rounded-sm my-4 pl-1" key={date.index}>
                On the {date.date} the average price is{" "}
                <span className="text-red-500">£{date.price}</span>
              </p>
            ))}
          </CardContent>
        </Card>
      ) : null}
    </main>
  );
}
