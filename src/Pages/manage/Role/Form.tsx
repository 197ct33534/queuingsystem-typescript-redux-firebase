import React, { useState } from 'react';
import Input from '../../user/Input';
interface Iprops {
  roleState: {
    nameRole: string;
    descRole: string;
    AX: Boolean;
    AY: Boolean;
    AZ: Boolean;
    BX: Boolean;
    BY: Boolean;
    BZ: Boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Form = (props: Iprops) => {
  const { roleState, handleChange } = props;
  const checkbox = [
    { display: 'Tất cả' },
    { display: 'Chức năng x', key: 'X' },
    { display: 'Chức năng y', key: 'Y' },
    { display: 'Chức năng z', key: 'Z' },
  ];

  return (
    <>
      <div className="Manage-From">
        <div className="Manage-From-title">Thông tin vai trò</div>
        <div className="grid-col-2 Manage-From-layout">
          <div className="Manage-From-layout-left">
            <div className="Manage-From-layout-left-item">
              <label htmlFor="">
                Tên vai trò
                <span className="Manage-From-Note">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập tên vai trò"
                name="nameRole"
                value={roleState.nameRole}
                onChange={handleChange}
              />
            </div>
            <div className="Manage-From-layout-left-item">
              <label htmlFor="">Mô tả: </label>
              <input
                type="text"
                className="Manage-From-layout-left-inputLarge"
                placeholder="Nhập mô tả"
                name="descRole"
                value={roleState.descRole}
                onChange={handleChange}
              />
            </div>
            <div className="Manage-From-layout-left">
              <span className="Manage-From-Note">*</span> Là trường thông tin
              bắt buộc
            </div>
          </div>
          <div className="Manage-From-layout-right">
            <p>
              Phân quyền chức năng
              <span className="Manage-From-Note">*</span>
            </p>
            <div className="Manage-From-layout-right-wrap">
              <div className="Manage-From-layout-right-item">
                <h1 className="Manage-From-layout-right-title">
                  Nhóm chức năng A
                </h1>

                <div className="Manage-From-layout-right-checkbox">
                  <input
                    type="checkbox"
                    className="AddService-checkbox"
                    checked={roleState.AX ? true : false}
                    onChange={handleChange}
                    name="AX"
                  />
                  <span>Chức năng x</span>
                </div>
                <div className="Manage-From-layout-right-checkbox">
                  <input
                    type="checkbox"
                    className="AddService-checkbox"
                    checked={roleState.AY ? true : false}
                    onChange={handleChange}
                    name="AY"
                  />
                  <span>Chức năng y</span>
                </div>
                <div className="Manage-From-layout-right-checkbox">
                  <input
                    type="checkbox"
                    className="AddService-checkbox"
                    checked={roleState.AZ ? true : false}
                    onChange={handleChange}
                    name="AZ"
                  />
                  <span>Chức năng Z</span>
                </div>
              </div>
              <div className="Manage-From-layout-right-item">
                <h1 className="Manage-From-layout-right-title">
                  Nhóm chức năng B
                </h1>
                <div className="Manage-From-layout-right-checkbox">
                  <input
                    type="checkbox"
                    className="AddService-checkbox"
                    checked={roleState.BX ? true : false}
                    onChange={handleChange}
                    name="BX"
                  />
                  <span>Chức năng x</span>
                </div>
                <div className="Manage-From-layout-right-checkbox">
                  <input
                    type="checkbox"
                    className="AddService-checkbox"
                    checked={roleState.BY ? true : false}
                    onChange={handleChange}
                    name="BY"
                  />
                  <span>Chức năng y</span>
                </div>
                <div className="Manage-From-layout-right-checkbox">
                  <input
                    type="checkbox"
                    className="AddService-checkbox"
                    checked={roleState.BZ ? true : false}
                    onChange={handleChange}
                    name="BZ"
                  />
                  <span>Chức năng z</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
