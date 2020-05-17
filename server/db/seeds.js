function seedDb(eventProvider) {
    const event1 = {
        title: "Convert",
        content: "Excellent",
        date: "2018-02-02",
        address: {

                country: "UK",
                city: "Boston",
                street: "",
                venue: ""

        }
    }
    eventProvider.addEvent(event1);

    const event2 = {
        title: "Jam session", 
        content: "Chill event",
        date: "2018-03-12",
        address: {

                country: "United States",
                city: "NYC",
                street: "5th Avenue",
                venue: ""


        }
    }
    eventProvider.addEvent(event2);

    const event3 = {
        title: "Event", 
        content: "Super event",
        date: "2018-03-12",
        address: {
                country: "Poland",
                city: "Warsaw",
                street: "Swietokrzyska",
                venue: ""
        }
    }
    eventProvider.addEvent(event3);
}

module.exports = seedDb;