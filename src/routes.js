import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
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
        path: "/complaint",
        component: Complaint,
    },
    {
        path: "/login",
        component: Login,
    },
];

export default routes;