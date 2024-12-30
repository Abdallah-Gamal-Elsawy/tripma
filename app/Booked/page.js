"use client";
import Image from "next/image";
import closeIcon from "../../public/icons/x close no.svg";
import classes from "./Booked.module.css";
import flightIcon from "../../public/icons/flightIcon.svg";
import lineMap from "../../public/icons/line.svg";
import Visa from "../../public/visa.svg";
import Map from "../../public/country_image/Map.svg";
import Map2 from "../../public/country_image/Map1.svg";
import Hotel_image from "../../public/hotel_image/image12.png";
import Hotel_image2 from "../../public/hotel_image/image4.png";
import Hotel_image3 from "../../public/hotel_image/image5.png";
import Hotel_image4 from "../../public/hotel_image/image6.png";
import experience_image5 from "../../public/experience_image/image.png";
import experience_image6 from "../../public/experience_image/image9.png";
import { useEffect, useState } from "react";
import { useDataContext } from "../DataContext";
import formatedDate from "@/utils/formatdate";
import Link from "next/link";

function Page() {
  const { seats, setSeats } = useDataContext();
  const { departSeats = [], departTypeSeat = [] } = seats || {};
  const { arrivalSeats, setArrivalSeats } = useDataContext();
  const {
    arrivalSeat = [],
    typeseat = [],
    upgradePrice = 0,
  } = arrivalSeats || {};
  const { data, setData } = useDataContext();
  const [isVisible, setIsVisible] = useState(true);
  const { cardForm, setCardForm } = useDataContext();
  const { passengerForm, setpassengerForm } = useDataContext();
  useEffect(() => {
    if (!cardForm || Object.keys(cardForm).length === 0) {
      const storedData = JSON.parse(sessionStorage.getItem("CardForm"));
      if (storedData) setCardForm(storedData);
    }
  }, [cardForm, setCardForm]);
  useEffect(() => {
    if (!passengerForm || Object.keys(passengerForm).length === 0) {
      const storedData = JSON.parse(sessionStorage.getItem("PassengerForm"));
      if (storedData) setpassengerForm(storedData);
    }
  }, [passengerForm, setpassengerForm]);
  useEffect(() => {
    const hidden = sessionStorage.getItem("saveNotification");
    if (hidden) {
      setIsVisible(false);
    }
  }, []);
  const handelHide = () => {
    setIsVisible(false);
    sessionStorage.setItem("saveNotification", "true");
  };

  const {
    selectflight = [],
    from,
    to,
    tripType,
    startWithoutFormat,
    endtWithoutFormat,
  } = data || {};
  useEffect(() => {
    if (!data || Object.keys(data).length === 0) {
      const storedData = JSON.parse(sessionStorage.getItem("flightData"));
      if (storedData) setData(storedData);
    }
  }, [data, setData]);
  useEffect(() => {
    if (!seats || Object.keys(seats).length === 0) {
      const storedData = JSON.parse(sessionStorage.getItem("seats"));
      if (storedData) setSeats(storedData);
    }
  }, [seats, setSeats]);
  useEffect(() => {
    if (!arrivalSeats || Object.keys(arrivalSeats).length === 0) {
      const storedData = JSON.parse(sessionStorage.getItem("ArrivalSeats"));
      if (storedData) setArrivalSeats(storedData);
    }
  }, [arrivalSeats, setArrivalSeats]);
  const formatDate = (date) => {
    const d = new Date(date);
    const month = d.getMonth() + 1;
    const year = d.getFullYear().toString().slice(-2);
    return `${month < 10 ? "0" + month : month}/${year}`;
  };
  const formatCardNumber = (cardNumber) => {
    if (!cardNumber || typeof cardNumber !== "string") {
      return "";
    }
    const lastFour = cardNumber.slice(-4);
    const masked = cardNumber.slice(0, -4).replace(/\d/g, "*");
    return masked + lastFour;
  };

  return (
    <div className="flex gap-52">
      <div className={classes.Allcontent}>
        {!isVisible ? null : (
          <div className={classes.notification_content}>
            <h4 className={classes.notification_text}>
              Your flight has been booked successfully! Your confirmation number
              is #381029404387
            </h4>
            <button onClick={handelHide}>
              <Image src={closeIcon} alt="closeIcon" width={32} height={32} />
            </button>
          </div>
        )}
        <h1 className={classes.textName}>
          Bon voyage, {passengerForm[0]?.first_name}!
        </h1>
        <h4 className={classes.Confirmation_num}>
          Confirmation number: #381029404387
        </h4>
        <p className={classes.description}>
          Thank you for booking your travel with Tripma! Below is a summary of
          your trip to Narita airport in Tokyo, Japan. We’ve sent a copy of your
          booking confirmation to your email address. You can also find this
          page again in My trips.
        </p>

        <h1 className={classes.title}>Flight summary</h1>
        <h4 className={classes.Confirmation_num}>
          Departing {formatedDate(startWithoutFormat)}
        </h4>
        {selectflight?.length > 0 && (
          <div>
            {selectflight.map((flight, index) => (
              <>
                <div className={classes.flightDetails}>
                  <Image
                    src={flight.img}
                    alt="Flight1"
                    width={40}
                    height={40}
                  />
                  <div className="text-start">
                    <h4 className={classes.test_contentUp}>
                      {flight.duration}
                    </h4>
                    <h4 className={classes.test_content}>
                      {flight.airline_name}
                    </h4>
                  </div>
                  <div>
                    <h1 className={classes.test_contentUp}>
                      {flight.departure_time} - {flight.return_time}
                    </h1>
                    <h4 className={classes.test_content}>value</h4>
                  </div>
                  <div className="text-end">
                    <h4 className={classes.test_contentUp}>
                      {flight.stop_number} stop
                    </h4>
                    <h4 className={classes.test_content}>
                      {flight.stop_duration} in {flight.stop_place}
                    </h4>
                  </div>
                  <div className="text-end">
                    <h4 className={classes.test_contentUp}>
                      ${flight.round_trip_price}
                    </h4>
                    <h4 className={classes.test_content}>
                      {tripType === "one_way" ? "one trip" : "round trip"}
                    </h4>
                  </div>
                </div>
                {index < selectflight?.length - 1 && (
                  <>
                    <div>
                      {departSeats.map((seats, index) => (
                        <h4 className={classes.description} key={seats[0]}>
                          Seat {seats} ( {departTypeSeat}, window ),
                          <span> {passengerForm[index]?.selectBags}</span>{" "}
                          checked bag
                        </h4>
                      ))}
                    </div>
                    <h4 className={classes.Confirmation_num}>
                      Arriving{formatedDate(endtWithoutFormat)}
                    </h4>
                  </>
                )}
                {selectflight?.length === 1 && (
                  <>
                    <div>
                      {departSeats.map((seats, index) => (
                        <h4 className={classes.description} key={seats[0]}>
                          Seat {seats} ( {departTypeSeat}, window ),
                          <span> {passengerForm[index]?.selectBags}</span>{" "}
                          checked bag
                        </h4>
                      ))}
                    </div>
                    <h4 className={classes.Confirmation_num}>
                      Arriving{formatedDate(endtWithoutFormat)}
                    </h4>
                  </>
                )}
              </>
            ))}
          </div>
        )}
        <div>
          {arrivalSeat?.length > 0 && (
            <>
              {arrivalSeat.map((seats, index) => (
                <h4 className={classes.description} key={seats[0]}>
                  Seat {seats} ( {typeseat}, window ),
                  <span> {passengerForm[index]?.selectBags}</span> checked bag
                </h4>
              ))}
            </>
          )}
        </div>
        <div className="mt-10  w-96">
          <h1 className={classes.title}>Price breakdown</h1>
          <div className="flex justify-between">
            <h4 className={classes.price_details}>Departing Flight</h4>
            <h4 className={classes.price_details}>
              ${selectflight[0]?.round_trip_price / 2}
            </h4>
          </div>
          <div className="flex justify-between">
            <h4 className={classes.price_details}>Arriving Flight</h4>
            <h4 className={classes.price_details}>
              $
              {tripType === "one_way"
                ? 0
                : selectflight[1]?.round_trip_price / 2}
            </h4>
          </div>
          <div className="flex justify-between">
            <h4 className={classes.price_details}>Baggage fees</h4>
            <h4 className={classes.price_details}>$0</h4>
          </div>
          <div className="flex justify-between">
            <h4 className={classes.price_details}>Seat upgrade (business)</h4>
            <h4 className={classes.price_details}>${upgradePrice}</h4>
          </div>
          <div className="flex justify-between">
            <h4 className={classes.price_details}>Subtotal</h4>
            <h4 className={classes.price_details}>
              $
              {tripType === "one_way"
                ? Number(selectflight[0]?.round_trip_price / 2) + upgradePrice
                : Number(selectflight[0]?.round_trip_price / 2) +
                  Number(selectflight[1]?.round_trip_price / 2) +
                  upgradePrice}
            </h4>
          </div>
          <div className="flex justify-between">
            <h4 className={classes.price_details}>Taxes (9.4%)</h4>
            <h4 className={classes.price_details}>$66</h4>
          </div>
          <div className={classes.totalPrice}>
            <h4 className={classes.totalPriceText}>Amount paid</h4>
            <h4 className={classes.totalPriceText}>
              $
              {tripType === "one_way"
                ? Number(selectflight[0]?.round_trip_price / 2) +
                  66 +
                  upgradePrice
                : Number(selectflight[0]?.round_trip_price / 2) +
                  Number(selectflight[1]?.round_trip_price / 2) +
                  upgradePrice +
                  66}
            </h4>
          </div>
        </div>
        <div className="mt-6">
          <h1 className={classes.title}>Payment method</h1>
          <div className={classes.visa_content}>
            <Image
              src={Visa}
              alt="Visa"
              width={76}
              height={24}
              className="mt-2"
            />
            <div className="mt-16">
              <h2>Sophia Knowles</h2>
              <div className="flex justify-between mt-1">
                <h4>{formatCardNumber(cardForm.cardNumber)}</h4>
                <h4>{formatDate(cardForm.date)}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <h1 className={classes.title}>Share your travel itinerary</h1>
          <p className={classes.description}>
            You can email your itinerary to anyone by entering their email
            address here.
          </p>
          <form>
            <div>
              <input
                type="email"
                placeholder="Email address"
                className={classes.input_field}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                className={classes.input_field}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                className={classes.input_field}
              />
            </div>
            <div className="flex gap-2">
              <button className={classes.Button}>
                <h4 className={classes.textButton}>Email itinerary</h4>
              </button>
              <button className={classes.addAnotherButton}>
                <h4 className={classes.textButton2}>Add another</h4>
              </button>
            </div>
          </form>
          <div className="mt-10">
            <h1 className={classes.title}>Flight Route</h1>
            <div className={classes.map}>
              <Image
                src={Map2}
                alt="Map"
                width={0}
                height={0}
                className={classes.image}
              />
              <Image
                src={Map}
                alt="Map"
                width={0}
                height={0}
                className={classes.image}
              />
              <div className={classes.map_details}>
                <div>
                  <div className={classes.map_divider1}></div>
                  <h1 className={classes.map_text}>{to}</h1>
                </div>
                <div>
                  <div className={classes.map_divider2}></div>
                  <h1 className={classes.map_text}>{from}</h1>
                </div>
              </div>
              <div className={classes.flightIconMap}>
                <Image
                  src={flightIcon}
                  alt="flightIcon"
                  width={24}
                  height={26}
                />
              </div>
              <div className={classes.mapdivider3}>
                <Image src={lineMap} alt="flightIcon" width={233} height={23} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside className={classes.aside}>
        <div>
          <h1 className={classes.title}>
            Shop <span className={classes.title_span}>hotels</span>
          </h1>
          <p className={classes.description}>
            Tripma partners with thousands of hotels to get you the best deal.
            Save up to 30% when you add a hotel to your trip.
          </p>
          <div className={classes.card_section}>
            <div className="">
              <div className={classes.card_content}>
                <Image
                  src={Hotel_image}
                  alt="hotel_image"
                  width={0}
                  height={0}
                  className={classes.image}
                />
                <div className={classes.text_content}>
                  <div className="flex justify-between">
                    <h4 className={classes.card_header_h4}>
                      Shanghai,
                      <span className={classes.card_header_span}> China</span>
                    </h4>
                    <h4 className={classes.card_header_h4}>$598</h4>
                  </div>
                  <p className={classes.card_p}>
                    An international city rich in culture
                  </p>
                </div>
              </div>
              <div className={classes.card_content}>
                <Image
                  src={Hotel_image2}
                  alt="hotel_image"
                  width={0}
                  height={0}
                  className={classes.image}
                />
                <div className={classes.text_content}>
                  <div className="flex justify-between">
                    <h4 className={classes.card_header_h4}>
                      Nairobi,
                      <span className={classes.card_header_span}> Kenya</span>
                    </h4>
                    <h4 className={classes.card_header_h4}>$1,248</h4>
                  </div>
                  <p className={classes.card_p}>
                    Dubbed the Safari Capital of the World
                  </p>
                </div>
              </div>
              <div className={classes.card_content}>
                <Image
                  src={Hotel_image3}
                  alt="hotel_image"
                  width={0}
                  height={0}
                  className={classes.image}
                />
                <div className={classes.text_content}>
                  <div className="flex justify-between">
                    <h4 className={classes.card_header_h4}>
                      Seoul,
                      <span className={classes.card_header_span}>
                        South Korea
                      </span>
                    </h4>
                    <h4 className={classes.card_header_h4}>$589</h4>
                  </div>
                  <p className={classes.card_p}>
                    This modern city is a traveler’s dream
                  </p>
                </div>
              </div>
              <div className={classes.card_content}>
                <Image
                  src={Hotel_image4}
                  alt="hotel_image"
                  width={0}
                  height={0}
                  className={classes.image}
                />
                <div className={classes.text_content}>
                  <div className="flex justify-between">
                    <h4 className={classes.card_header_h4}>
                      Seoul,
                      <span className={classes.card_header_span}>
                        South Korea
                      </span>
                    </h4>
                    <h4 className={classes.card_header_h4}>$589</h4>
                  </div>
                  <p className={classes.card_p}>
                    This modern city is a traveler’s dream
                  </p>
                </div>
              </div>
              <div className={classes.content_button}>
                <Link href={"/Hotels"}>
                  <button className={classes.ShowAllHotelsbutton}>
                    Shop all hotels
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className={classes.title}>
            Find unique <span className={classes.title_span}>experiences</span>
          </h1>
          <p className={classes.description}>
            Find events and authentic cultrual experiences available exclusively
            to Tripma users.
          </p>
          <div className={classes.card_section}>
            <div className="">
              <div className={classes.card_content}>
                <Image
                  src={experience_image5}
                  alt="hotel_image"
                  width={0}
                  height={0}
                  className={classes.image}
                />
                <div className={classes.text_content}>
                  <div className="flex justify-between">
                    <h4 className={classes.card_header_h4}>Nihon Kimono</h4>
                    <h4 className={classes.card_header_h4}>$89</h4>
                  </div>
                  <p className={classes.card_p}>
                    Wear the national dress of Japan around the city
                  </p>
                </div>
              </div>
              <div className={classes.card_content}>
                <Image
                  src={experience_image6}
                  alt="hotel_image"
                  width={0}
                  height={0}
                  className={classes.image}
                />
                <div className={classes.text_content}>
                  <div className="flex justify-between">
                    <h4 className={classes.card_header_h4}>
                      teamLab Borderless
                    </h4>
                    <h4 className={classes.card_header_h4}>$39</h4>
                  </div>
                  <p className={classes.card_p}>
                    A modern sensory experience of light and sound
                  </p>
                </div>
              </div>

              <div className={classes.content_button}>
                <button className={classes.ShowAllHotelsbutton}>
                  View all experiences
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Page;
