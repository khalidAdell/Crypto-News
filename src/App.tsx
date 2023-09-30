import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Currency, Home, News, SingleCurrency } from "./Pages";
import Root from "./Components/Root";
import Error from "./Pages/Error/Error";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="currency" element={<Currency />} />
        <Route path="currency/:id" element={<SingleCurrency />} />
        <Route path="news" element={<News />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
