QUnit.module("mode day test", ()=>{
    QUnit.test("Test d'affichage de l'en tete en mode day", (assert)=>{
        loadCalendar({mode : "days"});
        let date = new Date();
        let stringHead = translateDay(date.getDay()) +
        " " + date.getDate() + " " +
        translateMonth(date.getMonth())
        
        assert.equal( 
            document.querySelector("#calendar #head .title").textContent,
            stringHead);
    });


    QUnit.test("test d'affichage jour specifique ", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01T00:00:00Z"
            }],

            name : "name",

            start : "S"
        }, mode : "days", date : "2023-01-15"});

        assert.equal( 
            document.querySelector("#calendar #head .title").textContent,
            "Dimanche 15 Janvier");
    });


    QUnit.test("test load no one event on day if event is not on day", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01T00:00:00Z"
            }],

            name : "name",

            start : "S"
        }, mode : "days", date : "2023-01-15"});

        assert.notOk(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)')
            )
    });

    QUnit.test("test load one event on day ", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01T00:00:00Z"
            }],

            name : "name",

            start : "S"
        }, mode : "days", date : "2023-01-01"});

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test");
    });


    QUnit.test("test display one event on day ", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01T00:00:00Z"
            }],

            name : "name",

            start : "S"
        }, mode : "days", date : "2023-01-01"});

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)').innerHTML, 
            "Test");
    });


    QUnit.test("test load one event on day overflow start", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2022-12-31T00:00:00Z",
                E : "2023-01-01T03:00:00Z"
            }],

            name : "name",

            start : "S",

            end : "E"
        }, mode : "days", date : "2023-01-01"});

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

    QUnit.test("test display one event on day overflow start", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2022-12-31T00:00:00Z",
                E : "2023-01-01T03:00:00Z"
            }],

            name : "name",

            start : "S",

            end : "E"
        }, mode : "days", date : "2023-01-01"});

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)').innerHTML, 
            "Test");

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(2) span.body-span span:nth-child(1)').innerHTML, 
            "");

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(3) span.body-span span:nth-child(1)').innerHTML, 
            "");

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(4) span.body-span span:nth-child(1)').innerHTML, 
            "");
                                    
    });

    QUnit.test("test load one event on day overflow end", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2022-01-01T23:00:00Z",
                E : "2023-01-02T03:00:00Z"
            }],

            name : "name",

            start : "S",

            end : "E"
        }, mode : "days", date : "2023-01-01"});

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(24) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test");
           
    });


    QUnit.test("test load one long event on day", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01T00:00:00Z",
                E : "2023-01-01T03:00:00Z"

            }],

            name : "name",

            start : "S",

            end : "E"
        }, mode : "days", date : "2023-01-01"});

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


    QUnit.test("test load one long event on day", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01T00:00:00Z",
                E : "2023-01-01T03:00:00Z"

            }],

            name : "name",

            start : "S",

            end : "E"
        }, mode : "days", date : "2023-01-01"});

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)').innerHTML, 
            "Test");

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(2) span.body-span span:nth-child(1)').innerHTML, 
            "");

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(3) span.body-span span:nth-child(1)').innerHTML, 
            "");

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(4) span.body-span span:nth-child(1)').innerHTML, 
            "");
    });


    QUnit.test("test load two event on day ", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01T00:00:00Z",
            },{
                name : "Test1",
                S : "2023-01-01T01:00:00Z",
            },{
                name : "Test2",
                S : "2023-01-01T02:00:00Z",
            },],

            name : "name",

            start : "S"
        }, mode : "days", date : "2023-01-01"});

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


    QUnit.test("test load two event on month in same moment day mode", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01T00:00:00Z",
            },
            {
                name : "Test1",
                S : "2023-01-01T00:00:00Z",
            }
        ],

            name : "name",

            start : "S"
        }, mode : "days", date : "2023-01-01"});

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(2)').getAttribute('data-event-name'), 
            "Test1");
    });


    QUnit.test("test load two event on month in same moment event 1 before event 2 day mode", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",  
                S : "2023-01-01T00:00:00Z",
                E : "2023-01-01T02:00:00Z",
            },
            {
                name : "Test1",
                S : "2023-01-01T01:00:00Z",
            }
        ],

            name : "name",

            start : "S",

            end : "E"
        }, mode : "days", date : "2023-01-01"});

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
                S : "2023-01-01T00:00:00Z",
                E : "2023-01-01T01:00:00Z",
            },{
                name : "Test1",
                S : "2023-01-01T01:00:00Z",
                E : "2023-01-01T02:00:00Z",
            }],

            name : "name",

            start : "S",

            end : "E"
        }, mode : "days", date : "2023-01-01"});

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
        
        
    QUnit.test("test load three event", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01T00:00:00Z",
            },{
                name : "Test1",
                S : "2023-01-01T00:00:00Z",
                E : "2023-01-01T01:00:00Z",
            },{
                name : "Test2",
                S : "2023-01-01T01:00:00Z",
                E : "2023-01-01T03:00:00Z",
            }],

            name : "name",

            start : "S",

            end : "E"
        }, mode : "days", date : "2023-01-01"});

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test");

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(2)').getAttribute('data-event-name'), 
            "Test1");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(2) span.body-span span:nth-child(2)').getAttribute('data-event-name'), 
            "Test1");

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(2) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test2");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(3) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test2");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(4) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test2");
    });
        

    QUnit.test("test display three event", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01T00:00:00Z",
            },{
                name : "Test1",
                S : "2023-01-01T00:00:00Z",
                E : "2023-01-01T01:00:00Z",
            },{
                name : "Test2",
                S : "2023-01-01T01:00:00Z",
                E : "2023-01-01T03:00:00Z",
            }],

            name : "name",

            start : "S",

            end : "E"
        }, mode : "days", date : "2023-01-01"});

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)').innerHTML, 
            "Test");

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(2)').innerHTML, 
            "Test1");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(2) span.body-span span:nth-child(2)').innerHTML, 
            "");

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(2) span.body-span span:nth-child(1)').innerHTML, 
            "Test2");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(3) span.body-span span:nth-child(1)').innerHTML, 
            "");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(4) span.body-span span:nth-child(1)').innerHTML, 
            "");
    });

    QUnit.test("test filter event on month days", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01T00:00:00Z"
            }],

            name : "name",

            start : "S",

            filter : (event)=>{
                if(event.name === "Test")
                    return false;
                return true;
            }
        }, mode : "days", date : "2023-01-01"});

        assert.notOk(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)'));
    });



    QUnit.test("Test function to trigger on click on event on month", assert=>{
        let a = 1, b = 1, c
        loadCalendar({eventsData : {
            events : [{
                S : "2023-01-01T00:00:00Z",    
            }],
            start : "S",
            action : ()=>{
                c = a + b;
            }
        }, date : "2023-01-01", mode : "days"});

        document.querySelector("#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)").click();

        assert.equal(c, 2);
    });


    QUnit.test("Test d'affichage de l'en tete en mode mois: click suivant", (assert)=>{
        loadCalendar({mode : "days", date : '2023-01-01T00:00:00Z'});

        const done = assert.async();
        
        document.querySelector("#calendar #head .next").click();

        setTimeout(() => {
            assert.equal( 
                document.querySelector("#calendar #head .title").textContent,
                "Lundi 2 Janvier");
            done();
        }, 500);
    });

    QUnit.test("Test d'affichage de l'en tete en mode mois: click precedant", (assert)=>{
        loadCalendar({mode : "days", date : '2023-01-01T00:00:00Z'});

        const done = assert.async();
        
        document.querySelector("#calendar #head .prev").click();

        setTimeout(() => {
            assert.equal( 
                document.querySelector("#calendar #head .title").textContent,
                "Samedi 31 Decembre");
            done();
        }, 500);
    });

})