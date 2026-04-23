import { createBrowserRouter } from "react-router"
import ContactListView from "./views/ContactListView.jsx"
import EditContactView from "./views/EditContactView.jsx"
import CreateContactView from "./views/CreateContactView.jsx"
import ContactDetailsView from "./views/ContactDetailsView.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactListView />,
  },
  {
    path: "/contact/:id",
    element: <ContactDetailsView />
  },
  {
    path: "/edit/:id",
    element: <EditContactView />
  },
  {
    path: "/new",
    element: <CreateContactView />
  }
])

export default router
