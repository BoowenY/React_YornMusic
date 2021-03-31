import React, { memo, useEffect } from "react";
import YNThemeHeaderRecommend from "@/components/Theme_Header_Recommend";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getNewAlbumAction } from "../../store/actionCreators";
export default memo(function YNNewAlbum() {
  const dispatch = useDispatch();
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);
  return (
    <div>
      <YNThemeHeaderRecommend title="新碟上架" />
      <div>
        {newAlbums.map((item, index) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
});
