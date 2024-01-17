import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import logo from "../assets/logos/YogEase.svg";

// GT Walsheim Medium
const Navbar = () => {

    var linkStyle = "transition ease-in-out delay-50 hover:scale-110 duration-200 hover:bg-gray-100 rounded-md";

    var linkStyle1 = "transition ease-in-out delay-50 hover:scale-110 duration-200 hover:bg-gray-100 px-5 py-2 rounded-md";

    return (
        <div className="flex flex-row justify-between items-center w-screen h-20 sticky top-0 shadow-sm z-10 backdrop-blur-md">

            <div className="flex items-center pl-10">
                <img src={logo} alt="logo" className="w-10"/>
                <h1 className="ml--10 font-bold text-2xl text-red-600">YogEase</h1>
            </div>

            <div className="hidden md:flex md:flex-row md:gap-10 md:pr-10 font-normal text-lg">
                <Link to={`/`} className={linkStyle1}>Home</Link>
                <Link to={`booking`} className={linkStyle1}>Bookings</Link>
                <Link to={`explore`} className={linkStyle1}>Explore</Link>
                <Link to={`blog`} className={linkStyle1}>Blogs</Link>
                <Link to={`about`} className={linkStyle1}>About</Link>
            </div>

            <div className="pr-10 md:hidden">
                <Sheet>
                    <SheetTrigger> <Menu /> </SheetTrigger>
                    <SheetContent side={"top"}>
                        <SheetHeader className="flex items-center">
                            <div className="flex flex-col gap-7 font-normal text-lg">
                                <Link to={`/`} className={linkStyle}><SheetClose>Home</SheetClose></Link>
                                <Link to={`booking`} className={linkStyle}><SheetClose>Booking</SheetClose></Link>
                                <Link to={`explore`} className={linkStyle}><SheetClose>Explore</SheetClose></Link>
                                <Link to={`blog`} className={linkStyle}><SheetClose>Blogs</SheetClose></Link>
                                <Link to={`about`} className={linkStyle}><SheetClose>About</SheetClose></Link>                              
                            </div>      
                        </SheetHeader>
                    </SheetContent>               
                </Sheet>
            </div>

        </div>
    )
}

export default Navbar;