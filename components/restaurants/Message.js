import React from "react";

function Message({ restaurantName, startDate, endDate }) {
  return (
    <div className="booking__message">
      Успешно резервирахте маса в: {restaurantName}.<br />
      Дата на резервация: <time>{startDate}</time>
      <br />
      Валидна до: <time>{endDate}</time>
      <br />
    </div>
  );
}

export default Message;
