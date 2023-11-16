import Home from "@/public/stock/icons/home.svg"
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
                linkName: "n",
                path: "d",
                
            }
        ]
    },
    {
        linkName: "Sellers",
        path: "/admin/sellers",
        Icon: Profile,
        subLinks: [
            {
                linkName: "n",
                path: "d",
                
            }
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
                linkName: "n",
                path: "d",
                
            }
        ]
    },
]

export default links
