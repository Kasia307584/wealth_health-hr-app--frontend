import React from "react";
import { useState, useEffect } from "react";

export default function KatarzynaSelect({ options, label, onChange }) {
  const [selectedValue, setSelectValue] = useState("");

  useEffect(() => {
    const selectedOption = options.filter(
      (option) => option.value === selectedValue
    );
    onChange(selectedOption[0]);
  }, [selectedValue]);

  function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  }

  return (
    <>
      {label && <label htmlFor={label}>{capitalize(label)}</label>}
      <select
        aria-label={`select ${label}`}
        className="form-select"
        id={label}
        name={label}
        value={selectedValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}
