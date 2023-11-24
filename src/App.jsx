import React, { useEffect, useState } from 'react'
import './App.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/HomePage/Home';
import Layout from './Components/Layout/Layout';
import NotFound from './Pages/NotFound/NotFound';
import Loading from './Components/Loading/Loading';
const LazyAbout = React.lazy(() => import ('./Pages/About/About'));
const LazyLogin = React.lazy(() => import ('./Pages/Login/Login'));
const LazyRegister = React.lazy(() => import ('./Pages/Register/Register'));
const LazyContactUS = React.lazy(() => import ('./Pages/ContactUs/ContactUs'));
const LazyBeAMember = React.lazy(() => import ('./Pages/BeAMember/BeAMember'));
const LazyBlogsPage = React.lazy(() => import ('./Pages/Blogs/Blogs'));
const LazyBlogDetails = React.lazy(() => import ('./Pages/BlogDetails/BlogDetails'));
const LazyExpertTeacher = React.lazy(() => import ('./Pages/ExpertTeacher/ExpertTeacher'));
const LazyExpertTeachingAcademy = React.lazy(() => import ('./Pages/ExpertTeachingAcd/ExpertTeachingAcd'));
const LazyAssessmentTwo = React.lazy(() => import ('./Pages/Assessment2/Assessment2'));
const LazyAssessmentThree = React.lazy(() => import ('./Pages/Assessment3/Assessment3'));
const LazyAssessmentFour = React.lazy(() => import ('./Pages/Assessment4/Assessment4'));
const LazyAssessmentFive = React.lazy(() => import ('./Pages/Assessment5/Assessment5'));



function App() {

  const [userData, setuserData] = useState(null)
  const [userDataImg, setuserDataImg] = useState(null)
  function saveUserData() {
    let Token = localStorage.token
    setuserData(Token)
    setuserDataImg(Token.image)
  }
  
  useEffect(()=> {
    if (localStorage.getItem('token') !== null && userData === null) {
      saveUserData()
    }
  }, [])


  const router = createBrowserRouter([
    { 
    path: '', 
    element: <Layout />, 
    children: [
      {path: '', element: <Home/>},
      {path: 'about', element: <React.Suspense fallback={<Loading/>}> <LazyAbout/> </React.Suspense>},
      {path: 'login', element: <React.Suspense fallback={<Loading/>}> <LazyLogin saveUserData ={saveUserData}/> </React.Suspense>},
      {path: 'register', element: <React.Suspense fallback={<Loading/>}> <LazyRegister saveUserData ={saveUserData}/> </React.Suspense>},
      {path: 'contactus', element: <React.Suspense fallback={<Loading/>}> <LazyContactUS saveUserData ={saveUserData}/> </React.Suspense>},
      {path: 'membership', element: <React.Suspense fallback={<Loading/>}> <LazyBeAMember saveUserData ={saveUserData}/> </React.Suspense>},
      {path: 'blogs', element: <React.Suspense fallback={<Loading/>}> <LazyBlogsPage saveUserData ={saveUserData}/> </React.Suspense>},
      {path: 'blogdetails', element: <React.Suspense fallback={<Loading/>}> <LazyBlogDetails saveUserData ={saveUserData}/> </React.Suspense>},
      {path: 'expertteacher', element: <React.Suspense fallback={<Loading/>}> <LazyExpertTeacher saveUserData ={saveUserData}/> </React.Suspense>},
      {path: 'expertteachingacademy', element: <React.Suspense fallback={<Loading/>}> <LazyExpertTeachingAcademy saveUserData ={saveUserData}/> </React.Suspense>},
      {path: 'assessment-two', element: <React.Suspense fallback={<Loading/>}> <LazyAssessmentTwo saveUserData ={saveUserData}/> </React.Suspense>},
      {path: 'assessment-three', element: <React.Suspense fallback={<Loading/>}> <LazyAssessmentThree saveUserData ={saveUserData}/> </React.Suspense>},
      {path: 'assessment-four', element: <React.Suspense fallback={<Loading/>}> <LazyAssessmentFour saveUserData ={saveUserData}/> </React.Suspense>},
      {path: 'assessment-five', element: <React.Suspense fallback={<Loading/>}> <LazyAssessmentFive saveUserData ={saveUserData}/> </React.Suspense>},
      {path: '*', element: <NotFound/>}
  ]},
])
  return (

    <>
    <SkeletonTheme baseColor="#306c62" highlightColor="#f8b401">
      <RouterProvider router={router}/>
    </SkeletonTheme>
    </>

  );
}

export default App;
