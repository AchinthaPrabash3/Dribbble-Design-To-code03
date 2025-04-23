import React from "react";

function InputBox({ label, getData, type, id }) {
  return (
    <div className="flex flex-col grow">
      <label htmlFor={id} className="capitalize mb-1">
        {label}
      </label>
      <input
        className="h-16 bg-white pl-4 rounded-2xl placeholder:capitalize placeholder:text-gray-300"
        placeholder={label}
        type={type ? type : "text"}
        id={id}
        onChange={(e) => getData(e.target.value)}
      />
    </div>
  );
}

export default InputBox;
