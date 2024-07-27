
import Hero from "./components/Hero"
import { useProductContext } from "./context/productContext";


const About = () => {
  const {myName}  = useProductContext();
  const data ={
    name:"Verma Jewellery Shop",
  };
  return( <>
  {myName}
  <Hero myData={data} />;
</>
)

}

export default About