import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import BookingSection from "../components/BookingSection";

const Home = () => {
  return (
    <>
      <div>
        <Banner></Banner>
      </div>
      <section className="bg-[#0F1035] ">
        <Outlet></Outlet>
      </section>
      <section className="bg-[#0F1035]">
        <BookingSection></BookingSection>
      </section>
    </>
  );
};

export default Home;
