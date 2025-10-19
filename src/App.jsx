import Intro from "./pages/Intro"
import Motion from "./pages/Motion"
import WorkPage from "./pages/WorkPage"
import Service from "./pages/Services"
import About from "./pages/About"
import Testimonial from "./pages/Testimonial"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="p-2 sm:p-4 md:p-6 flex flex-col gap-16 bg-[#F5F0E9]">
      
      <section id="intro">
        <Intro />
      </section>
      
      <section id="motion">
        <Motion />
      </section>
      
      <section id="work">
        <WorkPage />
      </section>
      
      <section id="services">
        <Service />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="testimonials">
        <Testimonial />
      </section>
      
      <section id="footer">
        <Footer />
      </section>
    </div>
  )
}

export default App
