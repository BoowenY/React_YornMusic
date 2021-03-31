import styled from "styled-components";

export const BannerWrapper = styled.div`
  background: url(${(props) => props.bgImage}) center center/6000px;

  .banner {
    height: 270px;
    background-color: red;

    display: flex;
    position: relative;
  }
`;

export const BannerLeft = styled.div`
  width: 984px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
`;
