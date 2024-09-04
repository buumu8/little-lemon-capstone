import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
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
        { path: "/about", element: <div>about</div> },
        { path: "/menu", element: <div>menu</div> },
        { path: "/reservations", element: <div>reservations</div> },
        { path: "/order-online", element: <div>order-online</div> },
        { path: "/login", element: <div>login</div> },
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
