import React from "react";

const Form = ({ filter, onChange, type }) => (
  <form onChange={e => onChange(type, e.target.value)}>
    {Object.keys(filter.values).map(key => (
      <label key={key}>
        <input
          type="radio"
          name="switch"
          value={key}
          defaultChecked={key === filter.active}
        />
        {key}
      </label>
    ))}
  </form>
);

export default Form;
