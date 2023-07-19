let rmonth = ()=>{

    let caseDay = [];

    return {
        oninit : (vnode)=>{
            let currentMonth;

            let dateStart = (new Date(
                (new Date(vnode.attrs.date)).setDate(1)
            ));

            currentMonth = dateStart.getMonth();

            while (dateStart.getMonth() === currentMonth) {
                caseDay.push(new Date(dateStart));

                dateStart.setDate(dateStart.getDate() + 1);
            }

        },

        view : (vnode)=>{
            return m("div", {class : 'content'}, [
                    m("div", {class : 'head'},
                        [
                            m("span", "Ressource"),
                            ...(caseDay.map(c=>{
                                return m("span", translateDay(c.getDay())[0] + " " + c.getDate())
                            }))
                        ]
                    )
                ]
            )
        }
    }
}