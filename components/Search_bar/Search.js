"use client";
import classes from "./Search.module.css";
import Image from "next/image";
import Take_off from "/public/icons/Union.svg";
import Landing from "/public/icons/Union2.svg";
import Calender from "/public/icons/calendar with dates.svg";
import person from "/public/icons/person solid.svg";
import Datepicker from "../DatePicker/DatePicker";
import Adults from "../Adults/Adults";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

function Search() {
  const [fromWhere, setFromWhere] = useState("");
  const [toWhere, setToWhere] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectDate, setselectdate] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [tripType, setTripType] = useState("round_trip");
  const [adultCount, setAdultCount] = useState(1);
  const [minorsCount, setMinorsCount] = useState(0);
  const router = useRouter();
  const from = ["SFO", "ATL", "LAX", "STL", "PVG", "MSP", "NRT", "JFK"];
  const to = ["NRT", "PVG", "STL", "ATL", "MSP", "SFO", "JFK", "LAX"];
  const formatStartdate = dayjs(startDate).format("MMM DD");
  const formatEnddate = dayjs(endDate).format("MMM DD");
  const formatSelectDate = dayjs(selectDate).format("MMM DD");
  const handelSearch = () => {
    router.push(
      `/search?from=${fromWhere}&to=${toWhere}&dateRange=${formatStartdate} - ${formatEnddate}&onWayDate=${formatSelectDate}&adults=${adultCount}&minors=${minorsCount}&tripType=${tripType}&startDate=${formatStartdate}&endDate=${formatEnddate}&start=${startDate}&end=${endDate}`
    );
  };

  return (
    <div className={classes.search_bar}>
      <Image src={Take_off} alt="union" width={21} height={18} />
      <select
        name="From Where?"
        id=""
        className={classes.input_field}
        onChange={(e) => setFromWhere(e.target.value)}
      >
        <option value="from where" selected className="text-white" disabled>
          From where?
        </option>
        {from.map((from) => (
          <option key={from}>{from}</option>
        ))}
      </select>
      <div className={classes.divider}></div>
      <Image src={Landing} alt="union" width={21} height={18} />
      <select
        name="where to"
        id=""
        className={classes.input_field}
        onChange={(e) => setToWhere(e.target.value)}
      >
        <option value="where to" disabled selected className="text-white">
          Where to?
        </option>
        {to.map((to) => (
          <option key={to}>{to}</option>
        ))}
      </select>
      <div className={classes.divider}></div>
      <Image src={Calender} alt="Calender" width={32} height={32} />
      <Datepicker
        dateRange={dateRange}
        setDateRange={setDateRange}
        selectDate={selectDate}
        setselectdate={setselectdate}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        tripType={tripType}
        setTripType={setTripType}
      />

      <div className={classes.divider}></div>
      <Image src={person} alt="Person" width={32} height={32} />
      <Adults
        adultCount={adultCount}
        minorsCount={minorsCount}
        setAdultCount={setAdultCount}
        setMinorsCount={setMinorsCount}
      />
      <button className={classes.search_button} onClick={handelSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;
