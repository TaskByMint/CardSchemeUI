/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./views/Dashboard.jsx";

import Icons from "./views/Icons.jsx";
import GLRClass from './views/GL_modules/glrclass'
import GLRAccounts from './views/GL_modules/glraccounts'
import GLRComponents from './views/GL_modules/glrcompo'
import GLRItems from './views/GL_modules/glritems'
import GLRMatching from './views/GL_modules/glrmatching'
import GLRDash from './views/GL_modules/glrdash'
import GLRGroup from './views/GL_modules/glrgroup'
import GLRBank from './views/GL_modules/glrbank'




import UserPage from "./views/User.jsx";
import UpgradeToPro from "./views/Upgrade.jsx";
import Users from "./views/Users/users";
import Table from './views/Tables'


import EJDashboard from "./views/Ej/ejdashboard"
import DailyPerformance from "./views/Ej/daily"
import EJTransearch from "./views/Ej/ejtrans";
import Ejbulk from "./views/Ej/ejbulk";
import TerminalMgt from "./views/Ej/terminal_mgt";
import CashFlow from "./views/Ej/cashflow.js";
import MoreDetails from "./views/Ej/moredetails";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },

  {
    path: "/Ej_dashboard",
    name: "EJ Dashboard",
    icon: "nc-icon nc-bank",
    component: EJDashboard,
    layout: "/admin"
  },
 
  {
    path: "/Ej_Trans_search",
    name: "EJ Transaction Search",
    icon: "nc-icon nc-bank",
    component: EJTransearch,
    layout: "/admin"
  },
  {
    path: "/EJ_bulksearch",
    name: "EJ Bulk Transaction Search",
    icon: "nc-icon nc-bank",
    component: Ejbulk,
    layout: "/admin"
  },

  {
    path: "/cashflow",
    name: "Cash Load Analysis",
    icon: "nc-icon nc-pin-3",
    component: CashFlow,
    layout: "/admin"
  },

  {
    path: "/cashflow_moredetails",
    name: "Cash Load Analysis ",
    icon: "nc-icon nc-pin-3",
    component: MoreDetails,
    layout: "/admin"
  },
  {
    path: "/terminal_mgt",
    name: "Terminal Management",
    icon: "nc-icon nc-pin-3",
    component: TerminalMgt,
    layout: "/admin"
  },

  {
    path: "/daily_performance",
    name: "Daily Performance",
    icon: "nc-icon nc-pin-3",
    component: DailyPerformance,
    layout: "/admin"
  },


  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/gl_proofing",
    name: "Proof Dashboard",
    icon: "nc-icon nc-tile-56",
    component: GLRDash,
    layout: "/admin"
  },
 
   {
    path: "/bp_class",
    name: "ByteProof Class",
    icon: "nc-icon nc-tile-56",
    component: GLRClass,
    layout: "/admin"
  },
  {
    path: "/bp_account",
    name: "ByteProof Accounts",
    icon: "nc-icon nc-tile-56",
    component: GLRAccounts,
    layout: "/admin"
  },
  {
    path: "/bp_component",
    name: "ByteProof Components",
    icon: "nc-icon nc-tile-56",
    component: GLRComponents,
    layout: "/admin"
  },
  {
    path: "/bp_items",
    name: "ByteProof Items",
    icon: "nc-icon nc-tile-56",
    component: GLRItems,
    layout: "/admin"
  },
  {
    path: "/bp_matching",
    name: "ByteProof Matching Sets",
    icon: "nc-icon nc-tile-56",
    component: GLRMatching,
    layout: "/admin"
  },
  {
    path: "/bp_group",
    name: "ByteProof Group",
    icon: "nc-icon nc-tile-56",
    component: GLRGroup,
    layout: "/admin"
  },
  {
    path: "/bp_bank",
    name: "ByteProof Bank",
    icon: "nc-icon nc-tile-56",
    component: GLRBank,
    layout: "/admin"
  },
 

  {
    path: "/users-admins",
    name: "ByteProof Matching Sets",
    icon: "nc-icon nc-tile-56",
    component: Users,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "ByteProof Proof Reports",
    icon: "nc-icon nc-tile-56",
    component: Table,
    layout: "/admin"
  },
 
  
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-spaceship",
    component: UpgradeToPro,
    layout: "/admin"
  }
  
];
export default routes;
