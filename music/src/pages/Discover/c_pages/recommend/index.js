import React, { memo } from "react";
import { RecommendWrapper, Content, RecommendContent } from "./style";
import YNTopBanner from "./c_cpns/Top_Banner";
import YNHot_Recommend from './c_cpns/Hot_Recommend'
function YNRecommend(props) {
  return (
    <RecommendWrapper>
      <YNTopBanner />
      <Content className="wrap-v2">
      <RecommendContent>
        <YNHot_Recommend/>
      </RecommendContent>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(YNRecommend);
