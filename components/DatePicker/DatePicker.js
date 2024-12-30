"use client";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/components/DatePicker/datepicker.css";
import classes from "./DatePicker.module.css";
export default function Datepicker({
  dateRange,
  selectDate,
  setDateRange,
  setselectdate,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  tripType,
  setTripType
}) {
  

  const [showPicker, setShowPicker] = useState(false);

  const minDate = new Date();
  const maxDate = new Date("2035-12-30");
  function onChangeOneWay(date) {
    setselectdate(date);
  }
  function onChangeRoundTrip(dates) {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  }
  const togglePicker = () => setShowPicker(!showPicker);
  const handleDone = () => {
    setShowPicker(false);
  };
  useEffect(() => {
    if (startDate && endDate) {
      setDateRange(
        ` ${startDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })} - ${endDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}`
      );
    } else if (selectDate) {
      setDateRange(
        ` ${selectDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })} `
      );
    } else {
      setDateRange(" depart - return");
    }
  }, [startDate, endDate, selectDate]);

  return (
    <div className={classes.date_range_picker}>
      <button className={classes.toggle_button_InScreen} onClick={togglePicker}>
        {dateRange}
      </button>

      {showPicker && (
        <>
          <div className={classes.datepicker_container}>
            <div className="flex items-center justify-evenly mb-3">
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="tripType"
                  value="round_trip"
                  onChange={() => {
                    setTripType("round_trip");
                  }}
                  selected
                  checked={tripType === "round_trip"}
                  className={classes.custom_radio}
                />
                <label htmlFor="round_trip">Round trip</label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="tripType"
                  value="one_way"
                  onChange={() => {
                    setTripType("one_way");
                  }}
                  checked={tripType === "one_way"}
                  className={classes.custom_radio}
                />
                <label htmlFor="one_way">One way</label>
              </div>
              <button className={classes.toggle_button} onClick={togglePicker}>
                {dateRange}
              </button>
              <button className={classes.done_button} onClick={handleDone}>
                Done
              </button>
            </div>
            <div className={classes.divider}></div>
            {tripType === "round_trip" ? (
              <DatePicker
                selected={startDate}
                onChange={onChangeRoundTrip}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                monthsShown={2}
                minDate={minDate}
                maxDate={maxDate}
                showDisabledMonthNavigation
                showFullMonthYearPicker
              />
            ) : (
              <div className="place-items-center">
                <DatePicker
                  selected={selectDate}
                  onChange={onChangeOneWay}
                  inline
                  monthsShown={1}
                  minDate={minDate}
                  maxDate={maxDate}
                  showDisabledMonthNavigation
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
