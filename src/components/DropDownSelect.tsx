import React, { useState } from 'react';
interface IProps {
  data: string[];
  placeholder: string;
}
const DropDownSelect = (props: IProps) => {
  const { data, placeholder } = props;
  console.log('data', data);

  const [stateSeleted, setStateSeleted] = useState({
    isOpen: false,
    isSelected: false,
    listSelected: [],
  });
  const { listSelected, isOpen } = stateSeleted;
  const handleRemoveItem = (index: number) => {
    listSelected.splice(index, 1);
    setStateSeleted((prev) => ({ ...prev, listSelected: listSelected }));
  };

  const filterData = () => {
    return data.filter((item) => !listSelected.find((title) => item === title));
  };
  const filteredData = filterData();

  const handleOpen = () => {
    setStateSeleted((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  };
  const handleSelect = (title?: any) => {
    //close isopen
    if (!isOpen) {
      document.addEventListener('click', handleOutsideClick, false);
    } else {
      document.removeEventListener('click', handleOutsideClick, false);
    }

    const newList = listSelected.concat(title);
    setStateSeleted((prev) => ({
      isOpen: !prev.isOpen,
      isSelected: true,
      listSelected: newList,
    }));
  };
  const handleOutsideClick = () => {
    handleSelect();
  };
  return (
    <>
      <div className="option-custom">
        <div className="select-input select-input--multiple">
          <div className="selected-list">
            {listSelected.map((item, index) => (
              <div className="selected-item" key={index}>
                <span key={index}>{item === null ? placeholder : item}</span>
                <span onClick={() => handleRemoveItem(index)}>x</span>
              </div>
            ))}
            <div className="select-click" onClick={handleOpen} />
          </div>
        </div>

        {isOpen ? (
          <div className="select-list" id="select-list">
            {filteredData.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelect(filteredData[index])}
                className="select-item"
              >
                <span className="select-title">{item}</span>
              </div>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default DropDownSelect;
