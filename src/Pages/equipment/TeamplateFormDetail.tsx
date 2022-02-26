import React from 'react';
import { Link, useParams } from 'react-router-dom';
interface IProps {
  device?: boolean;
  classNameIcon: string;
  tittlePath: string;
  data: { display: string; key: string }[];
  path: string;
  dataOrigin: [];
}
const TeamplateFormDetail = (props: IProps) => {
  const { device, classNameIcon, tittlePath, data, path, dataOrigin } = props;
  const { id } = useParams();
  const dataField = dataOrigin.find(
    (item) => String(item['id']) === String(id)
  );

  return (
    <div className="deviceManager-warp">
      <div className="formAddDevice detailDevice">
        <div className="detailDevice-title">{`Thông tin ${
          device ? 'thiết bị' : 'Cấp số'
        }`}</div>
        <div className="grid-col-2 detailDevice-gap">
          {data.map((item, key) => (
            <div className="detailDevice-item" key={key}>
              <div className="detailDevice-item_label">{item.display}:</div>
              <div className="detailDevice-item_content">
                {dataField ? dataField?.[item.key] : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to={`${path}/${device ? id : ''}`}>
        <div className="deviceManager-add">
          <div className="deviceManager-add_icon">
            <i className={classNameIcon}></i>
          </div>
          {tittlePath}
        </div>
      </Link>
    </div>
  );
};

export default TeamplateFormDetail;
