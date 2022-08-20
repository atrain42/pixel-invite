import crib from "../images/crib.jpeg";
import carseat from "../images/carseat.jpeg";
import stroller from "../images/stroller.png";

import classes from "./TopGifts.module.css";
import Gift from "./Gift";

const gifts = [
  {
    id: "1",
    title: "Delta Children Tribeca 4-in-1 Baby Convertible Crib",
    image: crib,
    info: "Preferred colors: White/Tan, Gold",
  },
  {
    id: "2",
    title: "Graco SlimFit 3 in 1 Car Seat",
    image: carseat,
    info: "Preferred colors: White/Gray",
  },
  {
    id: "3",
    title: "Thule spring compact stroller",
    image: stroller,
    info: "Preferred colors: Black, Olive, Misty Rose",
  },
];

const TopGifts = () => {
  return (
    <section className={classes.giftSection}>
      {/* <div className={classes.giftOverlay}></div> */}
      <h1 className="infoTitle">Look at my top gifts</h1>
      {gifts.map((gift) => {
        return <Gift key={gift.id} {...gift} />;
      })}
    </section>
  );
};

export default TopGifts;
