import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { headerLinks } from "../../common/local-data";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./styled";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
export default memo(function YNHeader() {
  const showItemSelect = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else
      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.title}
        </a>
      );
  };
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/#" className="logo sprite_01">
            NetEase Music
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {showItemSelect(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="Music/Video/TV"
            prefix={<SearchOutlined />}
          />
          <div className="center">Mine</div>
          <div>Login In</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
