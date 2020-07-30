export default ({region}) => {
    switch (region) {
        case 'AuvergneRhoneAlpes' : return <img src="/regions/auvergne.png" alt="région" width="30"/>;
        case 'BourgogneFrancheComte' : return <img src="/regions/bourgogne.png" alt="région" width="30"/>;
        case 'Bretagne' : return <img src="/regions/bretagne.png" alt="région" width="30"/>;
        case 'CentreValdeLoire' : return <img src="/regions/centre.png" alt="région" width="30"/>;
        case 'Corse' : return <img src="/regions/corse.png" alt="région" width="30"/>;
        case 'GrandEst' : return <img src="/regions/grandest.png" alt="région" width="30"/>;
        case 'HautsdeFrance' : return <img src="/regions/hautsdefrance.png" alt="région" width="30"/>;
        case 'IledeFrance' : return <img src="/regions/iledefrance.png" alt="région" width="30"/>;
        case 'Normandie' : return <img src="/regions/normandie.png" alt="région" width="30"/>;
        case 'NouvelleAquitaine' : return <img src="/regions/nouvelleaquitaine.png" alt="région" width="30"/>;
        case 'Occitanie' : return <img src="/regions/occitanie.png" alt="région" width="30"/>;
        case 'PaysdelaLoire' : return <img src="/regions/paysdelaloire.png" alt="région" width="30"/>;
        case 'ProvenceAlpesCotedAzur' : return <img src="/regions/provence.png" alt="région" width="30"/>;
    }
}