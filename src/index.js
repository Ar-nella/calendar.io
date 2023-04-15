let root = document.querySelector('#root');


m.mount(root, {
    view : ()=>{
        return m(calendar, {mode:"month"});
    }
});