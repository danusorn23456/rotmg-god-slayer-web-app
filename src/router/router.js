import { PATH_MEMBERS_PAGE } from "constraint";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, MembersPage } from "../pages";

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
      }
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
