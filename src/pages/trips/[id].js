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
          <div className="tile is-parent is-vertical">
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
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  const url = `${process.env.API_URL}/trips/${params.id}`
  const res = await fetch(url)
  const trip = await res.json()
  // Pass post data to the page via props
  return { props: {trip } }
}