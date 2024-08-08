import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home/Home";
import Oursevices from "./components/Oursevices";
import ContactForm from "./components/ContactUs";
import Footer from "./components/Footer";
import Newlunch from "./components/Newlunch";
import CustomerReviews from "./components/CustomerReviews";

export default function App() {
  return (
    <>
      <MyNavbar
        section1="pTunes"
        section2="Services"
        section3="Testimonials"
        section4="Contact"
      />
      <main>
        <section id="home">
          <Home />
          <Newlunch />
        </section>
        <section id="services">
          <Oursevices />
        </section>
        <section id="testimonials">
          <CustomerReviews />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
