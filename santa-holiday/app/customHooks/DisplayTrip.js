import getTrip from "@/library/getTrip";

export default async function DisplayTrip() {
  try {
    const tripData = await getTrip();
    // console.log("display", tripData);

    return tripData;
  } catch (error) {
    console.error("Error fetching property data:", error);
    // Handle the error or return a default value as needed
  }
}
