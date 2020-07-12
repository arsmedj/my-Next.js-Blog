import React from "react";
import style from "./FormsControl.module.css";
export const Textarea = ({ input, ...props }) => {
  return (
    <div>
      <div>
        <textarea className={style.textarea} {...input} {...props} />
      </div>
    </div>
  );
};

export const Input = ({ input, ...props }) => {
  return (
    <div>
      <div>
        <input {...input} {...props} className={style.input} />
      </div>
    </div>
  );
};
