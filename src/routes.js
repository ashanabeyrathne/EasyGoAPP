import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import PaymentIcon from '@material-ui/icons/Payment';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

// core components/views for Admin layout
import DashboardPage from "views/Dashboard.js";
import UserProfiles from "views/UserProfiles"
import Payments from "views/Payments";
import Busrouting from "views/Busrouting";
import ContactUs from "views/ContactUs";
import Maps from "views/Maps.js";
import NotificationsPage from "views/Notifications.js";



const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profiles",
    icon: Person,
    component: UserProfiles,
    layout: "/admin"
  },
  {
    path: "/payments",
    name: "Payments",
    icon: PaymentIcon,
    component: Payments,
    layout: "/admin"
  },
  {
    path: "/busrouting",
    name: "Bus Routing",
    icon: DirectionsBusIcon,
    component: Busrouting,
    layout: "/admin"
  },
  {
    path: "/contactus",
    name: "Contact Us",
    icon: PermContactCalendarIcon,
    component: ContactUs,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  
  
  
];

export default dashboardRoutes;
