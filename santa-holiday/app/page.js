import handler from "./data/trip"

export default async function Home() {
  const trip = await handler();
  console.log(trip);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
