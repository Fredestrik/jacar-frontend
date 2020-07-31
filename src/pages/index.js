import Region from '../components/region'
import Activity from '../components/activity'
import Period from '../components/period'
import Season from '../components/season'
import TripBox from '../components/tripBox'

import activities from '../enums/activities'
import regions from '../enums/regions'
import seasons from '../enums/seasons'
import periods from '../enums/periods'

export default ({trips}) => (
    <main>
      <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1" style={{textAlign:"center"}}>
                Inspirez vos voyages
              </h1>
              <h2 className="subtitle is-3" style={{textAlign:"center"}}>
                avec Jacar
              </h2>
              <div style={{ textAlign:"center"}}>
                <div className="field mx-3" style={{display: "inline-block"}}>
                  <label className="label">Région</label>
                  <div className="control">
                    <div className="select">
                      <select>
                        { Object.keys(regions).map( region => (
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
                        { Object.keys(activities).map( activity => (
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
                        { Object.keys(periods).map (period => (
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
                        { Object.keys(seasons).map( season => (
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
            <TripBox trip={trip} />
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