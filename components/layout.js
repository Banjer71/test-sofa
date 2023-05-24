import Header from "../components/header/header"
import Footer from "../components/footer/footer"

const Layout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
