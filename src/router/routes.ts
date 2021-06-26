import Home from "../pages/Home/Home";
import Template from "../pages/Template/Template";

interface AppRoute {
  exactPath: string;
  component: React.FC<any>;
}

const routes: AppRoute[] = [
    {
        exactPath: '/',
        component: Home
    },
    {
        exactPath: '/template',
        component: Template
    }
];

export default routes;