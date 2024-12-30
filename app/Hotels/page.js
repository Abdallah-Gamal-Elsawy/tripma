import Image from "next/image";
import classes from "./Hotel.module.css";
import Hotel_image1 from "../../public/hotel_image/image.png";
import Hotel_image2 from "../../public/hotel_image/image2.png";
import Hotel_image3 from "../../public/hotel_image/image3.png";
import Hotel_image4 from "../../public/hotel_image/image4.png";
import Hotel_image5 from "../../public/hotel_image/image5.png";
import Hotel_image6 from "../../public/hotel_image/image6.png";
import Hotel_image7 from "../../public/hotel_image/image7.png";
import Hotel_image8 from "../../public/hotel_image/image8.png";
import Hotel_image9 from "../../public/hotel_image/image9.png";
function page() {
  return (
    <>
      <div>
        <h3 className={classes.header_h3}>
          Explore unique
          <span className={classes.header_span}> places to stay</span>
        </h3>
      </div>
      <div className=" flex justify-between p-7  flex-wrap">
        <div className={classes.card_content}>
          <Image
            src={Hotel_image1}
            alt="hotel_image"
            width={410.67}
            height={397}
            className="rounded-tl-md rounded-tr-md mb-3"
          />
          <div className={classes.text_content}>
            <h4 className={classes.card_header_h4}>
              Stay among the atolls in Maldives
              <span className={classes.card_header_span}> Maldives</span>
            </h4>

            <p className={classes.card_p}>
              From the 2nd century AD, the islands were known as the Money Isles
              due to the abundance of cowry shells, a currency of the early
              ages.
            </p>
          </div>
        </div>
        <div className={classes.card_content}>
          <Image
            src={Hotel_image2}
            alt="hotel_image"
            width={410.67}
            height={397}
            className="rounded-tl-md rounded-tr-md mb-3"
          />
          <div className="px-6 py-2">
            <h4 className={classes.card_header_h4}>
              Experience the Ourika Valley in
              <span className={classes.card_header_span}> Morocco</span>
            </h4>

            <p className={classes.card_p}>
              Morocco’s Hispano-Moorish architecture blends influences from
              Berber culture, Spain, and contemporary artistic currents in the
              Middle East.
            </p>
          </div>
        </div>
        <div className={classes.card_content}>
          <Image
            src={Hotel_image3}
            alt="hotel_image"
            width={410.67}
            height={397}
            className="rounded-tl-md rounded-tr-md mb-3"
          />
          <div className="px-6 py-2">
            <h4 className={classes.card_header_h4}>
              Live traditionally in
              <span className={classes.card_header_span}> Mongolia</span>
            </h4>
            <p className={classes.card_p}>
              Traditional Mongolian yurts consists of an angled latticework of
              wood or bamboo for walls, ribs, and a wheel.
            </p>
          </div>
        </div>
        <div className={classes.card_content}>
          <Image
            src={Hotel_image4}
            alt="hotel_image"
            width={410.67}
            height={397}
            className="rounded-tl-md rounded-tr-md mb-3"
          />
          <div className="px-6 py-2">
            <h4 className={classes.card_header_h4}>
              <span className={classes.card_header_span}>
                Hotel Kaneyamaen and Bessho SASA{" "}
              </span>
            </h4>
            <p className={classes.card_p}>
              Located at the base of Mount Fuji, Hotel Kaneyamaen is a
              traitional japanese ryokan with a modern twist. Enjoy a private
              onsen bath and a private multi-course kaiseki dinner.
            </p>
          </div>
        </div>
        <div className={classes.card_content}>
          <Image
            src={Hotel_image5}
            alt="hotel_image"
            width={410.67}
            height={397}
            className="rounded-tl-md rounded-tr-md mb-3"
          />
          <div className="px-6 py-2">
            <h4 className={classes.card_header_h4}>
              <span className={classes.card_header_span}>
                HOTEL THE FLAG 大阪市
              </span>
            </h4>
            <p className={classes.card_p}>
              Make a stop in Osaka and stay at HOTEL THE FLAG, just a few
              minutes walk to experience the food culture surrounding
              Dontonbori. Just one minute away is the Shinsaibashi shopping
              street.
            </p>
          </div>
        </div>
        <div className={classes.card_content}>
          <Image
            src={Hotel_image6}
            alt="hotel_image"
            width={410.67}
            height={397}
            className="rounded-tl-md rounded-tr-md mb-3"
          />
          <div className="px-6 py-2">
            <h4 className={classes.card_header_h4}>
              <span className={classes.card_header_span}>
                {" "}
                9 Hours Shinjuku
              </span>
            </h4>
            <p className={classes.card_p}>
              Experience a truly unique stay in an authentic Japanese capsule
              hotel. 9 Hours Shinjuku is minutes from one of Japan’s busiest
              train stations. Just take the NEX train from Narita airport!
            </p>
          </div>
        </div>
        <div className={classes.card_content}>
          <Image
            src={Hotel_image7}
            alt="hotel_image"
            width={410.67}
            height={397}
            className="rounded-tl-md rounded-tr-md mb-3"
          />
          <div className="px-6 py-2">
            <h4 className={classes.card_header_h4}>
              Shanghai,
              <span className={classes.card_header_span}> China</span>
            </h4>
            <p className={classes.card_p}>
              An international city rich in culture
            </p>
          </div>
        </div>
        <div className={classes.card_content}>
          <Image
            src={Hotel_image8}
            alt="hotel_image"
            width={410.67}
            height={397}
            className="rounded-tl-md rounded-tr-md mb-3"
          />
          <div className="px-6 py-2">
            <h4 className={classes.card_header_h4}>
              Nairobi,
              <span className={classes.card_header_span}> Kenya</span>
            </h4>
            <p className={classes.card_p}>
              Dubbed the Safari Capital of the World
            </p>
          </div>
        </div>
        <div className={classes.card_content}>
          <Image
            src={Hotel_image9}
            alt="hotel_image"
            width={410.67}
            height={397}
            className="rounded-tl-md rounded-tr-md mb-3"
          />
          <div className="px-6 py-2">
            <h4 className={classes.card_header_h4}>
              Seoul,
              <span className={classes.card_header_span}>South Korea</span>
            </h4>
            <p className={classes.card_p}>
              This modern city is a traveler’s dream
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
