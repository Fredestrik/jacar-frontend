import TripLevel from '../components/tripLevel'
import Region from '../components/region'
import Activity from '../components/activity'
import Period from '../components/period'
import Season from '../components/season'

const regions = [
  "AuvergneRhoneAlpes",
  "BourgogneFrancheComte",
  "Bretagne",
  "CentreValdeLoire",
  "Corse",
  "GrandEst",
  "HautsdeFrance",
  "IledeFrance",
  "Normandie",
  "NouvelleAquitaine",
  "Occitanie",
  "PaysdelaLoire",
  "ProvenceAlpesCotedAzur"
]

const activities = [
  "Culture",
  "City",
  "Hiking_trek",
  "Roadtrip",
  "Biking",
  "Watersports"
]

const periods = [
  "Day",
  "Weekend",
  "_4or5Days",
  "Week",
  "_10Days",
  "_2weeksormore"
]

const seasons = [
  "spring",
  "summer",
  "automn",
  "winter"
]

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
              <div style={{ textAlign:"center"}}>
                <div className="field mx-3" style={{display: "inline-block"}}>
                  <label className="label">Région</label>
                  <div className="control">
                    <div className="select">
                      <select>
                        { regions.map( region => (
                          <option value={region}><Region region={region} /></option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field mx-3" style={{display: "inline-block"}}>
                  <label className="label">Activité</label>
                  <div className="control">
                    <div className="select">
                      <select>
                        { activities.map( activity => (
                          <option value={activity}><Activity activity={activity}/></option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field mx-3" style={{display: "inline-block"}}>
                  <label className="label">Durée</label>
                  <div className="control">
                    <div className="select">
                      <select>
                        { periods.map (period => (
                          <option value={period}><Period period={period}/></option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field mx-3" style={{display: "inline-block"}}>
                  <label className="label">Saison</label>
                  <div className="control">
                    <div className="select">
                      <select>
                        { seasons.map( season => (
                          <option value={season}><Season season={season} /></option> 
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
        <div className="columns is-mobile is-centered">
          <div className="column is-full-mobile is-four-fifths-tablet">
          { trips.map(trip => (
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
          ))}
          </div>
        </div>
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