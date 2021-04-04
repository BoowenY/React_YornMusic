import React, { memo, useEffect } from "react";
import { RankingWrapper } from "./style";
import YNThemeHeader from "@/components/Theme_Header_Recommend";
import YNTopRanking from "../../../../../../components/TopRanking";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTopListAction } from "../../store/actionCreators";
export default memo(function YNRecommendRanking() {
  const {
    upRanking,
    hotRanking,
    newRanking,
    originRanking,
    // usaRanking,
    // ktvRanking,
  } = useSelector(
    (state) => ({
      upRanking: state.getIn(["recommend", "upRanking"]),
      hotRanking: state.getIn(["recommend", "hotRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
      // usaRanking: state.getIn(["recommend", "usaRanking"]),
      // ktvRanking: state.getIn(["recommend", "ktvRanking"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(1));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
    dispatch(getTopListAction(6));
    dispatch(getTopListAction(7));
  }, [dispatch]);
  return (
    <RankingWrapper>
      <YNThemeHeader title="实时排行" />
      <div className="tops">
        <YNTopRanking info={newRanking} />
        <YNTopRanking info={hotRanking} />
        {/* <YNTopRanking info={usaRanking} />
        <YNTopRanking info={ktvRanking} /> */}
        <YNTopRanking info={upRanking} />
        <YNTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  );
});
