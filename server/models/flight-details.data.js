const data = [
  {
    model: "flight-details",
    documents: [
      {
        flightCode: "LH980",
        flightProvider: "Lufthansa",
        sourcePortName: "Frankfurt",
        sourcePortCode: "FRA",
        destinationPortName: "Terminal",
        destinationPortCode: "T1",
        scheduledDeparture: "2020-02-21 00:00:00",
        scheduledArrival: "2020-02-21 17:05:00",
        status: "LANDED"
      },
      {
        flightCode: "LH2518",
        flightProvider: "Lufthansa",
        sourcePortName: "Munich",
        sourcePortCode: "",
        destinationPortName: "Terminal",
        destinationPortCode: "T1",
        scheduledDeparture: "2020-02-21 00:10:00",
        scheduledArrival: "2020-02-21 17:15:00",
        status: "ON SCHEDULE"
      },
      {
        flightCode: "AY1385",
        flightProvider: "Finnair",
        sourcePortName: "Helsinki",
        sourcePortCode: "",
        destinationPortName: "Terminal",
        destinationPortCode: "T1",
        scheduledDeparture: "2020-02-21 00:20:00",
        scheduledArrival: "2020-02-21 17:25:00",
        status: "ON SCHEDULE"
      },
      {
        flightCode: "FR7327",
        flightProvider: "Ryanair",
        sourcePortName: "Prague",
        sourcePortCode: "",
        destinationPortName: "Terminal",
        destinationPortCode: "T1",
        scheduledDeparture: "2020-02-21 00:50:00",
        scheduledArrival: "2020-02-21 17:50:00",
        status: "DELAYED"
      },
      {
        flightCode: "FR667",
        flightProvider: "Ryanair",
        sourcePortName: "Birmingham",
        sourcePortCode: "",
        destinationPortName: "Terminal",
        destinationPortCode: "T1",
        scheduledDeparture: "2020-02-21 00:50:00",
        scheduledArrival: "2020-02-21 17:55:00",
        status: "DELAYED"
      },
      {
        flightCode: "FR8512",
        flightProvider: "Ryanair",
        sourcePortName: "Hamburg",
        sourcePortCode: "",
        destinationPortName: "Terminal",
        destinationPortCode: "T1",
        scheduledDeparture: "2020-02-21 00:40:00",
        scheduledArrival: "2020-02-21 17:40:00",
        status: "ON SCHEDULE"
      }
    ]
  }
];

module.exports = data;
