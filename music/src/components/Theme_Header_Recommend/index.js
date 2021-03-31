import React, { memo } from "react";
import { HeaderWrapper } from "./style";
export default memo(function YNThemeHeaderRecommend(props) {
  const { title } = props;
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
      </div>

      <div className="right">
        <a href="todo">查看全部</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
});
