import "./App.css";
import Header from "./Components/Header";
import Main from "./Page/Main";
import About from "./Page/About";
import Menu from "./Page/Menu";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./Page/error-page";

function App() {
  const HeaderLayout = () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );

  const router = createBrowserRouter([
    {
      element: <HeaderLayout />,
      children: [
        { path: "/", element: <Main /> },
        { path: "/about", element: <About /> },
        { path: "/menu", element: <Menu /> },
        { path: "/reservations", element: <div>reservations</div> },
        { path: "/order-online", element: <div>order-online</div> },
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
