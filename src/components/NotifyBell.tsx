import React from 'react';
interface IUser {
  fullname: string;
  time: string;
  date: string;
}
interface IProps {
  users: IUser[];
  active?: boolean;
}
const NotifyBell = (props: IProps) => {
  const { users, active } = props;
  return (
    <div className={`notify ${active ? 'active' : ''}`} id="notify">
      <h1 className="notify-tittle">Thông báo</h1>
      <div className="notify-wap">
        {users.map((user, key) => (
          <div className="notify-item" key={key}>
            <div className="notify-item_name">
              Người dùng: <span>{user.fullname}</span>
            </div>
            <div className="notify-item_date">
              Thời gian nhận số: {user.time} ngày {user.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotifyBell;
