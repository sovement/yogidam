import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
import MypageDetail from "./pages/MypageDetail";
import Complaint from "./pages/Complaint";
import Login from "./pages/Login";
import Help from "./pages/Help";
import Rules from "./pages/Rules";
import RulesPrivate from "./pages/RulesPrivate";
import Promotion from "./pages/Promotion";
import Complete from "./pages/Complete";

const routes = [
    {
        path: "/",
        component: Home,
    }, {
        path: "/mypage",
        component: Mypage,
    }, {
        path: "/mypage/detail",
        component: MypageDetail,
    }, {
        path: "/complaint",
        component: Complaint,
    }, {
        path: "/login",
        component: Login,
    }, {
        path: "/help",
        component: Help,
    }, {
        path: "/rules",
        component: Rules,
    }, {
        path: "/promotion",
        component: Promotion,
    }, {
        path: "/complete",
        component: Complete,
    }, {
        path: "/rules",
        component: Rules,
    },{
        path: "/rulesprivate",
        component: RulesPrivate,
    },
];

export default routes;