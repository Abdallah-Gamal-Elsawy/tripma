import Image from "next/image";
import classes from "../../components/feedback/feedback.module.css";
import avatar1 from "../../public/avatar/avatar.png";
import avatar2 from "../../public/avatar/avatar2.png";
import avatar3 from "../../public/avatar/avatar3.png";
import start_filled from "../../public/icons/Star 1.svg";
import start_unfilled from "../../public/icons/star unfilled.svg";
function Feedback() {
  return (
    <div className="mb-20">
      <h3 className={classes.title_h3}>
        What <span className={classes.title_span}>Tripma</span> users are saying
      </h3>
      <div className="grid grid-flow-col justify-between mx-16">
        <div className="flex items-start gap-5">
          <Image src={avatar1} alt="avatar1" width={48} height={48} />
          <div>
            <h4 className={classes.name}>Yifei Chen</h4>
            <h6 className={classes.address}>Seoul, South Korea | April 2019</h6>
            <div className="flex py-2 ">
              <Image
                src={start_filled}
                alt="avatar1"
                width={18}
                height={18}
                className={classes.star}
              />
              <Image
                src={start_filled}
                alt="avatar1"
                width={18}
                height={18}
                className={classes.star}
              />
              <Image
                src={start_filled}
                alt="avatar1"
                width={18}
                height={18}
                className={classes.star}
              />
              <Image
                src={start_filled}
                alt="avatar1"
                width={18}
                height={18}
                className={classes.star}
              />
              <Image
                src={start_filled}
                alt="avatar1"
                width={18}
                height={18}
                className={classes.star}
              />
            </div>
            <div className={classes.content}>
              <p className={classes.description}>
                What a great experience using Tripma! I booked all of my flights
                for my gap year through Tripma and never had any issues. When I
                had to cancel a flight because of an emergency, Tripma support
                helped me{" "}
                <span className={classes.description_span}>read more...</span>
              </p>
            </div>
          </div>
        </div>
        {/*card 1*/}
        <div className="flex items-start gap-5">
          <Image src={avatar2} alt="avatar1" width={48} height={48} />
          <div>
            <h4 className={classes.name}>Kaori Yamaguchi</h4>
            <h6 className={classes.address}>
              Honolulu, Hawaii | February 2017
            </h6>
            <div className="flex py-2 ">
              <Image
                src={start_filled}
                alt="avatar1"
                width={18}
                height={18}
                className={classes.star}
              />
              <Image
                src={start_filled}
                alt="avatar1"
                width={18}
                height={18}
                className={classes.star}
              />
              <Image
                src={start_filled}
                alt="avatar1"
                width={18}
                height={18}
                className={classes.star}
              />
              <Image
                src={start_filled}
                alt="avatar1"
                width={18}
                height={18}
                className={classes.star}
              />
              <Image
                src={start_unfilled}
                alt="avatar1"
                width={24}
                height={24}
                className={classes.star}
              />
            </div>
            <div className={classes.content}>
              <p className={classes.description}>
                My family and I visit Hawaii every year, and we usually book our
                flights using other services. Tripma was recommened to us by a
                long time friend, and I’m so glad we tried it out! The process
                was easy and
                <span className={classes.description_span}>read more...</span>
              </p>
            </div>
          </div>
        </div>{" "}
        {/*card 2*/}
        <div className="flex items-start gap-5">
          <Image src={avatar3} alt="avatar1" width={48} height={48} />
          <div>
            <h4 className={classes.name}>Anthony Lewis</h4>
            <h6 className={classes.address}>Berlin, Germany | April 2019</h6>
            <div className="flex py-2 ">
              <Image
                src={start_filled}
                alt="avatar1"
                width={18}
                height={18}
                className={classes.star}
              />
              <Image
                src={start_filled}
                alt="avatar1"
                width={18}
                height={18}
                className={classes.star}
              />
              <Image
                src={start_filled}
                alt="avatar1"
                width={18}
                height={18}
                className={classes.star}
              />
              <Image
                src={start_filled}
                alt="avatar1"
                width={18}
                height={18}
                className={classes.star}
              />
              <Image
                src={start_filled}
                alt="avatar1"
                width={18}
                height={18}
                className={classes.star}
              />
            </div>
            <div className={classes.content}>
              <p className={classes.description}>
                When I was looking to book my flight to Berlin from LAX, Tripma
                had the best browsing experiece so I figured I’d give it a try.
                It was my first time using Tripma, but I’d definitely recommend
                it to a friend and use it for
                <span className={classes.description_span}>read more...</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
