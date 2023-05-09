let days = ()=>{

    let caseHours = new Array(24);

        
        /**
         * 
         * @param {Object} eventsData 
         * @param {Date} date 
         */

    let fillEventOnBoard = function(eventsData, date){
            let i, j, k;

            for (i = 0; i < eventsData.events.length; i++) {

                if(isEventBelongToDate(eventsData.events[i], date, eventsData.start, eventsData.end)){
                    let position;
                    let start, end;

                    if(compareStrictDate((new Date(eventsData.events[i][eventsData.start])), date)){
                        start = new Date(eventsData.events[i][eventsData.start]);
                    }
                    else{
                        start = date;
                    }

                    if(compareStrictDate((eventsData.events[i][eventsData.end] ? new Date(eventsData.events[i][eventsData.end]) : start), date))
                    {
                        end = eventsData.events[i][eventsData.end] ? new Date(eventsData.events[i][eventsData.end]) : start;
                    }                        
                    else{
                        save = new Date(date);
                        save.setUTCHours(23, 00, 00);
                        end = save;
                    }
    
                    let distance = end.getUTCHours() - start.getUTCHours();
                    
    
                    for (j = start.getUTCHours(); j < start.getUTCHours() + distance + 1; j++) {
                        if (j === start.getUTCHours()){
                            if(!testIfContainNull(caseHours[j].events))
                                position = caseHours[j].events.push({ev : eventsData.events[i], display : true}); //push
                            else{
                                position = nextPositionNull(caseHours[j].events);
                                caseHours[j].events[position] = {ev : eventsData.events[i], display : true}; //push
                                position++;
                            }
                        }
                        else{
                            for (k = 0; k < position; k++) {
                                if (k !== position - 1){
                                    if(caseHours[j].events[k] == undefined)
                                        caseHours[j].events.push(null); //push
                                }
                                else{
                                    caseHours[j].events.push({ev : eventsData.events[i], display : false}); //push
                                }
                                
                            }
                        }
                    }
    
                }
                
            }
        }



    
    return {
        oninit : function(vnode){
            let i;

            for (i = 0; i < caseHours.length; i++) {
                caseHours[i] = {
                    hour : null,
                    events : []
                }
            }

            let hourStart = (new Date(
                (new Date(vnode.attrs.date)).setUTCHours(0)
            ));

            for (i = 0; i < caseHours.length; i++) {
                caseHours[i].hour = new Date(hourStart);

                hourStart.setUTCHours(hourStart.getUTCHours() + 1);
            }

            if(vnode.attrs.eventsData)
            {
                fillEventOnBoard(vnode.attrs.eventsData, new Date(vnode.attrs.date));
            }
        },

        onbeforeupdate : (vnode)=>{
            let i;

            for (i = 0; i < caseHours.length; i++) {
                caseHours[i] = {
                    hour : null,
                    events : []
                }
            }

            let hourStart = (new Date(
                (new Date(vnode.attrs.date)).setHours(0)
            ));

            for (i = 0; i < caseHours.length; i++) {
                caseHours[i].hour = new Date(hourStart);

                hourStart.setUTCHours(hourStart.getUTCHours() + 1);
            }

            if(vnode.attrs.eventsData)
            {
                fillEventOnBoard(vnode.attrs.eventsData, new Date(vnode.attrs.date));
            }
        },

        view: (vnode)=>{
            return m("div", {class : 'content'}, caseHours.map(caseHour=>{
                return m("span", [
                    m("span", {class : "head-span"}, caseHour.hour.getUTCHours() + "h"),
                    m("span", {class : "body-span"}, caseHour.events.map(event=>{
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
                    })),
                ])
            }))
        }
    };
};