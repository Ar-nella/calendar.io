let month = ()=>{
    let caseDays = new Array(42);

    return {

        fillEventOnBoard : (eventsData) => {
                let i, j;
                let eventFilter = filterEventForPeriode(eventsData, caseDays[0].day, caseDays[41].day);
                let eventDatasOrder = orderEventByDate(eventFilter);


                for (i = 0; i < eventDatasOrder.events.length; i++) {
                    let eventDateStart = new Date(eventDatasOrder.events[i][eventDatasOrder.start]);
                    let eventDateEnd = eventDatasOrder.events[i][eventDatasOrder.end] ? new Date(eventDatasOrder.events[i][eventDatasOrder.end]) : eventDateStart;
                    let distanceDayFrom = differenceDay(caseDays[0].day, eventDateStart);
                    console.log(distanceDayFrom + differenceDay(eventDateStart, eventDateEnd) + 1);
                    for (j = distanceDayFrom; j < distanceDayFrom + differenceDay(eventDateStart, eventDateEnd) + 1; j++) {
                        caseDays[j].events.push(eventDatasOrder.events[i]);
                    }
                    
                }
        },

        oninit : function(vnode){
            let i;

            for (i = 0; i < caseDays.length; i++) {
                caseDays[i] = {
                    day : null,
                    events : []
                }
            }

            let dateStart = (new Date(
                (new Date(vnode.attrs.date)).setDate(1)
            ));


            dateStart.setDate(dateStart.getDate() - dateStart.getDay());

            for (i = 0; i < caseDays.length; i++) {
                caseDays[i].day = new Date(dateStart);

                dateStart.setDate(dateStart.getDate() + 1);
            }

            if(vnode.attrs.eventsData)
            {
                this.fillEventOnBoard(vnode.attrs.eventsData);
            }

        },

        onbeforeupdate : (vnode)=>{
            let i;
            let dateStart = (new Date(
                (new Date(vnode.attrs.date)).setDate(1)
            ));

            dateStart.setDate(dateStart.getDate() - dateStart.getDay());

            for (i = 0; i < caseDays.length; i++) {
                caseDays[i].day = new Date(dateStart);

                dateStart.setDate(dateStart.getDate() + 1);
            }
        },

        view: (vnode)=>{
            return m("div", {class: 'content'}, caseDays.map((caseDay)=>{
                return m("span",
                    [
                        m("span", {class: "head-span"}, caseDay.day.getDate()),
                        m("span", {class: 'body-span'}, caseDay.events.map(event=>{
                            return m("span", {
                                'data-event-name' : event[vnode.attrs.eventsData.name]
                            });
                        }))
                    ]
                );
            }));
        }
    }
};