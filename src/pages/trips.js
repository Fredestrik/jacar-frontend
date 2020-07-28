

export default ({trips}) => (
    <main>
      <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Trips
              </h1>
              <h2 className="subtitle">
                from Jacar Users
              </h2>
            </div>
          </div>
        </section>
        <section>
        <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical">
          { trips.map(trip => (
            <a href={"/trips/"+trip.id} >
            <div className="tile is-child is-12 box">
              <p className="title">{trip.title}</p>
              <p className="subtitle">saison : {trip.season}</p>
              <p className="subtitle">période : {trip.period}</p>
              <p className="subtitle">activité : {trip.activity}</p>
              <p className="subtitle">région : {trip.region}</p>
            </div>
            </a>
          ))}
          </div>
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