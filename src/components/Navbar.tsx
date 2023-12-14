import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

// GT Walsheim Medium
const Navbar = () => {

    var linkStyle = "transition ease-in-out delay-50 hover:scale-110 duration-200 hover:bg-gray-100 rounded-md";

    var linkStyle1 = "transition ease-in-out delay-50 hover:scale-110 duration-200 hover:bg-gray-100 px-5 py-2 rounded-md";

    return (
        <div className="flex flex-row justify-between items-center w-screen h-20 sticky top-0 shadow-sm z-10 backdrop-blur-md">

            <h1 className="pl-10">Yogify</h1>

            <div className="hidden md:flex md:flex-row md:gap-10 md:pr-10 font-normal text-lg">
                <Link to={`/`} className={linkStyle1}>Home</Link>
                <Link to={`booking`} className={linkStyle1}>Bookings</Link>
                <Link to={`about`} className={linkStyle1}>About</Link>
                <Link to={`blog`} className={linkStyle1}>Blogs</Link>
                <Link to={`contact`} className={linkStyle1}>Contact</Link>
            </div>

            <div className="pr-10 md:hidden">
                <Sheet>
                    <SheetTrigger> <Menu /> </SheetTrigger>
                    <SheetContent side={"top"}>
                        <SheetHeader className="flex items-center">
                            <div className="flex flex-col gap-7 font-normal text-lg">
                                <Link to={`/`} className={linkStyle}>Home</Link>
                                <Link to={`booking`} className={linkStyle}>Bookings</Link>
                                <Link to={`about`} className={linkStyle}>About</Link>
                                <Link to={`blog`} className={linkStyle}>Blogs</Link>
                                <Link to={`contact`} className={linkStyle}>Contact</Link>
                            </div>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

        </div>
    )
}

export default Navbar;