import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import BookingSection from "../components/BookingSection";
import VideoSection from "../components/VideoSection";

const Home = () => {
  return (
    <>
      <div>
        <Banner></Banner>
      </div>
      <section className="bg-[#0F1035] ">
        <Outlet></Outlet>
      </section>
      <section className="bg-[#0F1035] overflow-x-hidden">
        <BookingSection></BookingSection>
      </section>
      <section>
        <VideoSection></VideoSection>
      </section>
    </>
  );
};

export default Home;
