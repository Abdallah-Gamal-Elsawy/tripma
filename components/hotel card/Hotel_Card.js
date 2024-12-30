import classes from "../../components/hotel card/hotel_card.module.css";
import Image from "next/image";
import Hotel_image1 from "../../public/hotel_image/image.png";
import Hotel_image2 from "../../public/hotel_image/image2.png";
import Hotel_image3 from "../../public/hotel_image/image3.png";
import ArrowRight from "../../public/icons/arrowRight.svg";
import Link from "next/link";
function Hotel_Card() {
  return (
    <>
      <div className={classes.card}>
        <div className="flex justify-between">
          <h3 className={classes.header_h3}>
            Explore unique
            <span className={classes.header_span}> places to stay</span>
          </h3>
          <div className="flex gap-1">
            <h1 className={classes.seeAll}>All</h1>
            <Image src={ArrowRight} alt="ArrowRight" width={19.5} height={15} />
          </div>
        </div>
        <div className="grid grid-flow-col justify-between">
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
                From the 2nd century AD, the islands were known as the Money
                Isles due to the abundance of cowry shells, a currency of the
                early ages.
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
        </div>
      </div>
      <div className="text-center">
        <Link href={"/Hotels"}>
          <button className={classes.button}>Explore more stays</button>
        </Link>
      </div>
    </>
  );
}

export default Hotel_Card;
