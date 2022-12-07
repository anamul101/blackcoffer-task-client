import Country from "../pages/Header/Dashbord/Country/Country";
import Dashbord from "../pages/Header/Dashbord/Dashbord";
import Intensity from "../pages/Header/Dashbord/Intensity/Intensity";
import Likelihood from "../pages/Header/Dashbord/Likelihood/Likelihood";
import Pestle from "../pages/Header/Dashbord/Pestle/Pestle";
import Region from "../pages/Header/Dashbord/Region/Region";
import Relevance from "../pages/Header/Dashbord/Relevance/Relevance";
import Sector from "../pages/Header/Dashbord/Sector/Sector";
import Source from "../pages/Header/Dashbord/Source/Source";
import Topics from "../pages/Header/Dashbord/Topics/Topics";
import EndYear from "../pages/Header/Dashbord/Year/EndYear";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Dashbord></Dashbord>
            },
            {
                path:'/intensity',
                element:<Intensity></Intensity>
            },
            {
                path:'/likelihood',
                element:<Likelihood></Likelihood>
            },
            {
                path:'/relevance',
                element:<Relevance></Relevance>
            },
            {
                path:'/endyear',
                element:<EndYear></EndYear>
            },
            {
                path:'/country',
                element:<Country></Country>
            },
            {
                path:'/topics',
                element:<Topics></Topics>
            },
            {
                path:'/region',
                element:<Region></Region>
            },
            {
                path:'/sector',
                element:<Sector></Sector>
            },
            {
                path:'/source',
                element:<Source></Source>
            },
            {
                path:'/pestle',
                element:<Pestle></Pestle>
            }
        ]
    }
])