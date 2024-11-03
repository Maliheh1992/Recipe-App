import React from "react";

function SearchBar({
  type,
  placeholder,
  required = false,
  value,
  name,
  handleInputChange,
  rightIcon,
}) {
  return (
    <div>
      <div className="relative">
        <input
          type={type || "text"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          required={required}
          className={`bg-background border border-border text-foreground text-md rounded-full focus:ring-1 focus:ring-ring focus:border-input block w-full  p-2.5 outline-none px-5 placeholder:text-sm shadow-xl`}
        />

        {rightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
