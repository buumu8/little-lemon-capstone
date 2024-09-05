import "./App.css";
import Header from "./Components/Header";
import Main from "./Page/Main";
import About from "./Page/About";
import Menu from "./Page/Menu";
import BookingPage from "./Page/BookingPage";
import Footer from "./Components/Footer";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./Page/error-page";

function App() {
  const HeaderLayout = () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );

  const router = createHashRouter([
    {
      element: <HeaderLayout />,
      children: [
        { path: "/", element: <Main /> },
        { path: "/about", element: <About /> },
        { path: "/menu", element: <Menu /> },
        { path: "/reservations", element: <BookingPage /> },
        { path: "/order-online", element: <h1 style={{ textAlign: "center" }}>Page Not Found</h1> },
        { path: "/order-online/:id", element: <h1 style={{ textAlign: "center" }}>Page Not Found</h1> },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
