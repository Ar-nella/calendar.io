QUnit.module("mode month test", ()=>{
    QUnit.test("test view structure month", assert=>{
        const done = assert.async();
        loadCalendar({mode : "month", date : '2023-01-15'});

        let contentDate = '';

        contentDate = document.querySelector("#calendar #body .content span.head-span:nth-child(1)").textContent;
        assert.equal(contentDate, "1");

        document.querySelector("#calendar #head .next").click();

        setTimeout(() => {
            contentDate = document.querySelector("#calendar #body .content span.head-span:nth-child(1)").textContent;
            assert.equal(contentDate, "29");
            done();
        }, 500);

    });

    QUnit.test("test load one long event on month", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01",
                E : "2023-01-04"
            }],

            name : "name",

            start : "S",

            end : "E"
        }, mode : "month", date : "2023-01-15"});

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test");

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(2) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test");

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(3) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test");

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(4) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test");
    });


    QUnit.test("test load one event on month ", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01"
            }],

            name : "name",

            start : "S"
        }, mode : "month", date : "2023-01-15"});

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test");
    });


    QUnit.test("test load two event on month ", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01"
            },{
                name : "Test1",
                S : "2023-01-02"
            },{
                name : "Test2",
                S : "2023-01-03"
            },],

            name : "name",

            start : "S"
        }, mode : "month", date : "2023-01-15"});

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(2) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test1");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(3) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test2");
        });

    QUnit.test("test load two event on month in same moment ", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01"
            },
            {
                name : "Test1",
                S : "2023-01-01"
            }
        ],

            name : "name",

            start : "S"
        }, mode : "month", date : "2023-01-15"});

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(2)').getAttribute('data-event-name'), 
            "Test1");
    });


    QUnit.test("test load two event on month in same moment event 1 before event 2", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",  
                S : "2023-01-01",
                E : "2023-01-03"
            },
            {
                name : "Test1",
                S : "2023-01-02"
            }
        ],

            name : "name",

            start : "S",

            end : "E"
        }, mode : "month", date : "2023-01-15"});

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(2) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(3) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(2) span.body-span span:nth-child(2)').getAttribute('data-event-name'), 
            "Test1");
    });
    

    QUnit.test("test load two event on month in same moment event 1 before event 2 event2 more long", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01",
                E : "2023-01-02"
            },{
                name : "Test1",
                S : "2023-01-02",
                E : "2023-01-03"
            }],

            name : "name",

            start : "S",

            end : "E"
        }, mode : "month", date : "2023-01-15"});

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(2) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(2) span.body-span span:nth-child(2)').getAttribute('data-event-name'), 
            "Test1");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(3) span.body-span span:nth-child(2)').getAttribute('data-event-name'), 
            "Test1");
    });
        
});