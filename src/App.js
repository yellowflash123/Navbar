import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Accord from "./accordition.js";
import Trial from "./trial.js";
import Up from "./up.js";
import Basic from "./Basic.js";
import Navbar from "./appnavbar.js";
import Side from "./sidebar.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Accord />,
  },
  {
    path: "/trial",
    element: <Trial />,
  },
  {
    path: "/up",
    element: <Up />,
  },
  {
    path: "/basic",
    element: <Basic />,
  },
  {
    path: "navbar",
    element: <Navbar />,
  },
  {
    path: "side",
    element: <Side />,
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
