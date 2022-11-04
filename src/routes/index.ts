import Home from '../pages/home';
import PageOne from '../pages/pageOne';


const routes =[
    {
        path:"/",
        component:Home,
        title:'首页'
    },
    {
        path:"/home",
        component:Home,
        title:"首页"
    },
    {
        path:"/pageOne/:id",
        component:PageOne,
        title:'pageOne'
    }
    
];


export default routes;

