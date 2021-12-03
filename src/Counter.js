import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { statusAction, statusSelector } from "./statusSlice";

export function Counter() {
  const status = useSelector(statusSelector);
  const dispatch = useDispatch();
  console.log(status);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(statusAction())}>-</button>
        <span> {status}</span>
      </div>
    </div>
  );
}
