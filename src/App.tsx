import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/booking",
          element: <Booking />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/blog",
          element: <Blogs />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
