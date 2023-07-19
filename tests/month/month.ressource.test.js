QUnit.module("Month ressource", ()=>{
    QUnit.test("Test load ressource Janvier", (assert)=>{
        loadCalendar({
            eventsData : {

            },
            mode : "month",
            date : '2022-01-15',
            ressource : true} 
        );

        let value = document.querySelector('.content .head span:nth-child(2)').textContent
        assert.equal(value, "S 1")

        assert.equal(32, document.querySelector('.content .head').childNodes.length)
    })

    QUnit.test("Test load ressource Fevrier", (assert)=>{
        loadCalendar({
            eventsData : {

            },
            mode : "month",
            date : '2023-02-15',
            ressource : true} 
        );

        let value = document.querySelector('.content .head span:nth-child(2)').textContent
        assert.equal(value, "M 1")

        assert.equal(29, document.querySelector('.content .head').childNodes.length)
    })

    QUnit.test("Test load one ressource Fevrier", (assert)=>{
        loadCalendar({
            eventsData : {
                
            },
            mode : "month",
            date : '2023-02-15',
            ressource : true} 
        );

        let value = document.querySelector('.content .head span:nth-child(2)').textContent
        assert.equal(value, "M 1")

        assert.equal(29, document.querySelector('.content .head').childNodes.length)
    })

})