import React from "react";
import './TextField.scss'


export const TextField = ({ onSetStyles }) => {

  return (
    <div
      className="text-field"
      contentEditable="true"
      suppressContentEditableWarning="true"
      onMouseDown={() => onSetStyles({})}
    >


    </div>

  )
}