import classes from "../../components/flight Card/flight_card.module.css";
import Image from "next/image";
import Country_image1 from "../../public/country_image/image.png";
import Country_image2 from "../../public/country_image/image2.png";
import Country_image3 from "../../public/country_image/image3.png";
import Country_image4 from "../../public/country_image/image4.png";
import ArrowRight from "../../public/icons/arrowRight.svg";
function Flight_Card() {
  return (
    <div className={classes.card}>
      <div className="flex justify-between">
        <h3 className={classes.header_h3}>
          Find your next adventure with these
          <span className={classes.header_span}>flight deals</span>
        </h3>
        <div className="flex gap-1">
          <h1 className={classes.seeAll}>All</h1>
          <Image src={ArrowRight} alt="ArrowRight" width={19.5} height={15} />
        </div>
      </div>
      <div className="grid grid-flow-col justify-between ">
        <div className={classes.card_content}>
          <Image
            src={Country_image1}
            alt="Country_image"
            width={410.67}
            height={397}
            className="rounded-tl-md rounded-tr-md mb-3"
          />
          <div className="px-6 py-2">
            <div className="flex justify-between ">
              <h4 className={classes.card_header_h4}>
                The Bund,
                <span className={classes.card_header_span}>Shanghai</span>
              </h4>
              <h1 className={classes.card_header_h4}>$598</h1>
            </div>
            <p className={classes.card_p}>China’s most international city</p>
          </div>
        </div>
        <div className={classes.card_content}>
          <Image
            src={Country_image2}
            alt="Country_image"
            width={410.67}
            height={397}
            className="rounded-tl-md rounded-tr-md mb-3"
          />
          <div className="px-6 py-2">
            <div className="flex justify-between ">
              <h4 className={classes.card_header_h4}>
                Sydney Opera House,
                <span className={classes.card_header_span}>Sydney</span>
              </h4>
              <h1 className={classes.card_header_h4}>$981</h1>
            </div>
            <p className={classes.card_p}>
              Take a stroll along the famous harbor
            </p>
          </div>
        </div>
        <div className={classes.card_content}>
          <Image
            src={Country_image3}
            alt="Country_image"
            width={410.67}
            height={397}
            className="rounded-tl-md rounded-tr-md mb-3"
          />
          <div className="px-6 py-2">
            <div className="flex justify-between ">
              <h4 className={classes.card_header_h4}>
                Kōdaiji Temple,
                <span className={classes.card_header_span}>Kyoto</span>
              </h4>
              <h1 className={classes.card_header_h4}>$633</h1>
            </div>
            <p className={classes.card_p}>
              Step back in time in the Gion district
            </p>
          </div>
        </div>
      </div>
      <div className={classes.card2_content}>
        <Image
          src={Country_image4}
          alt="Country_image4"
          width={1450}
          height={397}
          className="rounded-tl-md rounded-tr-md mb-3 w-full"
        />
        <div className="px-6 py-2">
          <div className="flex justify-between ">
            <h4 className={classes.card_header_h4}>
              Tsavo East National Park,
              <span className={classes.card_header_span}>Kenya</span>
            </h4>
            <h1 className={classes.card_header_h4}>$1,248</h1>
          </div>
          <p className={classes.card_p}>
            Named after the Tsavo River, and opened in April 1984, Tsavo East
            National Park is one of the oldest parks in Kenya. It is located in
            the semi-arid Taru Desert.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Flight_Card;
