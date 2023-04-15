QUnit.module("Test for utils function", ()=>{
    QUnit.test("test filter for periode function", assert=>{
        let eventsData = {
            events : [
                {
                    "name" : "match",
                    "S" : "2023-01-01",
                    "E" : "2023-01-05"
                },
                {
                    "S" : "2022-01-01",
                    "E" : "2022-12-05"
                },
                {
                    "S" : "2023-02-01",
                    "E" : "2023-02-05"
                },
            ],

            "start" : "S",

            "end" : "E"
        };

        eventsData = filterEventForPeriode(eventsData, new Date('2023-01-01'), new Date('2023-01-31'));

        assert.equal(eventsData.events.length, 1);
        assert.equal(eventsData.events[0].name, "match");
    });

    QUnit.test("test ordering event", assert=>{
        let eventsData = {
            events : [
                {
                    "name" : "1",
                    "S" : "2023-01-14",
                    "E" : "2023-01-25"
                },
                {
                    "name" : "2",
                    "S" : "2022-01-01",
                },
                {
                    "name" : "3",
                    "S" : "2023-02-01",
                },
            ],

            "start" : "S",

            "end" : "E"
        };

        eventsData = orderEventByDate(eventsData);

        assert.equal(eventsData.events.length, 3);
        assert.equal(eventsData.events[0].name, "2");
        assert.equal(eventsData.events[1].name, "1");
        assert.equal(eventsData.events[2].name, "3");
    });

    QUnit.test("test difference of day between two day", assert=>{
        assert.equal(differenceDay(new Date(), new Date()), 0);
        assert.equal(differenceDay(new Date("2022-02-12"), new Date("2022-02-01")), 11);
        assert.equal(differenceDay(new Date("2022-02-12"), new Date("2022-02-15")), 3);
        assert.equal(differenceDay(new Date("2022-02-12T23:43:43Z"), new Date("2022-02-21T12:23:34Z")), 9);
    })
});