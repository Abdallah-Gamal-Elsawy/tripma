import classes from "@/components/hero/hero.module.css";
import Image from "next/image";
import WorldMap from "../../public/world-map.png";
import Search from "../Search_bar/Search";

function Hero() {
  return (
    <>
      <div className={classes.content}>
        <Image className={classes.image} src={WorldMap} alt="WorldMap"></Image>
        <h1 className={classes.text}>It’s more than just a trip</h1>
      </div>
      <div className={classes.search_bar}>
        <Search />
      </div>
    </>
  );
}

export default Hero;
