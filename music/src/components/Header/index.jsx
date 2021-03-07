import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { headerLinks } from "../../common/local-data";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./styled";
export default memo(function YNHeader() {
  const showItemSelect = (item, index) => {
    if (index < 3) {
      return <NavLink to="item.link">{item.title}</NavLink>;
    } else {
      return <a href="{item.link}">{item.title}</a>;
    }
  };
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/#" className="logo sprite_01"></a>
          <div className="select-list">
          {headerLinks.map((item, index) => {
            return (
              <div key="item.title" className="select-item">
                {showItemSelect(item, index)}
              </div>
            );
          })}
          </div>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
