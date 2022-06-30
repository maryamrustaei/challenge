import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'



export default function Main ({ children }) {
  return (
    <div>
      <Header />
      <section className='maincontent' style={{ display: 'flex' }}>
        <Sidebar />
       {children}
      </section>

      <Footer />
    </div>
  )
}
