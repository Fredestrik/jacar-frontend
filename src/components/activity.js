export default ({activity}) => {
    switch (activity) {
        case 'Culture' : return <>🏛</>;
        case 'City' : return <>🌆</>;
        case 'Hiking_trek' : return <>🥾</>;
        case 'Roadtrip' : return <>🚌</>;
        case 'Biking' : return <>🚲</>;
        case 'Watersports' : return <>🌊</>;
    }
}