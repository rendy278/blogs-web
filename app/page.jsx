import Latespost from "@/components/Latespost";
import Hero from "../components/Hero";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="text-3xl  py-20">
      <Header />
      <Hero />
      <Latespost />
    </div>
  );
};

export default Home;
