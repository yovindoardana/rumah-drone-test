import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Dashboard";
import FullLayout from "../pages/Layout/FullLayout";
import Inventory, { loader as inventoryLoader } from "../pages/Inventory/Inventory";
import OutgoingTransaction, { loader as outgoingTransactionLoader } from "../pages/OutgoingTransaction";
import IncomingTransaction, { loader as incomingTransactionLoader } from "../pages/IncomingTransaction/IncomingTransaction";
import EditInventory, { loader as editInventoryLoader, action as updateInventory } from "../pages/Inventory/EditInventory";
import AddInventory, { action as addInventory } from "../pages/Inventory/AddInventory";
import DetailIncomingTransaction, { loader as detailIncomingTransactionLoader } from "../pages/IncomingTransaction/DetailIncomingTransaction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FullLayout />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        // errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Dashboard /> },
          {
            path: "/inventory",
            element: <Inventory />,
            loader: inventoryLoader,
          },
          {
            path: "/inventory/add",
            element: <AddInventory />,
            action: addInventory,
          },
          {
            path: "/inventory/:id",
            element: <EditInventory />,
            loader: editInventoryLoader,
            action: updateInventory,
          },
          {
            path: "/incoming-transaction",
            element: <IncomingTransaction />,
            loader: incomingTransactionLoader,
          },
          {
            path: "/incoming-transaction/:id",
            element: <DetailIncomingTransaction />,
            loader: detailIncomingTransactionLoader,
          },
          {
            path: "/outgoing-transaction",
            element: <OutgoingTransaction />,
            loader: outgoingTransactionLoader,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
