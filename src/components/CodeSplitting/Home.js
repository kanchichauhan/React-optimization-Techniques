import React, { lazy, Suspense, useState } from 'react';
// import AdminData from './AdminData';

const AdminData = lazy(() => import('./AdminData'))
const Home = () => {
  const [isAdmin, setAdmin] = useState(false);

  return (
    <>
      <div>Home</div>
      <button onClick={() => {
        import('./sum1').then((module) => alert(module.sum1(2, 2)))
      }}>Add 2+2</button>
      <button onClick={() =>
        setAdmin((prev) => !prev)}>toggle admin</button>
      {<Suspense fallback={<h1>is loading....</h1>}>
      {isAdmin ? <AdminData /> : <h2>Not Admin</h2>}
      </Suspense>}
    </>
  )
}

export default Home