"use client";
import { useEffect, useState } from "react";
import classes from "./passenger.module.css";
import Image from "next/image";
import Add from "../../public/icons/Increment.svg";
import Remove from "../../public/icons/decrement.svg";
import Bags from "../../public/bag.svg";
import Link from "next/link";
import { useDataContext } from "../DataContext";
import { useRouter } from "next/navigation";

function Page() {
  const { data, setData } = useDataContext();
  const {
    from = "",
    to = "",
    roundTripDate = "",
    oneWayDate = "",
    adults = 0,
    tripType = "",
    selectflight,
  } = data || {};
  useEffect(() => {
    if (!data || Object.keys(data).length === 0) {
      const storedData = JSON.parse(sessionStorage.getItem("flightData"));
      if (storedData) setData(storedData);
    }
  }, [data, setData]);
  const [checked, setChecked] = useState(false);
  const passenger = parseInt(adults);
  const [selectBags, setSelectbags] = useState(Array(passenger)?.fill(1));
  console.log("bags", selectBags);
  const [formData, setFormData] = useState(
    Array.from({ length: adults }).map(() => ({
      first_name: "",
      last_name: "",
      date: "",
      email: "",
      phone_number: "",
      traveller_num: "",
      first_name_minor: "",
      last_name_minor: "",
      email_minor: "",
      phone_number_minor: "",
    }))
  );
  const { passengerForm, setpassengerForm } = useDataContext();

  const isFormvalid = formData?.every(
    (passenger) =>
      passenger.first_name.trim() !== "" &&
      passenger.last_name.trim() !== "" &&
      passenger.date.trim() !== "" &&
      passenger.email.trim() !== "" &&
      passenger.phone_number.trim() !== "" &&
      passenger.traveller_num.trim() !== ""
  );
  const handelInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFormData = [...formData];
    updatedFormData[index][name] = value;
    setFormData(updatedFormData);
  };

  function handelChecked() {
    setChecked(() => !checked);
  }
  function addBags(index) {
    setSelectbags((prevBags) => {
      const updateedbags = [...prevBags];
      if (updateedbags[index] !== undefined) {
        updateedbags[index] += 1;
      }
      updatedFormDataBags(index, updateedbags[index]);
      return updateedbags;
    });
  }

  function removeBags(index) {
    setSelectbags((prevBags) => {
      const updatedBags = [...prevBags];
      if (updatedBags[index] > 0) {
        updatedBags[index] = updatedBags[index] - 1;
      }
      updatedFormDataBags(index, updatedBags[index]);
      return updatedBags;
    });
  }
  function updatedFormDataBags(index, bagcount) {
    const updatedFormData = [...formData];
    if (updatedFormData[index]) {
      updatedFormData[index].selectBags = bagcount;
      setFormData(updatedFormData);
    }
  }
  const router = useRouter();
  const handelSubmit = (e) => {
    e.preventDefault();
    const updateedFormatData = formData.map((passenger, index) => ({
      ...passenger,
      selectBags: selectBags[index],
    }));
    setpassengerForm(updateedFormatData);
    sessionStorage.setItem("PassengerForm", JSON.stringify(updateedFormatData));
    router.push("/departSeats");
  };

  return (
    <div className="flex mb-36 w-full">
      <div className={classes.passengerInfo_content}>
        <h3 className={classes.text_header}>Passenger information</h3>
        <p className={classes.description}>
          Enter the required information for each traveler and be sure that it
          exactly matches the government-issued ID presented at the airport.
        </p>
        <form action="">
          {Array.from({ length: adults }).map((_, index) => (
            <>
              <div key={index}>
                <h3 className={classes.passenger_text}>
                  Passenger {index + 1} (Adult)
                </h3>
                <div className="flex gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="First name*"
                    required
                    className={classes.input_field}
                    name="first_name"
                    value={formData[index]?.first_name}
                    onChange={(e) => handelInputChange(index, e)}
                  />
                  <input
                    type="text"
                    placeholder="Middle"
                    className={classes.input_field}
                  />
                  <input
                    type="text"
                    placeholder="Last name*"
                    required
                    className={classes.input_field}
                    name="last_name"
                    value={formData[index]?.last_name}
                    onChange={(e) => handelInputChange(index, e)}
                  />
                </div>
                <div className="flex gap-4 mb-5">
                  <input
                    type="text"
                    placeholder="Suffix"
                    className={classes.input_field}
                  />
                  <div>
                    <input
                      type="date"
                      placeholder="Date of birth*"
                      required
                      name="date"
                      className={classes.input_field_date}
                      value={formData[index]?.date}
                      onChange={(e) => handelInputChange(index, e)}
                    />
                    <h4 className={classes.text_date}>MM/DD/YY</h4>
                  </div>
                </div>
                <div className="flex gap-4 mb-4">
                  <input
                    type="email"
                    placeholder="Email address*"
                    required
                    name="email"
                    className={classes.input_fields_email_phone}
                    value={formData[index]?.email}
                    onChange={(e) => handelInputChange(index, e)}
                  />
                  <input
                    type="number"
                    placeholder="Phone number*"
                    required
                    name="phone_number"
                    className={classes.input_fields_email_phone}
                    value={formData[index]?.phone_number}
                    onChange={(e) => handelInputChange(index, e)}
                  />
                </div>
                <div className="flex gap-4 mb-7">
                  <input
                    type="number"
                    placeholder="Redress number"
                    className={classes.input_fields_email_phone}
                  />
                  <input
                    type="number"
                    placeholder="Known traveller number*"
                    required
                    name="traveller_num"
                    className={classes.input_fields_email_phone}
                    value={formData[index]?.traveller_num}
                    onChange={(e) => handelInputChange(index, e)}
                  />
                </div>
              </div>
              <div>
                <h4 className={classes.bag_text}>Bag information</h4>
                <p className={classes.description}>
                  Each passenger is allowed one free carry-on bag and one
                  personal item. First checked bag for each passenger is also
                  free. Second bag check fees are waived for loyalty program
                  members. See the
                  <span className={classes.description_span}>
                    full bag policy
                  </span>
                  .
                </p>
                <div className="flex gap-44">
                  <div>
                    <h4 className={classes.passengerNum}>
                      Passenger {index + 1}
                    </h4>
                    <h4
                      className={classes.passenger_text}
                      onChange={handelInputChange}
                    >
                      {<span>{formData[index]?.first_name || "first"} </span>}
                      {formData[index]?.last_name || " last"}
                    </h4>
                  </div>
                  <div>
                    <h4 className={classes.passengerNum}>Checked bags</h4>
                    <div className="flex gap-7 mt-2">
                      <button type="button" onClick={() => removeBags(index)}>
                        <Image
                          src={Remove}
                          alt="remove"
                          width={32}
                          height={32}
                        />
                      </button>
                      <h4 className={classes.bagNum}>{selectBags[index]}</h4>
                      <button type="button" onClick={() => addBags(index)}>
                        <Image src={Add} alt="remove" width={32} height={32} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={classes.divider}></div>
            </>
          ))}

          <div>
            <h4 className={classes.emergency_text}>
              Emergency contact information
            </h4>
            <div className="flex gap-1 items-center mb-4">
              <input
                type="checkbox"
                name="same"
                value={true}
                checked={checked}
                onClick={handelChecked}
              />
              <label htmlFor="checkbox" className={classes.checkBox_text}>
                Same as Passenger 1
              </label>
            </div>
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="First name*"
                required
                name="first_name_minor"
                className={classes.input_fields_email_phone}
                value={
                  checked ? formData[0]?.first_name : formData.first_name_minor
                }
                onChange={handelInputChange}
              />
              <input
                type="text"
                placeholder="Last name*"
                required
                name="last_name_minor"
                className={classes.input_fields_email_phone}
                value={
                  checked ? formData[0]?.last_name : formData.last_name_minor
                }
                onChange={handelInputChange}
              />
            </div>
            <div className="flex gap-4 mb-7">
              <input
                type="email"
                placeholder="Email address*"
                required
                name="email_minor"
                className={classes.input_fields_email_phone}
                value={checked ? formData[0]?.email : formData.email_minor}
                onChange={handelInputChange}
              />
              <input
                type="number"
                placeholder="Phone number*"
                required
                name="phone_number_minor"
                className={classes.input_fields_email_phone}
                value={
                  checked
                    ? formData[0]?.phone_number
                    : formData.phone_number_minor
                }
                onChange={handelInputChange}
              />
            </div>
          </div>
          <div className="flex gap-6 mt-10">
            <Link href={"/"}>
              <button
                disabled={!isFormvalid}
                type="submit"
                className={classes.Save_Close}
              >
                Save and close
              </button>
            </Link>

            <button
              disabled={!isFormvalid}
              onClick={handelSubmit}
              type="submit"
              className={classes.Select_seats}
              style={{
                backgroundColor: isFormvalid ? "#605dec" : "#cbd4e64d",
                color: isFormvalid ? "#fff" : "",
                cursor: isFormvalid ? "pointer" : "not-allowed",
              }}
            >
              Select seats
            </button>
          </div>
        </form>
      </div>
      <aside className={classes.aside}>
        {selectflight?.length > 0 && (
          <div>
            {selectflight.map((flight) => (
              <>
                <div className={classes.booking_Content}>
                  <div className="flex items-center gap-2">
                    <Image
                      src={flight.img}
                      alt="Flight1"
                      width={40}
                      height={40}
                    />
                    <div>
                      <h4 className={classes.text_Booking}>
                        {flight.airline_name}
                      </h4>
                      <h4 className={classes.Flight_details}>
                        {flight.flight_number}
                      </h4>
                    </div>
                  </div>
                  <div className="text-end">
                    <h4 className={classes.text_Booking}>
                      {flight.duration} (+1d)
                    </h4>
                    <h4 className={classes.text_Booking}>
                      {flight.departure_time} - {flight.return_time}
                    </h4>
                    <h4 className={classes.Flight_details}>
                      {flight.stop_duration} in {flight.stop_place}
                    </h4>
                  </div>
                </div>
              </>
            ))}
          </div>
        )}
        <div>
          <div className={classes.price}>
            <div className={classes.price_details}>
              <h4 className={classes.price_text}>Subtotal</h4>
              <h4 className={classes.price_text}>
                $
                {selectflight?.length === 1
                  ? Number(selectflight[0]?.round_trip_price)
                  : selectflight?.length === 2
                  ? Number(selectflight[0]?.round_trip_price) +
                    Number(selectflight[1]?.round_trip_price)
                  : 0}
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
                {selectflight?.length === 1
                  ? Number(selectflight[0]?.round_trip_price) + 121
                  : selectflight?.length === 2
                  ? Number(selectflight[0]?.round_trip_price) +
                    Number(selectflight[1]?.round_trip_price) +
                    121
                  : 0}
              </h4>
            </div>
          </div>
        </div>
        <div>
          <button
            disabled={!isFormvalid}
            onClick={handelSubmit}
            type="submit"
            className={classes.Select_seats}
            style={{
              backgroundColor: isFormvalid ? "#605dec" : "#cbd4e64d",
              color: isFormvalid ? "#fff" : "",
              cursor: isFormvalid ? "pointer" : "not-allowed",
            }}
          >
            Select seats
          </button>
        </div>
        <div className="mt-28">
          <Image src={Bags} alt="Bags" width={382} height={525} />
        </div>
      </aside>
    </div>
  );
}

export default Page;
