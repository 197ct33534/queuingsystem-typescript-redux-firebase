import React from 'react';
interface IInput {
  classStyleLabel?: string;
  classStyleInput?: string;
  nameLabel: string;
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
}
const Input = (props: IInput) => {
  const { classStyleLabel, classStyleInput, nameLabel, data, setData, type } =
    props;
  return (
    <>
      <label htmlFor="" className={classStyleLabel}>
        {nameLabel}
      </label>
      <input
        type={type}
        className={classStyleInput}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </>
  );
};

export default Input;
