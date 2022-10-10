import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
import MypageDetail from "./pages/MypageDetail";
import Complaint from "./pages/Complaint";
import Login from "./pages/Login";

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
    {
        path: "/complaint",
        component: Complaint,
    },
    {
        path: "/login",
        component: Login,
    },
];

export default routes;