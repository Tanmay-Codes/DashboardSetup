import SpeedIcon from "@mui/icons-material/Speed";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import AppsIcon from "@mui/icons-material/Apps";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SettingsIcon from "@mui/icons-material/Settings";
export const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: SpeedIcon,
    subMenu: false,
  },
  {
    title: "Timesheet",
    path: "/timesheet",
    icon: AvTimerIcon,
  },
  {
    title: "Activity",
    path: "/activity",
    icon: WorkHistoryIcon,
    subMenu: [
      {
        title: "Screenshots",
        path: "/activity/Screenshots",
        icon: ScreenshotMonitorIcon,
      },
      {
        title: "Apps",
        path: "/activity/apps",
        icon: AppsIcon,
      },
      {
        title: "Url",
        path: "/activity/urls",
        icon: AdsClickIcon,
      },
    ],
  },
  {
    title: "Projects",
    path: "/projects",
    icon: BusinessCenterIcon,
    subMenu: [
      {
        title: "Project Dashboard",
        path: "/project/dashboard",
        icon: DashboardIcon,
      },
      {
        title: "Taskboard",
        path: "/project/taskboard",
        icon: AssignmentIcon,
      },
      {
        title: "Projects",
        path: "/projects/projects-list",
        icon: ListAltIcon,
      },
    ],
  },
  {
    title: "Finance",
    path: "/finance",
    icon: AccountBalanceWalletIcon,
    subMenu: false,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: AssignmentIndIcon,
    subMenu: false,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: SettingsIcon,
    subMenu: false,
  },
];
