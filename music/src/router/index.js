import React from "react";
import YNFriend from "@/pages/Friend";
import YNMine from "@/pages/Mine";
import { Redirect } from "react-router";

import YNDiscover from "@/pages/Discover";
import YNAlbum from "../pages/Discover/c_pages/album";
import YNRadio from "../pages/Discover/c_pages/radio";
import YNRecommend from "../pages/Discover/c_pages/recommend";
import YNRanking from "../pages/Discover/c_pages/ranking";
import YNSongs from "../pages/Discover/c_pages/songs";
import YNArtist from "../pages/Discover/c_pages/artist";
const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: YNDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to={"/discover/recommend"} />,
      },
      {
        path: "/discover/recommend",
        component: YNRecommend,
      },
      {
        path: "/discover/radio",
        component: YNRadio,
      },
      {
        path: "/discover/ranking",
        component: YNRanking,
      },
      {
        path: "/discover/songs",
        component: YNSongs,
      },
      {
        path: "/discover/album",
        component: YNAlbum,
      },
      {
        path: "/discover/artist",
        component: YNArtist,
      },
    ],
  },
  {
    path: "/friend",
    component: YNFriend,
  },
  {
    path: "/mine",
    component: YNMine,
  },
];
export default routes;
