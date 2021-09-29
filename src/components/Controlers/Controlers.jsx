import React from "react";
import './Controlers.scss'


export const Controlers = ({ onSetStyle }) => {

  return (

    <div
      className="controlers"
    >
      <div className="controlers__wrapper">
        <span className="controlers__label">Set Font Size :</span>
        <input
          type="range"
          name="font-size"
          min="6"
          max="40"
          defaultValue="16"
          className="controlers__input"
          onChange={onSetStyle}
        />
      </div>

      <div className="controlers__wrapper">
        <span className="controlers__label">Set Color :</span>
        <input
          type="color"
          id="color-input"
          name="color"
          className="controlers__input"
          onChange={onSetStyle}
        />
      </div>

      <div className="controlers__wrapper">
        <span className="controlers__label">Set Background Color :</span>
        <input
          type="color"
          id="text-background"
          name="background-color"
          className="controlers__input"
          onChange={onSetStyle}
        />
      </div>

    </div>
  )
}