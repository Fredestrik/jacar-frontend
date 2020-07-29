export default ({period}) => {
    switch (period) {
        case 'Day' : return <>Journée</>;
        case 'Weekend' : return <>Week-End</>;
        case '_4or5Days' : return <>4 ou 5 jours</>;
        case 'Week' : return <>Semaine</>;
        case '_10Days' : return <>10 jours</>;
        case '_2weeksormore' : return <>2 semaines ou plus</>;
    }
}
