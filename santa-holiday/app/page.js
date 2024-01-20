import DisplayTrip from "./customHooks/DisplayTrip";
import UserOptions from "./components/UserOptions";

export const metadata = {
  title: "The SleighLine",
  description: "Travel Tracker Homepage",
};

export default async function Home() {
  const trips = await DisplayTrip();
  // console.log("@@@@@@@@@@@@", trips);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/santaBG2.jpg')] bg-cover bg-fixed">
      <UserOptions trips={trips} />
    </main>
  );
}
