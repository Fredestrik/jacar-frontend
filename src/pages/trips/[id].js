import { useRouter } from 'next/router'

export default ({trip}) => {
  const router = useRouter()
    // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <main>
        <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  Loading..
                </h1>
              </div>
            </div>
          </section>
        </main>
    )
  }
  return (
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
          <div className="tile is-parent">
          { trip.pictures.map(picture => (
            <div className="tile is-child is-4">
              <img src={picture.formats.small.url} alt="Jacar Photo" ></img>
            </div>
          ))}
          </div>
        </div>
        </div>
        </section>
    </main>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '2' } }],
    fallback: true,
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the `id`.
  const url = `${process.env.API_URL}/trips/${params.id}`
  const res = await fetch(url)
  const trip = await res.json()
  // Pass trip data to the page via props
  return { props: {trip } }
}