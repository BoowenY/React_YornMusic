import React, { memo, useEffect, useRef } from "react";
import {Carousel} from 'antd'
import YNAlbumCover from '@/components/AlbumCover'
import YNThemeHeaderRecommend from "@/components/Theme_Header_Recommend";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getNewAlbumAction } from "../../store/actionCreators";
import { AlbumWrapper } from "./style";
export default memo(function YNNewAlbum() {
  const dispatch = useDispatch();
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );
  const pageRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction(18));
  }, [dispatch]);
  return (
    <AlbumWrapper>
      <div>
        <YNThemeHeaderRecommend title="新碟速递" />
        <div className="content">
          <button className="arrow arrow-left sprite_02" onClick={e => pageRef.current.prev()}></button>
          <div className="album">
            <Carousel dots={false} ref={pageRef}>
              {
                [0, 1].map(item => {
                  return <div key={item} className="page">{
                    newAlbums.slice(item * 7, (item + 1) * 7).map(iten => {
                      return <YNAlbumCover key={iten.id} info={iten} size={100} width={118} bgp="-570px"/>
                    })
                  }</div>
                })
              }
            </Carousel>
          </div>
          <button className="arrow arrow-right sprite_02" onClick={e => pageRef.current.next()}></button>
        </div>
      </div>
    </AlbumWrapper>
  );
});
