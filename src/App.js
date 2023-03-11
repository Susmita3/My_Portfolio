import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main';

const App = () => {
  const Router = createBrowserRouter ([
    {
      path: '/',
      element: <Main></Main>,
    },
  ])
  
  return (
    <div>
      <RouterProvider router={ Router } ></RouterProvider>
    </div>
  );
}

export default App;