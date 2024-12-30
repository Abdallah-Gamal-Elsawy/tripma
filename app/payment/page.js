"use client";
import Image from "next/image";
import Link from "next/link";
import PaymentMethodIcon from "../../public/icons/credit card.svg";
import PaymentMethodIcon2 from "../../public/icons/Payment google.svg";
import PaymentMethodIcon3 from "../../public/icons/apple mac.svg";
import PaymentMethodIcon4 from "../../public/icons/paypal.svg";
import PaymentMethodIcon5 from "../../public/icons/bitcoin money currency crypto.svg";
import infoIcon from "../../public/flight_image/information.svg";
import classes from "./Payment.module.css";
import { useState, useEffect } from "react";
import { useDataContext } from "../DataContext";
import { useRouter } from "next/navigation";
function Page() {
  const { setCardForm } = useDataContext();
  const { data, setData } = useDataContext();
  const { selectflight } = data;
  useEffect(() => {
    if (!data || Object.keys(data).length === 0) {
      const storedData = JSON.parse(sessionStorage.getItem("flightData"));
      if (storedData) setData(storedData);
    }
  }, [data, setData]);
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    date: "",
    ccv: "",
  });

  const isFormvalid =
    formData.cardName.trim() !== "" &&
    formData.cardNumber.trim() !== "" &&
    formData.cardNumber.length === 16 &&
    formData.date.trim() !== "" &&
    formData.ccv.trim() !== "" &&
    formData.ccv.length === 3;

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const router = useRouter();
  const handelSubmit = (e) => {
    e.preventDefault();
    setCardForm(formData);
    sessionStorage.setItem("CardForm", JSON.stringify(formData));
    router.push("/Booked");
  };
  return (
    <div>
      <div className={classes.paymentInfo_content}>
        <h1 className={classes.text_header}>Payment method</h1>
        <p className={classes.description}>
          Select a payment method below. Tripma processes your payment securely
          with end-to-end encryption.
        </p>
        <div className={classes.paymentMethod_content}>
          <button className={classes.activeButton}>
            <div className="flex gap-1">
              <Image src={PaymentMethodIcon} alt="" width={18} height={18} />
              <h3 className={classes.creddit_text}>Credit card</h3>
            </div>
          </button>
          <button className={classes.unactivatedButton}>
            <div className="flex gap-1">
              <Image src={PaymentMethodIcon2} alt="" width={18} height={18} />
              <h3 className={classes.paymentMethod_text}>Google Pay</h3>
            </div>
          </button>
          <button className={classes.unactivatedButton2}>
            <div className="flex gap-1">
              <Image src={PaymentMethodIcon3} alt="" width={18} height={18} />
              <h3 className={classes.paymentMethod_text}>Apple pay</h3>
            </div>
          </button>
          <button className={classes.unactivatedButton3}>
            <div className="flex gap-1">
              <Image src={PaymentMethodIcon4} alt="" width={18} height={18} />
              <h3 className={classes.paymentMethod_text}>Paypal</h3>
            </div>
          </button>
          <button className={classes.unactivatedButton3}>
            <div className="flex gap-1">
              <Image src={PaymentMethodIcon5} alt="" width={18} height={18} />
              <h3 className={classes.paymentMethod_text}>Crypto</h3>
            </div>
          </button>
        </div>
        <h3 className={classes.passenger_text}>Credit card details</h3>
        <form onSubmit={handelSubmit}>
          <div className="flex gap-1 mb-4">
            <input type="checkbox" />
            <h3 className={classes.checkBox_text}>
              Billing address is same as Passenger 1
            </h3>
          </div>
          <div>
            <input
              type="text"
              placeholder="Name on card"
              className={classes.input_field}
              required
              onChange={handelInputChange}
              name="cardName"
              value={formData.cardName}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Card number"
              className={classes.input_field}
              required
              onChange={handelInputChange}
              name="cardNumber"
              value={formData.cardNumber}
            />
          </div>
          <div className="flex items-start gap-5 mb-6">
            <div>
              <input
                type="date"
                placeholder="Expiration date"
                className={classes.input_field_date}
                required
                onChange={handelInputChange}
                name="date"
                value={formData.date}
              />
              <h4 className={classes.text_date}>MM/YY</h4>
            </div>
            <div className={classes.input_field_CCV}>
              <input
                type="number"
                placeholder="CCV"
                className={classes.input_field_none}
                required
                onChange={handelInputChange}
                name="ccv"
                value={formData.ccv}
              />
              <Image src={infoIcon} alt="infoIcon" width={32} height={32} />
            </div>
          </div>

          <h3 className={classes.passenger_text}>Cancellation policy</h3>
          <p className={classes.description}>
            This flight has a flexible cancellation policy. If you cancel or
            change your flight up to 30 days before the departure date, you are
            eligible for a free refund. All flights booked on Tripma are backed
            by our satisfaction guarantee, however cancellation policies vary by
            airline. See the
            <span className={classes.description_span}>
              full cancellation policy
            </span>
            for this flight.
          </p>
          <div className="flex gap-6 mt-10">
            <Link href={"/departSeats"}>
              <button type="button" className={classes.backAndSeatButton}>
                Back to seat select
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
              Confirm and pay
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
            Confirm and pay
          </button>
        </div>
      </aside>
    </div>
  );
}

export default Page;
