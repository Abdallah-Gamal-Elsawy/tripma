"use client";
import Image from "next/image";
import menuIcon from "../../public/icons/menu.svg";
import logo from "../../public/logo.svg";
import classes from "./arrivalseats.module.css";
import arrowRightIcon from "../../public/arrowRight.svg";
import ecoSeatsImage from "../../public/flight_image/Economy Seats.svg";
import businessSeatsImage from "../../public/flight_image/Business Seats.svg";
import CheckBusiness from "../../public/flight_image/check heavy.svg";
import flightShape2 from "../../public/flight_image/Rectangle 15.svg";
import flightShape7 from "../../public/flight_image/Rectangle 15.svg";
import flightShape from "../../public/flight_image/Rectangle 9 .svg";
import flightShape3 from "../../public/flight_image/Rectangle 11.svg";
import flightShape4 from "../../public/flight_image/Rectangle 12.svg";
import flightShape5 from "../../public/flight_image/Vector 17.svg";
import flightShape6 from "../../public/flight_image/Vector 18.svg";
import RowInfo from "../../public/flight_image/information.svg";
import trueImage from "../../public/icons/true.svg";
import Link from "next/link";
import { useState, useEffect } from "react";
import rows from "../../lip/seats";
import { useDataContext } from "../DataContext";
import { useRouter } from "next/navigation";

function Page() {
  const { data, setData } = useDataContext();
  const {
    from = "",
    to = "",
    selectflight = [],
    adults = 0,
    startDate,
    endDate,
  } = data;
  const [selectSeats, setSelectSeats] = useState([]);
  const [pendingSeats, setPendingSeats] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [typeseat, setTypeSeate] = useState([]);
  const [upgradePrice, setUpgradePrice] = useState(0);
  const { seats, setSeats } = useDataContext();
  const { departTypeSeat = [] } = seats || {};
  useEffect(() => {
    if (!seats || Object.keys(seats).length === 0) {
      const storedData = JSON.parse(sessionStorage.getItem("seats"));
      if (storedData) setSeats(storedData);
    }
  }, [seats, setSeats]);
  useEffect(() => {
    if (!data || Object.keys(data).length === 0) {
      const storedData = JSON.parse(sessionStorage.getItem("flightData"));
      if (storedData) setData(storedData);
    }
  }, [data, setData]);
  const handelSeatClick = (seat, type, isReserved) => {
    if (isReserved) {
      return;
    }
    const isDifferentType = selectSeats.some(
      (selected) =>
        rows.find((row) => row.seats.some((s) => s.id === selected)).type !==
        type
    );
    if (isDifferentType) {
      setPendingSeats({ seat: seat.id, type });
      setShowConfirmation(true);
    } else {
      toggleSeatSelection(seat.id);
    }
    if (type === "business") {
      setTypeSeate("business");
    } else {
      setTypeSeate("economy");
    }
  };
  const toggleSeatSelection = (seatId) => {
    if (selectSeats.includes(seatId)) {
      setSelectSeats(selectSeats.filter((s) => s !== seatId));
    } else {
      if (selectSeats.length >= adults) {
        alert(`You can only select ${adults}`);
        return;
      }
      setSelectSeats([...selectSeats, seatId]);
    }
  };
  const confirmation = () => {
    if (pendingSeats) {
      setSelectSeats([pendingSeats.seat]);
      setPendingSeats(null);
      setUpgradePrice(199);
    }
    setShowConfirmation(false);
  };
  const cancelation = () => {
    setPendingSeats(null);
    setShowConfirmation(false);
  };
  const { setArrivalSeats } = useDataContext();
  const router = useRouter();
  const arrivalSeats = {
    arrivalSeat: selectSeats,
    typeseat: typeseat,
    upgradePrice: upgradePrice,
  };
  const handelArrivalSeats = () => {
    setArrivalSeats(arrivalSeats);
    sessionStorage.setItem("ArrivalSeats", JSON.stringify(arrivalSeats));
    router.push("/payment");
  };
  const handelSeatsAndSaveOnly = () => {
    setArrivalSeats(arrivalSeats);
    sessionStorage.setItem("ArrivalSeats", JSON.stringify(arrivalSeats));
    router.push("/");
  };
  const { passengerForm, setpassengerForm } = useDataContext();
  useEffect(() => {
    if (!passengerForm || Object.keys(passengerForm).length === 0) {
      const storedData = JSON.parse(sessionStorage.getItem("PassengerForm"));
      if (storedData) setpassengerForm(storedData);
    }
  }, [passengerForm, setpassengerForm]);

  return (
    <div className={classes.content}>
      <div className="pt-5 pl-4">
        <div className="flex gap-3 fixed z-10">
          <Image src={menuIcon} alt="menuIcon" width={32} height={32} />
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={107} height={30} />
          </Link>
        </div>
        <div className={classes.windowImage}>
          <Image
            src={flightShape5}
            alt=""
            width={57}
            height={44.5}
            className=""
          />
          <Image
            src={flightShape6}
            alt=""
            width={57}
            height={44.5}
            className=""
          />
        </div>
        <div>
          <Image
            src={flightShape}
            alt="FlightShape"
            width={2124}
            height={3095.5}
            className={classes.image1}
          />
          <div className="">
            <Image
              src={flightShape2}
              alt="FlightShape"
              width={180}
              height={1900.5}
              className={classes.image3}
            />
          </div>
          <div className={classes.image2}>
            <Image
              src={flightShape4}
              alt="FlightShape"
              width={150}
              height={360}
            />
            <Image
              src={flightShape3}
              alt="FlightShape"
              width={150}
              height={360}
            />
          </div>
          <div className={classes.business_content}>
            {rows
              .filter((row) => row.type === "business")
              .map((row, rowIndex) => (
                <>
                  <div key={rowIndex} className="flex p-2 items-center gap-2">
                    {row.seats
                      .slice(0, row.seats.length / 2)
                      .map((seat, seatIndex) => (
                        <div
                          key={seat.id}
                          style={{
                            width: "30px",
                            height: "40px",
                            display: "inline-block",
                            margin: "5px 0px 0px 0px",
                            borderRadius: "4px",
                            backgroundColor:
                              seat.isReserved && row.type == "business"
                                ? "#5CD6C0"
                                : seat.isReserved && row.type == "economy"
                                ? "#605DEC"
                                : selectSeats.includes(seat.id)
                                ? "#EB568C"
                                : "#E9E8FC",

                            cursor: seat.isReserved ? "not-allowed" : "pointer",
                          }}
                          onClick={() =>
                            handelSeatClick(seat, row.type, seat.isReserved)
                          }
                        >
                          {selectSeats.includes(seat.id) && (
                            <div className="place-items-center">
                              <Image
                                src={trueImage}
                                alt="trueImage"
                                width={20}
                                height={20}
                                className="mt-3"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    <div className={classes.row_Num}>{row.rowNumber}</div>
                    {row.seats
                      .slice(row.seats.length / 2)
                      .map((seat, seatIndex) => (
                        <div
                          key={seat.id}
                          style={{
                            width: "30px",
                            height: "40px",
                            display: "inline-block",
                            margin: "2px 0px 0px 0px",
                            borderRadius: "4px",
                            backgroundColor:
                              seat.isReserved && row.type == "business"
                                ? "#5CD6C0"
                                : seat.isReserved && row.type == "economy"
                                ? "#605DEC"
                                : selectSeats.includes(seat.id)
                                ? "#EB568C"
                                : "#E9E8FC",
                            cursor: seat.isReserved ? "not-allowed" : "pointer",
                          }}
                          onClick={() =>
                            handelSeatClick(seat, row.type, seat.isReserved)
                          }
                        >
                          {selectSeats.includes(seat.id) && (
                            <div className="place-items-center">
                              <Image
                                src={trueImage}
                                alt="trueImage"
                                width={20}
                                height={20}
                                className="mt-3"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </>
              ))}
          </div>
          <div className={classes.eco_content}>
            <div className="flex  items-center gap-2 mt-2 ml-2">
              <Image src={RowInfo} alt="RowInfo" width={18} height={18} />
              <h1 className={classes.row_Num}>Exit row</h1>
            </div>
            {rows
              .filter((row) => row.type === "economy")
              .map((row, rowIndex) => (
                <>
                  <div className="flex  items-center justify-around">
                    <div key={rowIndex}>
                      {row.seats
                        .slice(0, row.seats.length / 2)
                        .map((seat, seatIndex) => (
                          <div
                            key={seat.id}
                            style={{
                              width: "22px",
                              height: "32px",
                              display: "inline-block",
                              margin: "8px 0px 0px 3px",
                              borderRadius: "4px",
                              backgroundColor: seat.isReserved
                                ? "#605DEC"
                                : selectSeats.includes(seat.id)
                                ? "#EB568C"
                                : "#E9E8FC",
                              cursor: seat.isReserved
                                ? "not-allowed"
                                : "pointer",
                            }}
                            onClick={() =>
                              handelSeatClick(seat, row.type, seat.isReserved)
                            }
                          >
                            {selectSeats.includes(seat.id) && (
                              <div className="place-items-center">
                                <Image
                                  src={trueImage}
                                  alt="trueImage"
                                  width={20}
                                  height={20}
                                  className="mt-3"
                                />
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                    <div className={classes.row_Num}>{row.rowNumber}</div>
                    <div key={rowIndex}>
                      {row.seats
                        .slice(row.seats.length / 2)
                        .map((seat, seatIndex) => (
                          <div
                            key={seat.id}
                            style={{
                              width: "22px",
                              height: "32px",
                              display: "inline-block",
                              margin: "8px 2px 0px 1px",
                              borderRadius: "4px",
                              backgroundColor: seat.isReserved
                                ? "#605DEC"
                                : selectSeats.includes(seat.id)
                                ? "#EB568C"
                                : "#E9E8FC",
                              cursor: seat.isReserved
                                ? "not-allowed"
                                : "pointer",
                            }}
                            onClick={() =>
                              handelSeatClick(seat, row.type, seat.isReserved)
                            }
                          >
                            {selectSeats.includes(seat.id) && (
                              <div className="place-items-center">
                                <Image
                                  src={trueImage}
                                  alt="trueImage"
                                  width={20}
                                  height={20}
                                  className="mt-3"
                                />
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                  {(rowIndex + 1) % 6 === 0 && (
                    <div className=" flex gap-2 mt-2 ml-2">
                      <Image src={RowInfo} alt="" width={18} height={18} />
                      <h1 className={classes.row_Num}>Exit row</h1>
                    </div>
                  )}
                </>
              ))}
          </div>
        </div>
      </div>
      <aside className={classes.aside}>
        <header className={classes.header}>
          <div className="flex ml-10 gap-4 justify-around ">
            <div>
              <h1 className={classes.country_title}>{from}</h1>
              <h4 className={classes.country_text}>
                {selectflight[1]?.city}, {selectflight[1]?.country}
              </h4>
            </div>
            <Image
              src={arrowRightIcon}
              alt=""
              width={32}
              height={32}
              className="text-white"
            />
            <div>
              <h1 className={classes.country_title}>{to}</h1>
              <h4 className={classes.country_text}>
                {selectflight[1]?.to_city}, {selectflight[1]?.to_country}
              </h4>
            </div>
          </div>

          <div className={classes.header_Divider}></div>
          <div>
            <h1 className={classes.date}>
              {startDate} | {selectflight[1]?.departure_time}
            </h1>
            <h4 className={classes.country_text}>Departing</h4>
          </div>
          <div className={classes.header_arriving}>
            <h1 className={classes.date}>
              {endDate} | {selectflight[1]?.return_time}
            </h1>
            <h4 className={classes.country_text}>Arriving</h4>
          </div>
        </header>
        <section className={classes.section}>
          <div>
            <Image
              src={ecoSeatsImage}
              alt="ecoSeats"
              width={320}
              height={180}
            />
            <div className={classes.Seats_content}>
              <div className="flex gap-4 ml-2 items-end">
                <h4 className={classes.ecoSeats_text}>Economy</h4>
                {departTypeSeat === "economy" && (
                  <label className={classes.label_Ecoselected}>Selected</label>
                )}
              </div>
              <p className={classes.paragraph}>
                Rest and recharge during your flight with extended leg room,
                personalized service, and a multi-course meal service
              </p>
              <div className={classes.divider}></div>
              <div className="flex items-center gap-3 ml-3 mt-6 mb-6">
                <div className={classes.circle}></div>
                <h3 className={classes.li}>Built-in entertainment system</h3>
              </div>
              <div className="flex items-center gap-3 ml-3 mt-3 mb-6">
                <div className={classes.circle}></div>
                <h3 className={classes.li}>Complimentary snacks and drinks</h3>
              </div>
              <div className="flex items-center gap-3 ml-3 mt-3 mb-6">
                <div className={classes.circle}></div>
                <h3 className={classes.li}>
                  One free carry-on and personal item
                </h3>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={businessSeatsImage}
              alt="ecoSeats"
              width={320}
              height={180}
            />
            <div className={classes.Seats_content}>
              <div className="flex gap-4 ml-2 items-end">
                <h4 className={classes.ecoSeats_text}>Business class</h4>
                {departTypeSeat === "business" && (
                  <label className={classes.label_BusinessSelected}>
                    Selected
                  </label>
                )}
              </div>
              <p className={classes.paragraph}>
                Rest and recharge during your flight with extended leg room,
                personalized service, and a multi-course meal service
              </p>
              <div className={classes.divider2}></div>
              <div className="flex items-center gap-3 ml-1 mt-6 mb-6">
                <Image
                  src={CheckBusiness}
                  alt="ecoSeats"
                  width={24}
                  height={24}
                />
                <h3 className={classes.li}>Extended leg room</h3>
              </div>
              <div className="flex items-center gap-3 ml-1 mt-3 mb-6">
                <Image
                  src={CheckBusiness}
                  alt="ecoSeats"
                  width={24}
                  height={24}
                />
                <h3 className={classes.li}>First two checked bags free</h3>
              </div>
              <div className="flex items-center gap-3 ml-1 mt-3 mb-6">
                <Image
                  src={CheckBusiness}
                  alt="ecoSeats"
                  width={24}
                  height={24}
                />
                <h3 className={classes.li}>Priority boarding</h3>
              </div>
              <div className="flex items-center gap-3 ml-1 mt-3 mb-6">
                <Image
                  src={CheckBusiness}
                  alt="ecoSeats"
                  width={24}
                  height={24}
                />
                <h3 className={classes.li}>Personalized service</h3>
              </div>
              <div className="flex items-center gap-3 ml-1 mt-3 mb-6">
                <Image
                  src={CheckBusiness}
                  alt="ecoSeats"
                  width={24}
                  height={24}
                />
                <h3 className={classes.li}>Enhanced food and drink service</h3>
              </div>
              <div className="flex items-center gap-3 ml-1 mt-3">
                <Image
                  src={CheckBusiness}
                  alt="ecoSeats"
                  width={24}
                  height={24}
                />
                <h3 className={classes.li}>
                  Seats that recline 40% more than economy
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className={classes.section2}>
          <div className={classes.section2_content}>
            <div>
              <h4 className={classes.passenger_title}>Passenger 1</h4>
              <h2 className={classes.passenger_text}>
                {passengerForm[0]?.first_name} {passengerForm[0]?.last_name}
              </h2>
            </div>
            <div>
              <h4 className={classes.passenger_title}>Seat number</h4>
              <h2 className={classes.passenger_text}>
                <ul className="flex gap-1">
                  {selectSeats == "" ? <h1>--</h1> : selectSeats.join(" ")}
                </ul>
              </h2>
            </div>
            <button
              className={classes.Save_Close}
              onClick={handelSeatsAndSaveOnly}
              style={{
                cursor:
                  selectSeats.length >= adults ? "pointer" : "not-allowed",
              }}
            >
              Save and close
            </button>
            <Link href={"/payment"}>
              <button
                className={classes.Select_seats}
                onClick={handelArrivalSeats}
                style={{
                  cursor:
                    selectSeats.length >= adults ? "pointer" : "not-allowed",
                  backgroundColor:
                    selectSeats.length >= adults ? "#605dec" : "",
                  color: selectSeats.length >= adults ? "#fff" : "",
                  width: selectSeats.length >= adults ? "163px" : "",
                }}
              >
                {selectSeats.length >= adults
                  ? "Payment method"
                  : "Next flight"}
              </button>
            </Link>
          </div>
        </section>
        {showConfirmation && (
          <div className={classes.popUp}>
            <div className={classes.popUp_content}>
              <h1 className={classes.popUpTitle}>Upgrade seat</h1>
              <p className={classes.popUpParagraph}>
                Upgrade your seat for only $199, and enjoy 45 percent more leg
                room, and seats that recline 40 percent more than economy.
              </p>
              <div className="flex mt-8 place-content-end gap-5">
                <button onClick={cancelation} className={classes.CancelButton}>
                  Cancel
                </button>
                <button
                  onClick={confirmation}
                  className={classes.Confirmbutton}
                >
                  Upgrade for $199
                </button>
              </div>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}

export default Page;
