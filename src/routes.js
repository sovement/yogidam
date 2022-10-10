import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
import MypageDetail from "./pages/MypageDetail";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/mypage",
        component: Mypage,
    },
    {
        path: "/mypage/detail",
        component: MypageDetail,
    },
];

export default routes;