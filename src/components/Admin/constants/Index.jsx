import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBORAD_SIDEBAR_LINKS = [
    {
        Label :"Dashboard",
        key :"dashboard",
        path : "/",
        icon : <HiOutlineViewGrid />
    },
    {
        Label :"Clients",
        key :"clients",
        path : "/clients",
        icon : <HiOutlineViewGrid />
    },
    {
        Label :"Employees",
        key :"employees",
        path : "/employees",
        icon : <HiOutlineViewGrid />
    },
    {
        Label :"Task Management",
        key :"task",
        path : "/task",
        icon : <HiOutlineViewGrid />
    },
    // {
    //     Label :"Veiw Report",
    //     key :"veiw report",
    //     path : "/report"

    // },
    // {
    //     Label :"AddPartners",
    //     key :"addpartners",
    //     path : "/add"

    // }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        Label :"Settings",
        key :"settings",
        path : "/settings"

    },
    {
        Label : "Help & Support",
        key :"help & support",
        path : "/help & support"
    }
]