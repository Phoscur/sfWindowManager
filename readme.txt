
Verwaltet Seitenteile (Views, Windows) dynamisch durch Befehle vom Server:

Verarbeitung:
Messages werden je nach Bedarf an ein Logsystem weitergegeben
View wird gesucht und bei Bedarf gebaut (mit Argumenten), mit Inhalt befüllt
Actions (Controller) werden nach Typ gebaut (mit Argumenten) und durch CSS Selektoren angebunden

Format der Serverantwort (JSON):
// args always optional
[
{
    view: { // required
        id: "overview",
        type: "phWindow",
        args: []
    },
    messages: [ // optional
        {
            type: "info",
            text: "Seite aktualisiert"
        }
    ],
    actions: { // optional
        "CSS3 Selector": {
            type: "SimpleAction",
            event: "click",
            args: [ "nameOfNextController", "params.."],
        },
        ".closeButton": {
            type: "NullAction", // prevent all windows to get closed by user
            event: "click",
            args: []
        },
        "#overview": { // autorefresh:
            type: "LoadEveryMSAction",
            event: "load",
            args: [5000, "nameOfRefreshingController"]
    },
    content: "<div>some plain HTML</div>" // optional
}
]