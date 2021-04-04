import React, { memo, useCallback, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { BannerWrapper, BannerLeft } from "./style";
import { getTopBannerAction } from "../../store/actionCreators";
import { Carousel } from "antd";
export default memo(function YNTopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const bannerRef = useRef();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);
  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
            easing="linear"
          >
            {topBanners.map((item, index) => (
              <div className="banner-item" key={item.imageUrl}>
                <img
                  src={item.imageUrl}
                  className="image"
                  alt={item.typeTitle}
                />
              </div>
            ))}
          </Carousel>
        </BannerLeft>
      </div>
    </BannerWrapper>
  );
});

// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });
