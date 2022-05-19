import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    // UilPackage,
    // UilChart,
    UilSignOutAlt
} from "@iconscout/react-unicons";
import image1 from '../image/image1.jpeg'
import image2 from '../image/image2.jpeg'
import image3 from '../image/image3.jpeg'
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard"
    },
    {
        icon: UilSignOutAlt,
        heading: "Enquires"
    },
    {
        icon: UilUsersAlt,
        heading: "Profiles"
    },
    {
        icon: UilClipboardAlt,
        heading: "Payments"
    }
];
export const  CardData = [
    {
        name:"Jonathan Smith",
        image:image1,
        status:"active",
        storage:45,
        day:2
    },
    {
        name:"Kate Smith",
        image:image2,
        status:"active",
        storage:81,
        day:15
    },
    {
        name:"Alaxander Smith",
        image:image3,
        status:"Inactive",
        storage:21,
        day:30
    }
]