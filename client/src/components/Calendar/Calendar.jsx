import axios from "axios";
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { formatDay } from "../../utils/formatDay";
import { Loader } from "../Loader/Loader";
import { Slots } from "../Slots/Slots";
import "./Calendar.css";
export const Calendar = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [slots, setSlots] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const start = dateRange?.startDate;
    const end = dateRange?.endDate;
    if (!start || !end) return;
    setLoader(true);
    axios
      .get(
        `https://app.appointo.me/scripttag/mock_timeslots?start_date=${start}&end_date=${end}`
      )
      .then(({ data }) => {
        setSlots(data);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  }, [dateRange.startDate, dateRange.endDate]);

  return (
    <div className="calendar">
      <div className="range__calendar">
        <DateRange
          editableDateInputs={true}
          onChange={(item) => {
            setState([item.selection]);
            setDateRange(item.selection);
          }}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </div>
      <div className="slots__container">
        <header className="slots__header">
          {dateRange?.startDate && dateRange?.endDate
            ? `Slots | ${formatDay(dateRange.startDate)} - ${formatDay(
                dateRange.endDate
              )}`
            : "Please select a date range"}
        </header>
        <hr />
        <div className="available__slots">
          {loader ? <Loader /> : <Slots slots={slots} />}
        </div>
        <hr />
        <div className="slot__book-btn">
          {" "}
          <button className="">Confirm Slot</button>
        </div>
      </div>
    </div>
  );
};
