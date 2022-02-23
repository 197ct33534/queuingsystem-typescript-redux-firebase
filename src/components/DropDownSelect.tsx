import React, { useState } from 'react';

const DropDownSelect = () => {
  //   const [stateSeleted, setStateSeleted] = useState({
  //     isOpen: false,
  //     isSelected: false,
  //     listSelected: [],
  //   });
  //   const { defaultTitle, listSelected, isSelected, isOpen } = stateSeleted;
  //   const handleRemoveItem = (index) => {
  //     listSelected.splice(index, 1);
  //     setStateSeleted((prev) => ({ ...prev, listSelected: listSelected }));
  //   };

  //   const filterData = () => {
  //     return data.filter((item) => !listSelected.find((title) => item === title));
  //   };
  //   const filteredData = filterData();

  //   const handleOpen = () => {
  //     setStateSeleted((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  //   };
  //   const handleSelect = (title) => {
  //     //close isopen
  //     if (!isOpen) {
  //       document.addEventListener('click', handleOutsideClick, false);
  //     } else {
  //       document.removeEventListener('click', handleOutsideClick, false);
  //     }

  //     setStateSeleted((prev) => ({
  //       isOpen: !prev.isOpen,
  //       isSelected: true,
  //       listSelected: listSelected.concat(title),
  //     }));
  //   };
  //   const handleOutsideClick = () => {
  //     handleSelect();
  //   };
  return (
    <>
      <h2>2</h2>
      {/* <div className="option-custom">
                <div className="select-input select-input--multiple">
                    <div className="selected-list">
                        {listSelected.map((item, index) => (
                            <div className="selected-item" key={index}>
                                <span key={index}>
                                    {item === null ? placeholder : item}
                                </span>
                                <span onClick={() => handleRemoveItem(index)}>
                                    x
                                </span>
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
                                onClick={() =>
                                    handleSelect(filteredData[index])
                                }
                                className="select-item"
                            >
                                <span className="select-title">{item}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    ""
                )}
            </div> */}
    </>
  );
};

export default DropDownSelect;
