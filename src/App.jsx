import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './Layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import AddJobPage from './pages/AddJobPage'
import NotFounfPage from './pages/NotFounfPage'
import SingleJobPage, {jobLoader} from './pages/SingleJobPage'



const App = () => {
  //Add job
  const addJob = async(newJob) => {
    const res = await fetch('/api/jobs',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return;
  }
  //delete job
  const deleteJob = async(id) => {
    const res = await fetch(`/api/jobs/${id}`,{
      method: 'DELETE',
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
      <Route path='/jobs/:id' element={<SingleJobPage deleteJob={ deleteJob}/>} loader={jobLoader} />
      <Route path='*' element={<NotFounfPage />} />
      
    </Route>
  )
  );

  return <RouterProvider router={router}/>
};

export default App