import TripLevel from '../components/tripLevel'

export default ({trips}) => (
    <main>
      <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1" style={{textAlign:"center"}}>
                Trips
              </h1>
              <h2 className="subtitle is-3" style={{textAlign:"center"}}>
                from Jacar Users
              </h2>
            </div>
          </div>
        </section>
        <section>
          { trips.map(trip => (
            <a href={"/trips/"+trip.id} >
            <div className="container box my-6">
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <div className="tile is-child is-4">
                    <p className="title">{trip.title}</p>
                  </div>
                  { trip.pictures[0]?.formats.thumbnail.url &&
                  <div className="tile is-child is-1">
                    <img src={trip.pictures[0].formats.thumbnail.url} alt="Jacar Photo" ></img>
                  </div>
                  }
                  { trip.pictures[1]?.formats.thumbnail.url &&
                  <div className="tile is-child is-1">
                    <img src={trip.pictures[1].formats.thumbnail.url} alt="Jacar Photo" ></img>
                  </div>
                  }
                  { trip.pictures[2]?.formats.thumbnail.url &&
                  <div className="tile is-child is-1">
                    <img src={trip.pictures[2].formats.thumbnail.url} alt="Jacar Photo" ></img>
                  </div>
                  }
                  { trip.pictures[3]?.formats.thumbnail.url &&
                  <div className="tile is-child is-1">
                    <img src={trip.pictures[3]?.formats.thumbnail.url} alt="Jacar Photo" ></img>
                  </div>
                  }
                  { trip.pictures[4]?.formats.thumbnail.url &&
                  <div className="tile is-child is-1">
                    <img src={trip.pictures[4].formats.thumbnail.url} alt="Jacar Photo" ></img>
                  </div>
                  }
                  { trip.pictures[5]?.formats.thumbnail.url &&
                  <div className="tile is-child is-1">
                    <img src={trip.pictures[5].formats.thumbnail.url} alt="Jacar Photo" ></img>
                  </div>
                  }
                  { trip.pictures[6]?.formats.thumbnail.url &&
                  <div className="tile is-child is-1">
                    <img src={trip.pictures[6].formats.thumbnail.url} alt="Jacar Photo" ></img>
                  </div>
                  }
                  { trip.pictures[7]?.formats.thumbnail.url &&
                  <div className="tile is-child is-1">
                    <img src={trip.pictures[7]?.formats.thumbnail.url} alt="Jacar Photo" ></img>
                  </div>
                  }
                </div> 
              </div>
              <TripLevel trip={trip} />
            </div>
            </a>
          ))}
        </section>
    </main>
  )
  
  export async function getStaticProps() {
    const res = await fetch(process.env.API_URL + "/trips")
    const trips = await res.json()
    return {
      props : {
        trips,
      }
    }
  }