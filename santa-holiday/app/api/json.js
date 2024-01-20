export default function handler(req, res) {
  res.status(200).json({
    trip: [
      {
        start: "London",
        end: "Paris",
        cheapest_travel: { date: "2024-12-01", price: 100 },
      },
    ],
  });
}
