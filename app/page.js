import Banner from "@/components/banner/Banner";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";
import Flight_Card from "@/components/flight Card/Flight_Card";
import Hotel_Card from "@/components/hotel card/Hotel_Card";
import Feedback from "@/components/feedback/Feedback";
import Cookies from "@/components/Cookies/Cookies";

export default function Home() {
  return (
    <>
      <Banner />
      <Header />
      <Hero />
      <Flight_Card />
      <Hotel_Card />
      <Feedback />
      <Footer />
      <Cookies />
    </>
  );
}
