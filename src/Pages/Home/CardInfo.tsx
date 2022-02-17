import React, { useEffect, useState } from 'react';
import userAvatarBig from '../../Assets/images/userAvatarBig.png';

import camera from '../../Assets/images/camera.png';
import { userSelector } from '../../Redux/selector';
import { useSelector } from 'react-redux';
import UserDataService from '../../firebase/user';
import { IAccount } from '../user/interface';

const CardInfo = () => {
  const user = useSelector(userSelector);
  const [infoUser, setinfoUser] = useState<IAccount>();
  const idLoggin = user.idAcount;

  const getUser = async () => {
    const db = await UserDataService.getUser(idLoggin);

    return db.data();
  };
  useEffect(() => {
    getUser()
      .then((res: any) => {
        const db: IAccount = res;
        setinfoUser(db);
      })
      .catch((err) => console.log(err));
  }, []);

  const infoForm = [
    { label: 'Tên người dùng', input: infoUser?.fullname },
    { label: 'Tên đăng nhập', input: infoUser?.name },
    { label: 'Số điện thoại', input: infoUser?.phone },
    { label: 'Mật khẩu', input: infoUser?.pass },
    { label: 'Email', input: infoUser?.email },
    { label: 'Vai trò', input: infoUser?.job },
  ];

  return (
    <div className="cardInfo row">
      <div className="cardInfo-avatar col l-3">
        <p className="cardInfo-avatar_img">
          <img src={userAvatarBig} className="cardInfo-avatar_img_pic" alt="" />
          <img src={camera} alt="" className="cardInfo-avatar_img_camera" />
        </p>
        <h1 className="cardInfo-avatar_name">{infoUser?.fullname}</h1>
      </div>
      <div className="cardInfo-form col l-9">
        <form className="row ">
          {infoForm.map((info) => (
            <div className="col l-6 cardInfo-form_item" key={info.label}>
              <label>{info.label}</label>
              <input type="text" placeholder={info.input} disabled />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default CardInfo;
