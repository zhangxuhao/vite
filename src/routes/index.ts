import Home from '../pages/home';



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
    }
    
];


export default routes;

