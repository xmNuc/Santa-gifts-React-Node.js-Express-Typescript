import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { GiftsView } from './views/GiftsView';
import { Header } from './components/Header/Header';
// import { Test } from './views/Test';
import { NotFoundView } from './views/NotFoundView';
import { SingleGiftView } from './views/SingleGiftView';
import { Childview } from './views/ChildView';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/gift" element={<GiftsView />} />
        <Route path="/gift/:idOfGift" element={<SingleGiftView />} />
        <Route path="/child" element={<Childview />} />
        {/* <Route path="/test/:foo" element={<Test />} /> */}
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
}

export default App;
