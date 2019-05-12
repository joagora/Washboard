function seedDb(eventProvider) {
    const event1 = {title: "Concert", content: "Excellent event"}
    eventProvider.addEvent(event1);

    const event2 = {title: "Jam session", content: "Chill event"}
    eventProvider.addEvent(event2);

    const event3 = {title: "Event", content: "Super event"}
    eventProvider.addEvent(event3);
}

module.exports = seedDb;