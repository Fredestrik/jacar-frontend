import { useRouter } from 'next/router'

export default ({trip}) => (
    <main>
      <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Trip : {trip.title}
              </h1>
              <h2 className="subtitle">
                region : {trip.region}
              </h2>
            </div>
          </div>
        </section>
        <section>
        <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical">
          { trip.pictures.map(picture => (
            <div className="tile is-child is-12 box">
              <p className="title">{picture.name}</p>
              <p className="subtitle">url : {picture.url}</p>
              <p className="subtitle">size : {picture.size}</p>
              <p className="subtitle">hash : {picture.hash}</p>
              <p className="subtitle">mime : {picture.mime}</p>
              <img src={picture.url} alt="Jacar Photo" ></img>
            </div>
          ))}
          </div>
        </div>
        </div>
        </section>
    </main>
  )

export async function getServerSideProps(context) {
    const { id } = context.query
    const res = await fetch("https://jacar-strapi.herokuapp.com/trips/"+id)
    const trip = await res.json()
    return {
      props : {
        trip,
      }
    }
  }