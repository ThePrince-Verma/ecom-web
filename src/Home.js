
import FeatureProduct from "./components/FeatureProduct";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Trusted from "./components/Trusted";


const Home = () => {
  const data ={
    name:"Verma store",
  };
  return (
    <>
  <Hero myData={data} />
  <FeatureProduct />
  <Services />
  <Trusted />
</>
);
}



export default Home;