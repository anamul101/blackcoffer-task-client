import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Router";

function App() {
  return (
    <div className=''>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
