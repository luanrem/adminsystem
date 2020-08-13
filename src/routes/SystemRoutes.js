// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";

// Components/views
import DashboardPage from '../views/Dashboard';
import Orders from '../views/Orders';
import Customers from '../views/Customers';
import Products from '../views/Products';
import Analytics from '../views/Analytics';
import Calendar from '../views/Calendar';
import Documents from '../views/Documents';
import FAQ from '../views/FAQ';


const systemRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/system"
  },
  {
    path: "/orders",
    name: "Orders",
    icon: Person,
    component: Orders,
    layout: "/system"
  },
  {
    path: "/customers",
    name: "Customers",
    icon: Unarchive,
    component: Customers,
    layout: "/system"
  },
  {
    path: "/products",
    name: "Products",
    icon: LibraryBooks,
    component: Products,
    layout: "/system"
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: BubbleChart,
    component: Analytics,
    layout: "/system"
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: LocationOn,
    component: Calendar,
    layout: "/system"
  },
  {
    path: "/documents",
    name: "Documents",
    icon: Notifications,
    component: Documents,
    layout: "/system"
  },
  {
    path: "/faq",
    name: "FAQ",
    icon: Unarchive,
    component: FAQ,
    layout: "/system"
  }
];

export default systemRoutes;
