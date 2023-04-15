let calendar = () =>{
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

            dateString = date2String(currentDate, mode);

        },

        onbeforeupdate: (vnode)=>{
            vnode.attrs.date = currentDate;
        },

        view : (vnode)=>{
            return m('div', {id: "calendar"}, [
                m('div', {id: "head"}, [

                    m('button', {
                        class: 'prev',
                        onclick : ()=>{
                            if(mode == 'days')
                                currentDate.setDate(currentDate.getDate() - 1)
                            else if(mode == 'month')
                                currentDate.setMonth(currentDate.getMonth() - 1)

                            dateString  = date2String(currentDate, mode);
                        }
                    }, "prev"),

                    m('span', {class: 'title'}, dateString),

                    m('button', {
                        class: 'next',
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