# Axe de developpement du calendrier

Le calendrier est charge sous la forme suivante

``` JS
/**
options: Objet
    - eventsData: Object
        - events: Table
            Tableau d'evenements a charger
        - name: string
            Nom du champ representant le titre de l'evenement
        - start: string
            Nom du champ representant la date de debut de l'evenement
        - end: string (Optionel)
            Nom du champ representant la date de fin de l'evenement
        - action: Function
            Function to trigger when click on event
        -filter : Function
            Function to filter event
    - date: string (Optionel)
        Date a laquelle le calendrier est charge. Il doit etre au format ISO (YYYY-MM-DD)
    - mode: string (Optionel)
        Mode de vue a laquelle le calendrier est charger
*/
m.mount(root, {
    view : ()=>{
        return m(calendar, datas)
    }
})
```

Par defaut le calendrier a la *date courante sur* le mode *jour*
