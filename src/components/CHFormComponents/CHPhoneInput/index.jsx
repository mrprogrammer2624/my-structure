import { Image, Select, Space } from "antd";
import { CHInput, CHNumberInput } from "../CHInput";
import { countryList, Icons } from "../../../constants";
import styles from "./CHPhoneInput.module.css";
import clsx from "clsx";
const { Option } = Select;

export const CHPhoneInput = ({
  id,
  label,
  isInvalid,
  countryName,
  errorMessage,
  placeholder,
  parentClassName,
  selectedCountry,
  onCountrySelect,
  handleChangeSelect,
  ...rest
}) => {
  const countries = countryList
    ?.sort((a, b) => (a.name > b.name ? 1 : -1))
    ?.map((country) => {
      return {
        name: country.name,
        flag: country.flags.png,
        countryCode: country.countryCallingCode,
      };
    });
  return (
    <div className={clsx(parentClassName)}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <Space.Compact className={styles.inputContainer}>
        <Select
          defaultValue={selectedCountry}
          name={countryName}
          onChange={(value) => onCountrySelect(value)}
          value={selectedCountry || "+1"}
          suffixIcon={Icons.AltArrowDown}
          popupMatchSelectWidth={300}
          filterOption={true}
          optionLabelProp={"countryCode"}
          className={styles.select}
          status={isInvalid && "error"}
          showSearch
        >
          {countries.map(({ name, flag, countryCode }, index) => (
            <Option value={countryCode} key={index}>
              <Space className="align-items-center">
                <Image
                  src={flag}
                  alt={name}
                  width={25}
                  height={18}
                  preview={false}
                  className={styles.flag}
                />
                <div>{countryCode}</div>
                <div>{name}</div>
              </Space>
            </Option>
          ))}
        </Select>
        <CHNumberInput
          id={id}
          placeholder={"123 456 7890"}
          status={isInvalid && "error"}
          parentClassName={"w-100"}
          {...rest}
        />
      </Space.Compact>
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};
