const events = [
    { timestamp: "2025-10-22T10:01:00Z", type: "click" },
    { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
    { timestamp: "2025-10-22T10:14:00Z", type: "click" },
    { timestamp: "2025-10-22T10:31:00Z", type: "click" },
    { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
    { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

const interval = 30 * 60 * 1000; // As i select 30 min as interval;

// The following function takes a timestamp and return 30-min slot it belongs to.
const binningTimeStamps = (timestamp) => {

    const date = new Date(timestamp) // Converts timestamp into a Date object that JS can work with. Convert ISO string → JS Date object


    const flooredTimeStamp = Math.floor(date.getTime() / interval) * interval // Gives me 30 min timestamp or time slot
    // console.log(flooredTimeStamp);

    return new Date(flooredTimeStamp).toISOString() // Converts it back to a readable ISO timestamp
}

const binnedEvents = events.reduce((table, event) => {
    const { timestamp } = event;
    const bin = binningTimeStamps(timestamp)
    if (!table[bin]) {
        table[bin] = { total: 0 }
    }
    table[bin].total = table[bin].total + 1;

    return table

}, {})

console.log(binnedEvents);