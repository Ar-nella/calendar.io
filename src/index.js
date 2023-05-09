let root = document.querySelector('#root');


m.mount(root, {
    view : ()=>{
        return m(calendar, {eventsData : {
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
    }
});