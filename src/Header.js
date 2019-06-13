import React from "react";
import Form from "./Form";

const Header = ({ filters, onChange }) => {
  const handleChange = (type, active) =>
    onChange(
      {
        filters: {
          ...filters,
          [type]: { ...filters[type], active }
        }
      },
      filters[type].refresh
    );

  return (
    <header>
      {Object.keys(filters).map(key => (
        <Form
          key={key}
          onChange={handleChange}
          filter={filters[key]}
          type={key}
        />
      ))}
    </header>
  );
};

export default Header;
