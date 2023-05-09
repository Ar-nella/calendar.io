let month = ()=>{
    let caseDays = new Array(42);

    return {

        fillEventOnBoard : function(eventsData) {
            let i, j, k;
            let eventFilter = filterEventForPeriode(eventsData, caseDays[0].day, caseDays[41].day);
            let eventDatasOrder = orderEventByDate(eventFilter);

            for (i = 0; i < eventDatasOrder.events.length; i++) {
                let position;
                let eventDateStart = new Date(eventDatasOrder.events[i][eventDatasOrder.start]);
                let eventDateEnd = eventDatasOrder.events[i][eventDatasOrder.end] ? new Date(eventDatasOrder.events[i][eventDatasOrder.end]) : eventDateStart;
                let distanceDayFrom = differenceDay(caseDays[0].day, eventDateStart);
                
                for (j = distanceDayFrom; j < distanceDayFrom + differenceDay(eventDateStart, eventDateEnd) + 1; j++) {
                    if (j == distanceDayFrom){
                        if(!testIfContainNull(caseDays[j].events))
                            position = caseDays[j].events.push({ev : eventDatasOrder.events[i], display : true}); //push
                        else{
                            position = nextPositionNull(caseDays[j].events);
                            caseDays[j].events[position] = {ev : eventDatasOrder.events[i], display : true}; //push
                            position++;
                        }
                    }
                    else{
                        for (k = 0; k < position; k++) {
                            if (k !== position - 1){
                                if(caseDays[j].events[k] == undefined)
                                    caseDays[j].events.push(null);
                            }
                            else{

                                caseDays[j].events.push({ev : eventDatasOrder.events[i], display : j % 7 === 0}); //push
                            }
                        }
                    }
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
            return m("div", {class: 'content grid grid-cols-7 min-h-[40rem]'}, caseDays.map((caseDay)=>{
                return m("span", {class : "border border-gray-200 flex flex-col"},
                    [
                        m("span", {class: "head-span text-white bg-gray-800"}, caseDay.day.getDate()),
                        m("span", {class: 'body-span grid grid-rows-3'}, caseDay.events.map(event=>{

                            if(event == null)
                                return m("span")
                            return m("span", {
                                'data-event-name' : event.ev[vnode.attrs.eventsData.name],
                                onclick : ()=>{
                                    if(vnode.attrs.eventsData.action){
                                        vnode.attrs.eventsData.action()
                                    }
                                }
                            }, event.display ? event.ev[vnode.attrs.eventsData.name] : "");
                        }))
                    ]
                );
            }));
        }
    }
};