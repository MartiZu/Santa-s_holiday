import DisplayTrip from "./customHooks/DisplayTrip";

export default async function Home() {
  const trips = await DisplayTrip();
  console.log("@@@@@@@@@@@@", trips);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {trips.map((trip) => (
        <div key={trip.id} className="">
          <h1 className="">
            {trip.start} to {trip.end}
          </h1>
        </div>
      ))}
    </main>
  );
}
