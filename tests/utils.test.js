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

    QUnit.test("test contain null", assert=>{
        assert.true(testIfContainNull([null]));
        assert.true(testIfContainNull([43, null]));
        assert.true(testIfContainNull([null, 54]));
        assert.false(testIfContainNull([]));
        assert.false(testIfContainNull([4, 5, 6]));
    })


    QUnit.test("test difference of day between two day", assert=>{
        assert.equal(differenceDay(new Date(), new Date()), 0);
        assert.equal(differenceDay(new Date("2022-02-12"), new Date("2022-02-01")), 11);
        assert.equal(differenceDay(new Date("2022-02-12"), new Date("2022-02-15")), 3);
        assert.equal(differenceDay(new Date("2022-02-12T23:43:43Z"), new Date("2022-02-21T12:23:34Z")), 9);
    })


    QUnit.test("test find first null", assert=>{
        assert.equal(nextPositionNull([null, 43, 65, null]), 0);
        assert.equal(nextPositionNull([43, 65, null]), 2);
        assert.equal(nextPositionNull([3, 54, 65, null, null, 43]), 3);
    })


    QUnit.test("Test filter bad event month mode", assert=>{
        let eventFilter = filterBadEvent({
            events : [
                {
                    name : "Test",
                    S : "bug"
                },
                {
                    name : "Test",
                    S : "2023-01-02",
                    E : "2022-01-01"
                },
                {
                    name : "Test",
                    S : "23-01-02",
                },
                {
                    name : "Test",
                },
                {
                    S : "2002-01-01"
                },
                {
                    S : 1234567
                }
            ],

            name : "name",

            start : "S",

            end : "E"

        });

        console.log(eventFilter.events);

        assert.equal(eventFilter.events.length, 1);
    });


    QUnit.test("Test filter work even no event", assert=>{
        let eventFilter = filterBadEvent({
            
            name : "name",

            start : "S",

            end : "E"

        });

        assert.deepEqual(eventFilter, {
            
            name : "name",

            start : "S",

            end : "E"

        });
    });
});