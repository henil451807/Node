import React, { useState } from 'react';

export const RadioButton = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  const handleChange = (index) => {
    setSelectedOption(index)
  };

  console.log("options is : ", selectedOption)

  return (
    <div>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            name="options"
            value={option}
            checked={selectedOption === index }
            onChange={() => handleChange(index)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}


