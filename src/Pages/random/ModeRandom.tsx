import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RandomSelector } from '../../Redux/selector';
import randomSlice from './randomSlice';

const ModeRandom = () => {
  const Random = useSelector(RandomSelector);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(randomSlice.actions.setMode(!Random.mode));
  };
  return (
    <div className="Model">
      <div className="ModeRandom">
        <div className="ModeRandom-top">
          <div className="ModeRandom-top_title">Số thứ tự được cấp</div>
          <div className="ModeRandom-top_number">
            {Math.random().toString().slice(4, 10)}
          </div>
          <div className="ModeRandom-top_content">
            DV: {Random.nameService} (tại quầy số 1)
          </div>
        </div>
        <div className="ModeRandom-bot">
          <div className="ModeRandom-bot_title">
            Thời gian cấp: 09:30 11/10/2021
          </div>
          <div className="ModeRandom-bot_title">
            Hạn sử dụng: 17:30 11/10/2021
          </div>
        </div>
        <i className="bx bx-x ModeRandom-exit" onClick={handleClick}></i>
      </div>
    </div>
  );
};

export default ModeRandom;
