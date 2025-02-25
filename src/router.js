import { createRouter, createWebHashHistory } from "vue-router";
import ComPany from "./components/ComPany.vue";
import BusinEss from "./components/BusinEss.vue";
import LabInfra from "./components/LabInfra.vue";
import ProDuct from "./components/ProDuct.vue";
import MainWrapper from "./components/MainWrapper.vue";
import About from "./components/company/About.vue";
import History from "./components/company/History.vue";
import Global from "./components/company/Global.vue";
import Social from "./components/company/Social.vue";
import ProductProcess from "./components/labInfra/ProductProcess.vue";
import BusinessProcess from "./components/business/BusinessProcess.vue";
import RndCenter from "./components/business/RndCenter.vue";
import Base from "./components/product/Base.vue";
import Lip from "./components/product/Lip.vue";
import Eye from "./components/product/Eye.vue";
import Certificate from "./components/labInfra/Certificate.vue";





const routes = [
  {path:'/', component:MainWrapper, 
   },
  { path:'/Cp', component: ComPany, name: 'company',
    children:[
      {
      path:'about',
      component : About,      
      },
      {
      path:'history',
      component : History,
      name : 'history'
      },
      {
      path:'global',
      component : Global,
      name : 'global'
      },
      {
      path:'social',
      component : Social,
      name : 'social'
      }
    ]
  },
  { path: '/Bn', component: BusinEss, props:true,
    children:[
      {
        path:'businessprocess',
        component:BusinessProcess,
        name:'businessprocess'
      },
      {
        path:'rndcenter',
        component:RndCenter,
        name:'rndcenter'
      }
    ]
  },
  { path: '/Lab', component: LabInfra, props:true,
    children:[
      {
        path:'certificate',
        component:Certificate,
        name:'certificate'
      },
      {
        path:'productprocess',
        component:ProductProcess,
        name:'productprocess'
      }
    ]
  }, 
  { path: '/PD', component: ProDuct, props:true,
    children:[
      {
        path:'LIP',
        component:Lip,
        name:'LIP'
      },
      {
        path:'EYE',
        component:Eye,
        name:'EYE'
      },
      {
        path:'BASE',
        component:Base,
        name:'BASE'
      }
    ]
  }

];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
});

export default router;