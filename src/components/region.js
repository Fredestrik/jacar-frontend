export default ({region}) => {
    switch (region) {
        case 'AuvergneRhoneAlpes' : return <>Auvergne Rhône-Alpes</>;
        case 'BourgogneFrancheComte' : return <>Bourgogne Franche-Comté</>;
        case 'Bretagne' : return <>Bretagne</>;
        case 'CentreValdeLoire' : return <>Centre Val-de-Loire</>;
        case 'Corse' : return <>Corse</>;
        case 'GrandEst' : return <>Grand-Est</>;
        case 'HautsdeFrance' : return <>Hauts-de-France</>;
        case 'IledeFrance' : return <>Ile-de-France</>;
        case 'Normandie' : return <>Normandie</>;
        case 'NouvelleAquitaine' : return <>Nouvelle-Aquitaine</>;
        case 'Occitanie' : return <>Occitanie</>;
        case 'PaysdelaLoire' : return <>Pays de la Loire</>;
        case 'ProvenceAlpesCotedAzur' : return <>Provence Alpes Côte d'Azur</>;
    }
}