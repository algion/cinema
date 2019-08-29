import React from "react";

export const SessionInfo = ({room, date, cost}) => (
    <div className="session-info">
        <div><span>Зал: </span>{room}</div>
        <div><span>Начало сеанса: </span>{new Date(date).toLocaleTimeString().slice(0,-3)}</div>
        <div><span>Цена: </span>{cost} <span> грн.</span></div>
    </div>
);