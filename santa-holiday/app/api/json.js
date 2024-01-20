export default function handler(req, res) {
  res.status(200).json({
    trip: [
      {
        id: 1,
        start: "London",
        end: "Paris",
        cheapest_travel: { date: "2024-12-17", price: 100 },
      },
      {
        id: 2,
        start: "London",
        end: "Edinburgh",
        cheapest_travel: { date: "2024-12-17", price: 170 },
      },
      {
        id: 3,
        start: "London",
        end: "Berlin",
        cheapest_travel: { date: "2024-12-19", price: 120 },
      },
      {
        id: 4,
        start: "London",
        end: "Berlin",
        cheapest_travel: { date: "2024-12-15", price: 168 },
      },
      {
        id: 5,
        start: "Paris",
        end: "Barcelona",
        cheapest_travel: { date: "2024-12-08", price: 184 },
      },
      {
        id: 6,
        start: "Barcelona",
        end: "Rome",
        cheapest_travel: { date: "2024-12-15", price: 154 },
      },
      {
        id: 7,
        start: "Berlin",
        end: "Amsterdam",
        cheapest_travel: { date: "2024-12-10", price: 137 },
      },
      {
        id: 8,
        start: "Amsterdam",
        end: "Prague",
        cheapest_travel: { date: "2024-12-22", price: 187 },
      },
      {
        id: 9,
        start: "Rome",
        end: "Athens",
        cheapest_travel: { date: "2024-12-20", price: 194 },
      },
      {
        id: 10,
        start: "Athens",
        end: "Istanbul",
        cheapest_travel: { date: "2024-12-15", price: 198 },
      },
      {
        id: 11,
        start: "Birmingham",
        end: "Coventry",
        cheapest_travel: { date: "2024-12-22", price: 99 },
      },
      {},
    ],
  });
}
