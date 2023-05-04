
QUnit.module("calendar global test", ()=>{

    QUnit.test("Test d'affichage de l'en tete par defaut", (assert)=>{
        loadCalendar({});
        let date = new Date();
        let stringHead = translateDay(date.getDay()) +
        " " + date.getDate() + " " +
        translateMonth(date.getMonth())
        
        assert.equal( 
            document.querySelector("#calendar #head .title").textContent,
            stringHead);
    });


    QUnit.test("Test d'affichage de l'en tete par defaut si date passer au mauvais format", (assert)=>{
        loadCalendar({date: "13 Janvier 2023"});
        let date = new Date();
        let stringHead = translateDay(date.getDay()) +
        " " + date.getDate() + " " +
        translateMonth(date.getMonth())
        
        assert.equal( 
            document.querySelector("#calendar #head .title").textContent,
            stringHead);
    });


    QUnit.test("Test d'affichage de l'en tete pour un jour particulier", (assert)=>{
        loadCalendar({events : {}, date : "2022-04-13"});
        
        assert.equal( 
            document.querySelector("#calendar #head .title").textContent,
            "Mercredi 13 Avril");
    });



    QUnit.test("Test d'affichage de l'en tete au click suivant", (assert)=>{
        const done = assert.async();
        loadCalendar({events : {}, date : "2022-04-13"});
        
        document.querySelector("#calendar #head .next").click();

        setTimeout(() => {
            assert.equal(document.querySelector("#calendar #head .title").innerHTML,
            "Jeudi 14 Avril");
            done();
        }, 500);
    });

    QUnit.test("Test d'affichage de l'en tete au click precedent", (assert)=>{
        const done = assert.async();
        loadCalendar({events : {}, date : "2022-04-13"});
        
        document.querySelector("#calendar #head .prev").click();

        setTimeout(() => {
            assert.equal(document.querySelector("#calendar #head .title").innerHTML,
            "Mardi 12 Avril");
            done();
        }, 500);
    });

});