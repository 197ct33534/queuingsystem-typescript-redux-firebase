import { useState, useRef } from 'react';
interface IProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
  up?: boolean;
  scroll?: boolean;
}
const DropDown = (props: IProps) => {
  const { selected, setSelected, options, up, scroll } = props;
  const [isActive, setIsActive] = useState(false);

  const iconRef = useRef<HTMLDivElement>(null);
  const handleAddIconUp = () => {
    if (up && iconRef.current !== null) {
      iconRef.current.classList.remove('bxs-down-arrow');
      iconRef.current.classList.add('bxs-up-arrow');
    }
  };
  const handleRemoveIconUp = () => {
    if (iconRef.current !== null) {
      iconRef.current.classList.remove('bxs-up-arrow');
      iconRef.current.classList.add('bxs-down-arrow');
    }
  };
  const handleMouseLeave = () => {
    handleRemoveIconUp();
    setIsActive(false);
  };
  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={(e) => {
          setIsActive(!isActive);
          handleAddIconUp();
        }}
      >
        {selected}
        <i ref={iconRef} className="bx bxs-down-arrow dropdown-icon"></i>
      </div>
      {isActive && (
        <div
          className="dropdown-content "
          id={scroll ? 'scroll' : ''}
          onMouseLeave={handleMouseLeave}
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);

                up && handleRemoveIconUp();
              }}
              className={`dropdown-item ${
                option === selected ? 'active' : ''
              } `}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
