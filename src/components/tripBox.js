import TripLevel from './tripLevel'

export default ({trip}) => (
    <a href={"/trips/"+trip.id} >
    <div className="container box my-6 mx-0">
        <div class="columns is-mobile is-gapless">
            <div className="column is-6-mobile is-4-tablet">
                <p className="title">{trip.title}</p>
            </div>
            { trip.pictures[0]?.formats.thumbnail.url &&
                <div className="column is-1">
                <img src={trip.pictures[0].formats.thumbnail.url} alt="Jacar Photo" ></img>
                </div>
            }
            { trip.pictures[1]?.formats.thumbnail.url &&
                <div className="column is-1">
                <img src={trip.pictures[1].formats.thumbnail.url} alt="Jacar Photo" ></img>
                </div>
            }
            { trip.pictures[2]?.formats.thumbnail.url &&
                <div className="column is-1">
                <img src={trip.pictures[2].formats.thumbnail.url} alt="Jacar Photo" ></img>
                </div>
            }
            { trip.pictures[3]?.formats.thumbnail.url &&
                <div className="column is-1">
                <img src={trip.pictures[3]?.formats.thumbnail.url} alt="Jacar Photo" ></img>
                </div>
            }
            { trip.pictures[4]?.formats.thumbnail.url &&
                <div className="column is-1">
                <img src={trip.pictures[4].formats.thumbnail.url} alt="Jacar Photo" ></img>
                </div>
            }
            { trip.pictures[5]?.formats.thumbnail.url &&
                <div className="column is-1">
                <img src={trip.pictures[5].formats.thumbnail.url} alt="Jacar Photo" ></img>
                </div>
            }
            { trip.pictures[6]?.formats.thumbnail.url &&
                <div className="column is-1">
                <img src={trip.pictures[6].formats.thumbnail.url} alt="Jacar Photo" ></img>
                </div>
            }
            { trip.pictures[7]?.formats.thumbnail.url &&
                <div className="column is-1">
                <img src={trip.pictures[7]?.formats.thumbnail.url} alt="Jacar Photo" ></img>
                </div>
            }
        </div>
        <TripLevel trip={trip} />
    </div>
    </a>
)