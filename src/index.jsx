import React from "react";
import { createRoot } from 'react-dom/client';
// import Root from './routes/root.jsx';
// import Parent from './parent.jsx';
// import ErrorPage from './error-page.jsx';
import Home from './home.jsx';
import Layout from './layout.jsx';
import Game from './game.jsx';
import Katakana from './katakana.jsx';
import Hiragana from './hiragana.jsx';
import Kanji from './kanji.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = BrowserRouter;
import { create } from 'zustand';

// const useStore = create((set) => ({
//   current: {},
//   setCurrent: (newKana) => set({current: newKana}),
// }));
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const root = createRoot(document.getElementById("root"));

// const router = createBrowserRouter([
//   {
//   path: "/",
//   element: <Parent />,
//   errorElement: <ErrorPage />,
//   },
//   {
//     path: "home",
//     element: <Home />,
//   },
// ]);

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="hiragana" element={<Hiragana />}></Route>
        <Route path="katakana" element={<Katakana />}></Route>
        <Route path="kanji" element={<Kanji />}></Route>
        <Route path="game" element={<Game />}></Route>
        {/* <Route path="*" element={<ErrorPage />}></Route> */}
      </Route>
    </Routes>
  </Router>
);


