import classes from "./DoneSearch.module.css";
import Image from "next/image";
import Take_off from "/public/icons/Union.svg";
import Landing from "/public/icons/Union2.svg";
import Calender from "/public/icons/calendar with dates.svg";
import person from "/public/icons/person solid.svg";

function DoneSearch({ from, to, roundTripDate, oneWayDate, adults }) {
  const isValidDate = (dateString) => {
    const date = new Date(dateString);
    return !isNaN(date.getDate());
  };
  return (
    <div className={classes.search_bar}>
      <Image src={Take_off} alt="union" width={21} height={18} />
      <h1 className={classes.input_field}>{from}</h1>
      <div className={classes.divider}></div>
      <Image src={Landing} alt="union" width={21} height={18} />
      <h1 className={classes.input_field}>{to}</h1>
      <div className={classes.divider}></div>
      <Image src={Calender} alt="Calender" width={32} height={32} />
      <h1 className={classes.input_field}>
        {isValidDate(oneWayDate) ? oneWayDate : roundTripDate}
      </h1>

      <div className={classes.divider}></div>
      <Image src={person} alt="Person" width={32} height={32} />
      <h1 className={classes.input_field}>{adults} adult</h1>
      <button className={classes.search_button}>Search</button>
    </div>
  );
}

export default DoneSearch;
