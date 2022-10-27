import Home from '../pages/home';
import PageOne from '../pages/pageOne';


const routes =[
    {
        path:"/home",
        component:Home,
        title:"首页"
    },
    {
        path:"*",
        component:Home,
        title:'首页'
    },
    {
        path:"/pageOne",
        component:PageOne,
        title:'pageOne'
    }
    
];


export default routes;

