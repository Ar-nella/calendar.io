QUnit.module("mode month test", ()=>{

    QUnit.test("Test d'affichage de l'en tete en mode mois", (assert)=>{
        loadCalendar({mode : "month", date : '2022-01-01'});
        
        assert.equal( 
            document.querySelector("#calendar #head .title").textContent,
            "Janvier 2022");
    });

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
        
    QUnit.test("test load three event", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01",
                E : "2023-01-02"
            },{
                name : "Test1",
                S : "2023-01-02",
                E : "2023-01-03"
            },{
                name : "Test2",
                S : "2023-01-03",
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
            document.querySelector('#calendar #body .content span:nth-child(2) span.body-span span:nth-child(2)').getAttribute('data-event-name'), 
            "Test1");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(3) span.body-span span:nth-child(2)').getAttribute('data-event-name'), 
            "Test1");

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(3) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test2");
        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(4) span.body-span span:nth-child(1)').getAttribute('data-event-name'), 
            "Test2");
    });
        

    QUnit.test("test filter event on month mode", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01"
            }],

            name : "name",

            start : "S",

            filter : (event)=>{
                if(event.name === "Test")
                    return false;
                return true;
            }
        }, mode : "month", date : "2023-01-15"});

        assert.notOk(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)'));
    });


    QUnit.test("Test function to trigger on click on event on month", assert=>{
        let a = 1, b = 1, c
        loadCalendar({eventsData : {
            events : [{
                S : "2023-01-01",    
            }],
            start : "S",
            action : ()=>{
                c = a + b;
            }
        }, date : "2023-01-13", mode : "month"});

        document.querySelector("#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)").click();

        assert.equal(c, 2);
    });


    QUnit.test("Test d'affichage de l'en tete en mode mois: click suivant", (assert)=>{
        loadCalendar({mode : "month", date : '2022-01-01'});

        const done = assert.async();
        
        document.querySelector("#calendar #head .next").click();

        setTimeout(() => {
            assert.equal( 
                document.querySelector("#calendar #head .title").textContent,
                "Fevrier 2022");
            done();
        }, 500);
    });

    QUnit.test("Test d'affichage de l'en tete en mode mois: click precedant", (assert)=>{
        loadCalendar({mode : "month", date : '2022-01-01'});

        const done = assert.async();
        
        document.querySelector("#calendar #head .prev").click();

        setTimeout(() => {
            assert.equal( 
                document.querySelector("#calendar #head .title").textContent,
                "Decembre 2021");
            done();
        }, 500);
    });

    QUnit.test("Test display event", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01"
            }],

            name : "name",

            start : "S"
        }, mode : "month", date : "2023-01-15"});

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)').innerHTML, 
            "Test");
    });

    QUnit.test("Test display one long event", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01",
                E : "2023-01-02"
            }],

            name : "name",

            start : "S"
        }, mode : "month", date : "2023-01-15"});

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)').innerHTML, 
            "Test");

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(2) span.body-span span:nth-child(1)').innerHTML, 
            "");
    });

    QUnit.test("Test display one too long event", assert=>{
        loadCalendar({eventsData : {
            events : [{
                name : "Test",
                S : "2023-01-01",
                E : "2023-01-08"
            }],

            name : "name",

            start : "S"
        }, mode : "month", date : "2023-01-15"});

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(1) span.body-span span:nth-child(1)').innerHTML, 
            "Test");

        assert.equal(
            document.querySelector('#calendar #body .content span:nth-child(8) span.body-span span:nth-child(1)').innerHTML, 
            "Test");
    });

    
});