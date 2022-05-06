import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <header>
        <h1>AboutPage</h1>
        <nav>
          <ul>
            <Link to={routes.home()}>Home</Link>
          </ul>
        </nav>
      </header>
      <main>About</main>
    </>
  )
}

export default AboutPage
