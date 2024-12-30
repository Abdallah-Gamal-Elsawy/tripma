"use client";
import Image from "next/image";
import Map from "../../public/country_image/Map.svg";
import Map2 from "../../public/country_image/Map1.svg";
import flightIcon from "../../public/icons/flightIcon.svg";
import lineMap from "../../public/icons/line.svg";
import PriceGrid from "../../public/Price Grid.svg";
import PriceHistory from "../../public/Price History.svg";
import Hotel_image4 from "../../public/hotel_image/image4.png";
import Hotel_image5 from "../../public/hotel_image/image5.png";
import Hotel_image6 from "../../public/hotel_image/image6.png";
import Hotel_image7 from "../../public/hotel_image/image7.png";
import Hotel_image8 from "../../public/hotel_image/image8.png";
import Hotel_image9 from "../../public/hotel_image/image9.png";
import classes from "./page.module.css";
import DoneSearch from "@/components/Done Search/DoneSearch";
import ArrowRight from "../../public/icons/arrowRight.svg";
import { useState } from "react";
import { flights } from "@/lip/flights";
import { useRouter, useSearchParams } from "next/navigation";
import { useDataContext } from "../DataContext";

function Page() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const startWithoutFormat = searchParams.get("start");
  const endtWithoutFormat = searchParams.get("end");
  const roundTripDate = searchParams.get("dateRange");
  const oneWayDate = searchParams.get("onWayDate");
  const adults = searchParams.get("adults");
  const tripType = searchParams.get("tripType");
  const [selectflight, setSelectFlight] = useState([]);
  const [allFlights, setAllFlights] = useState(false);
  const router = useRouter();
  const { setData } = useDataContext();
  const data = {
    from: from,
    to: to,
    roundTripDate: roundTripDate,
    oneWayDate: oneWayDate,
    adults: adults,
    tripType: tripType,
    selectflight: selectflight,
    startDate: startDate,
    endDate: endDate,
    startWithoutFormat: startWithoutFormat,
    endtWithoutFormat: endtWithoutFormat,
  };
  const handelPassengerInfoClic = () => {
    setData(data);
    sessionStorage.setItem("flightData", JSON.stringify(data));
    router.push("/passenger");
  };
  const handleSaveAndClose = () => {
    setData(data);
    sessionStorage.setItem("flightData", JSON.stringify(data));
    router.push("/");
  };
  const [price, setPrice] = useState("");
  const [airline_name, setAirLine_Name] = useState("");
  const [seatClass, setSeatClass] = useState("");
  const filterFlights = flights.filter((flight) => {
    const matchesPrice = price ? flight.round_trip_price <= price : true;
    const matchesAirlines = airline_name
      ? flight.airline_name === airline_name
      : true;
    const matchesSeatClass = seatClass ? flight.trip_seat === seatClass : true;
    return (
      flight.from == from &&
      flight.to == to &&
      (flight.dateRange == roundTripDate || flight.oneWayDate) &&
      flight.available_seats >= adults &&
      matchesPrice &&
      matchesAirlines &&
      matchesSeatClass
    );
  });

  const filterFlightsOption = flights.filter((flight) => {
    const matchesPrice = price ? flight.round_trip_price <= price : true;
    const matchesAirlines = airline_name
      ? flight.airline_name === airline_name
      : true;
    const matchesSeatClass = seatClass ? flight.trip_seat === seatClass : true;
    return matchesPrice && matchesAirlines && matchesSeatClass;
  });
  const handelSelectFlight = (flight) => {
    if (tripType === "round_trip" && selectflight.length < 2) {
      setSelectFlight([...selectflight, flight]);
    } else if (tripType === "one_way" && selectflight < 1) {
      setSelectFlight([...selectflight, flight]);
    }
  };

  const handelShowAllFlights = () => {
    setAllFlights(!allFlights);
  };
  const maxPrice = [100, 200, 650, 1000];
  const airlines = ["Hawaiian Airlines", "Japan Airlines", "Delta Airlines"];
  return (
    <>
      <div className={classes.content}>
        <div className={classes.search_content}>
          <DoneSearch
            from={from}
            to={to}
            roundTripDate={roundTripDate}
            oneWayDate={oneWayDate}
            adults={adults}
          />
        </div>
        <div className={classes.content_options}>
          <select
            name="Max price"
            id=""
            className={classes.option}
            onChange={(e) => setPrice(Number(e.target.value))}
          >
            <option value="Max Price" selected disabled>
              Max Price
            </option>
            {maxPrice.map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </select>
          <select name="Shops" id="" className={classes.option}>
            <option value="Shops">Shops</option>
          </select>
          <select name="Times" id="" className={classes.option}>
            <option value="Times">Times</option>
          </select>
          <select
            name="Airlines"
            id=""
            className={classes.option}
            onChange={(e) => setAirLine_Name(e.target.value)}
          >
            <option value="Airlines" selected>
              Airlines
            </option>
            {airlines.map((airlines) => (
              <option key={airlines} value={airlines}>
                {airlines}
              </option>
            ))}
          </select>
          <select name="Seat class" id="" className={classes.option} onChange={(e) => setSeatClass(e.target.value)}>
            <option value="Seat class" selected disabled>
              Seat class
            </option>
            <option value="Business">Business</option>
            <option value="Economy">Economy</option>
          </select>
          <select name="More" id="" className={classes.option}>
            <option value="More">More</option>
          </select>
        </div>

        <div className={classes.section_content}>
          <div>
            <h4 className={classes.text}>
              Choose a <span className={classes.span}>departing</span> flight
            </h4>
            <div className={classes.flight_content}>
              <div>
                {allFlights === true ? (
                  flights.map((flight) => (
                    <>
                      <button
                        key={flight.id}
                        className={classes.flightButton}
                        onClick={() => handelSelectFlight(flight)}
                      >
                        <div className="flex justify-around items-start place-items-start mt-4 mb-4">
                          <Image
                            src={flight.img}
                            alt="Flight000"
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
                          <h1 className={classes.test_contentUp}>
                            {flight.departure_time} - {flight.return_time}
                          </h1>
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
                            <h4 className={classes.test_content}>round trip</h4>
                          </div>
                        </div>
                      </button>
                      <div className={classes.divider}></div>
                    </>
                  )) &&
                  filterFlightsOption.map((flight) => (
                    <>
                      <button
                        key={flight.id}
                        className={classes.flightButton}
                        onClick={() => handelSelectFlight(flight)}
                      >
                        <div
                          key={flight.id}
                          className="flex justify-around items-start place-items-start mt-4 mb-4"
                        >
                          <Image
                            src={flight.img}
                            alt="Flight000"
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
                          <h1 className={classes.test_contentUp}>
                            {flight.departure_time} - {flight.return_time}
                          </h1>
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
                            <h4 className={classes.test_content}>round trip</h4>
                          </div>
                        </div>
                      </button>
                      <div className={classes.divider}></div>
                    </>
                  ))
                ) : filterFlights.length > 0 ? (
                  filterFlights.map((flight) => (
                    <>
                      <button
                        key={flight.id}
                        className={classes.flightButton}
                        onClick={() => handelSelectFlight(flight)}
                      >
                        <div
                          key={flight.id}
                          className="flex justify-around items-start place-items-start mt-4 mb-4"
                        >
                          <Image
                            src={flight.img}
                            alt="Flight000"
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
                          <h1 className={classes.test_contentUp}>
                            {flight.departure_time} - {flight.return_time}
                          </h1>
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
                            <h4 className={classes.test_content}>round trip</h4>
                          </div>
                        </div>
                      </button>
                      <div className={classes.divider}></div>
                    </>
                  ))
                ) : (
                  <div className={classes.noFlights}>
                    <p>no flights</p>
                  </div>
                )}
              </div>
            </div>
            <div className={classes.content_button}>
              <button
                className={classes.ShowAllFlightbutton}
                onClick={handelShowAllFlights}
              >
                {allFlights ? "Only search results" : "Show all flights"}
              </button>
            </div>
            <div className={classes.map}>
              <Image src={Map2} alt="Map" width={0} height={0} />
              <Image src={Map} alt="Map" width={0} height={0} />
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
          <aside>
            {selectflight.length > 0 ? (
              <div className="place-items-end">
                {selectflight.map((selectflight) => (
                  <aside key={selectflight.id} className={classes.aside}>
                    <div className="">
                      <div className={classes.booking_Content}>
                        <div className="flex items-center gap-2">
                          <Image
                            src={selectflight.img}
                            alt="Flight1"
                            width={40}
                            height={40}
                          />
                          <div>
                            <h4 className={classes.text_Booking}>
                              {selectflight.airline_name}
                            </h4>
                            <h4 className={classes.Flight_details}>
                              {selectflight.flight_number}
                            </h4>
                          </div>
                        </div>
                        <div className="text-end">
                          <h4 className={classes.text_Booking}>
                            {selectflight.duration} (+1d)
                          </h4>
                          <h4 className={classes.text_Booking}>
                            {selectflight.departure_time} -{" "}
                            {selectflight.return_time}
                          </h4>
                          <h4 className={classes.Flight_details}>
                            {selectflight.stop_duration} in{" "}
                            {selectflight.stop_place}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </aside>
                ))}
                <div className={classes.price}>
                  <div className={classes.price_details}>
                    <h4 className={classes.price_text}>Subtotal</h4>
                    <h4 className={classes.price_text}>
                      $
                      {selectflight.length === 1
                        ? Number(selectflight[0].round_trip_price)
                        : Number(selectflight[0].round_trip_price) +
                          Number(selectflight[1].round_trip_price)}
                    </h4>
                  </div>
                  <div className={classes.price_details}>
                    <h4 className={classes.price_text}>Taxes and Fees</h4>
                    <h4 className={classes.price_text}>$121</h4>
                  </div>
                  <div className={classes.price_details}>
                    <h4 className={classes.price_text}>Total</h4>
                    <h4 className={classes.price_text}>
                      $
                      {selectflight.length === 1
                        ? Number(selectflight[0].round_trip_price) + 121
                        : Number(selectflight[0].round_trip_price) +
                          Number(selectflight[1].round_trip_price) +
                          121}
                    </h4>
                  </div>
                </div>
                <div className="place-items-end">
                  {selectflight.length === 1 && tripType === "one_way" ? (
                    <button
                      className={classes.Save_Close}
                      onClick={handelPassengerInfoClic}
                      style={{
                        backgroundColor: "#605dec",
                        color: "#fff",
                      }}
                    >
                      Passenger information
                    </button>
                  ) : selectflight.length === 2 && tripType === "round_trip" ? (
                    <button
                      className={classes.Save_Close}
                      onClick={handelPassengerInfoClic}
                      style={{
                        backgroundColor: "#605dec",
                        color: "#fff",
                      }}
                    >
                      Passenger information
                    </button>
                  ) : (
                    <button
                      className={classes.Save_Close}
                      onClick={handleSaveAndClose}
                    >
                      Save and close
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <aside className={classes.aside}>
                <div>
                  <h4 className={classes.text}>
                    Price grid
                    <span className={classes.text_span}> (flexible dates)</span>
                  </h4>
                  <Image
                    src={PriceGrid}
                    alt="Price Grid"
                    width={397}
                    height={397}
                  />
                </div>

                <div className="mt-24">
                  <h4 className={classes.text}>Price history</h4>
                  <Image
                    src={PriceHistory}
                    alt="Price History"
                    width={400}
                    height={200}
                  />
                </div>
                <div className="mt-28">
                  <div className="flex gap-4 items-center ">
                    <h4 className={classes.text}>Price rating</h4>
                    <div className={classes.buy_soon}>
                      <h5 className={classes.buy_soon_text}>Buy soon</h5>
                    </div>
                  </div>
                  <div>
                    <p className={classes.paragraph}>
                      We recommend booking soon. The average cost of this flight
                      is $750, but could rise 18% to $885 in two weeks.
                    </p>
                    <p className={classes.paragraph2}>
                      Tripma analyzes thousands of flights, prices, and trends
                      to ensure you get the best deal.
                    </p>
                  </div>
                </div>
              </aside>
            )}
          </aside>
        </div>
        <div className={classes.card_section}>
          <div className="flex justify-between ">
            <h3 className={classes.header_h3}>
              Find <span className={classes.header_span}>places to stay</span>{" "}
              in Japan
            </h3>
            <div className="flex gap-1">
              <h1 className={classes.seeAll}>All</h1>
              <Image
                src={ArrowRight}
                alt="ArrowRight"
                width={19.5}
                height={15}
              />
            </div>
          </div>
          <div className="grid grid-flow-col gap-12">
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
                  traitional japanese ryokan with a modern twist. Enjoy a
                  private onsen bath and a private multi-course kaiseki dinner.
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
              <div>
                <div className="px-6 py-2">
                  <h4 className={classes.card_header_h4}>
                    <span className={classes.card_header_span}>
                      {" "}
                      9 Hours Shinjuku
                    </span>
                  </h4>
                  <p className={classes.card_p}>
                    Experience a truly unique stay in an authentic Japanese
                    capsule hotel. 9 Hours Shinjuku is minutes from one of
                    Japan’s busiest train stations. Just take the NEX train from
                    Narita airport!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.card_section}>
          <div className="flex justify-between">
            <h3 className={classes.header_h3}>
              People in{" "}
              <span className={classes.header_span}>San Francisco</span> also
              searched for
            </h3>
            <div className="flex gap-1">
              <h1 className={classes.seeAll}>All</h1>
              <Image
                src={ArrowRight}
                alt="ArrowRight"
                width={19.5}
                height={15}
              />
            </div>
          </div>
          <div className="grid grid-flow-col gap-12">
            <div className={classes.card_content}>
              <Image
                src={Hotel_image7}
                alt="hotel_image"
                width={410.67}
                height={397}
                className="rounded-tl-md rounded-tr-md mb-3"
              />
              <div className="px-6 py-2">
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
                src={Hotel_image8}
                alt="hotel_image"
                width={410.67}
                height={397}
                className="rounded-tl-md rounded-tr-md mb-3"
              />
              <div className="px-6 py-2">
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
                src={Hotel_image9}
                alt="hotel_image"
                width={410.67}
                height={397}
                className="rounded-tl-md rounded-tr-md mb-3"
              />
              <div className="px-6 py-2">
                <div className="flex justify-between">
                  <h4 className={classes.card_header_h4}>
                    Seoul,
                    <span className={classes.card_header_span}>
                      {" "}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
