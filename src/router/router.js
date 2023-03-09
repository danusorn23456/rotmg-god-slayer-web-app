import { PATH_DEV_PAGE, PATH_MEMBERS_PAGE } from "constraint";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DevPage, HomePage, MembersPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:PATH_MEMBERS_PAGE,
        element:<MembersPage/>
      },
      {
        path:PATH_DEV_PAGE,
        element:<DevPage/>
      }
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
