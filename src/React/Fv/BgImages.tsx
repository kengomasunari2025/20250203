import { useEffect,useState } from "react"
import FvImg from "./Fv.jpg";

const BgImages = () => {

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setOpacity(1), 100);
    return () => clearTimeout(timer);
  }, []);

  const BgOnImages = {
    backgroundImage: `url(${FvImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: opacity,
    transition: "opacity 3s ease-in-out",
  };
  
  return(
    <div className="youtube-width" style={BgOnImages}></div>
  )
};
export default BgImages;