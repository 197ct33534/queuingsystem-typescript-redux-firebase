import React, { useState } from 'react';
import userAvatar from '../../Assets/images/userAvatar.png';
import NotifyBell from '../../components/NotifyBell';
import { notifyBells } from '../../Assets/fakeData/UserNotifyData';
import { Link } from 'react-router-dom';
interface Iprops {
  title: string;
  avatar?: string;
  fullname?: string;
  bgcolorleft?: string;
  bgcolorright?: string;
  task?: [];
}
const HeaderInfo = (props: Iprops) => {
  const { title, avatar, fullname, bgcolorleft, bgcolorright, task } = props;
  const color1 = bgcolorleft ? bgcolorleft : '#F6F6F6';
  const color2 = bgcolorright ? bgcolorright : '#F6F6F6';
  const [active, setActive] = useState(false);
  const handleClickBell = () => {
    setActive(!active);
  };

  return (
    <div className="headerInfo ">
      <h1 className="headerInfo-left " style={{ backgroundColor: color1 }}>
        {task && (
          <span className="headerInfo-left_task">{task.join(' > ')}</span>
        )}
        {title}
      </h1>
      <div className="headerInfo-right " style={{ backgroundColor: color2 }}>
        <span
          className={`headerInfo-right_icon ${active ? 'active' : ''}`}
          onClick={handleClickBell}
        >
          <i className="bx bxs-bell headerInfo-right_bell"></i>
          <p className="notify-bridge"></p>
        </span>
        <Link to="/info">
          <div className="headerInfo-right_info">
            <span className="headerInfo-avatar">
              <img src={avatar ? avatar : userAvatar} alt="" />
            </span>
            <div className="headerInfo-warp">
              <span className="headerInfo-right_hello">Xin chào</span>
              <p className="headerInfo-right_name">
                {fullname ? fullname : 'lê quỳnh ái vân'}
              </p>
            </div>
          </div>
        </Link>

        {active && <NotifyBell users={notifyBells} />}
      </div>
    </div>
  );
};

export default HeaderInfo;
