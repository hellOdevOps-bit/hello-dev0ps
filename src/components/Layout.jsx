import Navbar from "./Navbar"
import Footer from "./Footer"

function Layout({ children, activeSection = "home" }) {
  return (
    <div className="app">
      <header>
        <Navbar activeSection={activeSection} />
      </header>

      <main className="content">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
