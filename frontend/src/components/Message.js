import React from "react";

export default function Message(props) {
  return (
    <div
      className={`${
        props.message.msgError ? "text-red-300" : "text-green-300"
      }`}
    >
      {props.message.msgBody}
    </div>
  );
}
