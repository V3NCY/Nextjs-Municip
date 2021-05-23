import React from "react";

function Message({ restaurantName, startDate, endDate, duration }) {
  return (
    <div className="booking__message">
      Успешно резервирахте маса в: {restaurantName}.<br />
      Дата за маса: <time>{startDate}</time>
      <br />
      До: <time>{endDate}</time>
      <br />
      Обща продължителност на престоя: {duration} часа.
    </div>
  );
}

export default Message;
