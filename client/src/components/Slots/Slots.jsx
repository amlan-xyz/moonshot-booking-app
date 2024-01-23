import { useState } from "react";
import { formatDay } from "../../utils/formatDay";
import { formatTime } from "../../utils/formatTime";
import "./Slots.css";

export const Slots = ({ slots }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const handleSlotClick = (slotId) => {
    setSelectedSlot(slotId);
  };

  return (
    <div className="slots">
      {slots.length === 0 ? (
        <>
          <img
            className="no__slots"
            src="no_slots.png"
            alt="no slots available"
          />
          <p className="slots__msg">No slots available</p>
        </>
      ) : (
        <>
          {" "}
          {slots?.map((data) => (
            <div className="slot__body">
              <p>{formatDay(data.date)} - Available slots</p>
              <ul className="slot__list">
                {data.slots?.map((time) => (
                  <li
                    key={`${formatDay(time.start_time)} -${formatTime(
                      time.end_time
                    )}`}
                    className={
                      selectedSlot ===
                      `${formatDay(time.start_time)} -${formatTime(
                        time.end_time
                      )}`
                        ? "slot-selected"
                        : ""
                    }
                    onClick={() =>
                      handleSlotClick(
                        `${formatDay(time.start_time)} -${formatTime(
                          time.end_time
                        )}`
                      )
                    }
                  >
                    {formatTime(time.start_time)} - {formatTime(time.end_time)}
                  </li>
                ))}
              </ul>
              <hr />
            </div>
          ))}
        </>
      )}
    </div>
  );
};
