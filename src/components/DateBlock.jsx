import React from "react";
import {dateOptions} from "../constants";

export const DateBlock = ({ moviesOnDate }) => {
    return moviesOnDate.map((elem) => (
      <div key={elem.id}>
          <h3>{new Date (elem.date).toLocaleDateString("ru", dateOptions)}</h3>

      </div>
  ))
};