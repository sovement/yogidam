import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
import Complaint from "./pages/Complaint";

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
    
];

export default routes;