let calendar = () => {
    let currentDate, mode = "days", dateString, modeObj = days;

    return {
        oninit : (vnode)=>{
            currentDate = new Date();
            if(vnode.attrs.date && isIsoDate(vnode.attrs.date))
                currentDate = new Date(vnode.attrs.date)
            else
                vnode.attrs.date = currentDate.toISOString();

            if(vnode.attrs.mode){
                mode = vnode.attrs.mode;
                if (mode == "days")
                    modeObj = days;
                else if (mode == "month"){
                    modeObj = month;
                }
            }

            if(vnode.attrs.eventsData && vnode.attrs.eventsData.filter){
                vnode.attrs.eventsData.events = vnode.attrs.eventsData.events.filter((event=>{
                    return vnode.attrs.eventsData.filter(event);
                }));

                vnode.attrs.eventsData.events = filterBadEvent(vnode.attrs.eventsData.events);

            }


            dateString = date2String(currentDate, mode);

        },

        onbeforeupdate: (vnode)=>{
            vnode.attrs.date = currentDate;
        },

        view : (vnode)=>{
            return m('div', {id: "calendar", class : 'max-w-4xl'}, [
                m('div', {id: "head", class : "flex justify-between items-center py-2 border-b-2 border-blue-400"}, [

                    m('button', {
                        class: 'prev text-white px-3 py-1 rounded bg-blue-800',
                        onclick : ()=>{
                            if(mode == 'days')
                                currentDate.setDate(currentDate.getDate() - 1)
                            else if(mode == 'month')
                                currentDate.setMonth(currentDate.getMonth() - 1)

                            dateString  = date2String(currentDate, mode);
                        }
                    }, "prev"),

                    m('span', {class: 'title text-xl'}, dateString),

                    m('button', {
                        class: 'next text-white px-3 py-1 rounded bg-blue-800',
                        onclick : ()=>{
                            if(mode == 'days')
                                currentDate.setDate(currentDate.getDate() + 1)
                            else if(mode == 'month')
                                currentDate.setMonth(currentDate.getMonth() + 1)

                            dateString = date2String(currentDate, mode);
                        }
                    }, "next"),
                ]),

                m('div', {id: "body"}, [
                    m(modeObj, {...vnode.attrs})
                ])
            ]);
        }
    }
};