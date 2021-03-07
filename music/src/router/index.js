import YNDiscover from '@/pages/Discover'
import YNFriend from '@/pages/Friend'
import YNMine from '@/pages/Mine'
const routes = [
    {
        path: "/",
        exact: true,
        component: YNDiscover
    },
    {
        path: "/friend",
        component: YNFriend
    },
    {
        path: "/mine",
        component: YNMine
    },
]
export default routes;