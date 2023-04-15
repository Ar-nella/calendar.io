/**
 * 
 * @param {Object} options 
 */

let loadCalendar = (options)=>{
    let root = document.querySelector('#qunit-fixture');

    m.mount(root, {
        view : ()=>{
            return m(calendar, options);
        }
    });
};