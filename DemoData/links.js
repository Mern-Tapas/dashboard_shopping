import Home from "@/public/stock/icons/element-4.svg"
import Reports from '@/public/stock/icons/Report.svg'
import Box24 from '@/public/stock/icons/box24.svg'
import People from '@/public/stock/icons/people.svg'
import Profile from '@/public/stock/icons/profile.svg'
import Setting from '@/public/stock/icons/setting.svg'

const links = [
    {
        linkName: "Dashboard",
        path: "/admin",
        Icon: Home,
        subLinks: [
            {
                linkName: "n",
                path: "d",

            }
        ]
    },
    {
        linkName: "Reports",
        path: "/admin/reports",
        Icon: Reports,
        subLinks: [
            {
                linkName: "n",
                path: "d",

            }
        ]
    },
    {
        linkName: "Products",
        path: "/admin/products",
        Icon: Box24,
        subLinks: [
            {
                linkName: "Products",
                path: "/admin/products",
            },
            {
                linkName: "Products",
                path: "/admin/",
            },
        ]
    },
    {
        linkName: "Sellers",
        path: "/admin/sellers",
        Icon: Profile,
        subLinks: [
            {
                linkName: "general",
                path: "d",
            },

        ]
    },
    {
        linkName: "Customers",
        path: "/admin/customers",
        Icon: People,
        subLinks: [
            {
                linkName: "n",
                path: "d",

            }
        ]
    },
    {
        linkName: "Settigns",
        path: "/admin/settings",
        Icon: Setting,
        subLinks: [
            {
                linkName: "General",
                path: "/admin/settings",

            },
            {
                linkName: "preference",
                path: "/admin/settings/preference",

            },
            {
                linkName: "Theme",
                path: "/admin/settings/theme",

            },
        ]
    },
]

export default links
