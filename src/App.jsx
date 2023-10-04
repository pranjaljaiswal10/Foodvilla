import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Cart from "./components/Cart"
import Favourie from "./components/Favourite"
import RestaurantMenu from "./components/RestaurantMenu"
import Login from "./components/Login"
import Profile from "./components/Profile"
import PrivateRouter from "./components/PrivateRouter"
import store from "./utils/appStore";
import { Provider } from "react-redux"
import { AuthProvider } from "./utils/useauth";
import { FilterProvider } from "./utils/useFilter"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"




const AppLayout = () => {
  return (
    <>
    <AuthProvider>
      <FilterProvider>
    <Provider store={store}>
      <Header/>
      <Outlet/>
  </Provider>
  </FilterProvider>
  </AuthProvider>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      }, {
        path: "/contact",
        element: <Contact />
      },{
       path:"/login",
       element:<Login/>
      },{
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/favourite",
        element: <PrivateRouter> <Favourie/></PrivateRouter>
      },{
        path: "/cart",
        element: <PrivateRouter>  <Cart /></PrivateRouter>
      },{
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      }
    ]
  }
])

const App=()=> {
 return <RouterProvider router={router}/>
}
export default App;
