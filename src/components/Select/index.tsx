import { FC } from "react";
import { Select, SelectProps } from "antd";

import { SelectOption } from "@/interfaces";

const { Option } = Select;

interface CustomSelectProps extends SelectProps {
  options: SelectOption[];
  label?: string;
}

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  label,
  ...otherProps
}) => {
  return (
    <>
      <h4>{label}</h4>
      <Select {...otherProps}>
        {options.map((option) => (
          <Option value={option.value} key={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default CustomSelect;
