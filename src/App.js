
import './App.css';
import './index.css';

import Navbar from './components/Navbar';
import NewsGrid from './components/NewsGrid';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
        <Navbar />
        <Routes>
          <Route path='/' element={<NewsGrid key="general" category="general" />}></Route>
          <Route path='/Business' element={<NewsGrid key="business" category="business" />}> </Route>
          <Route path='/entertainment' element={<NewsGrid key="entertainment" category="entertainment" />}></Route>
          <Route path='/health' element={<NewsGrid key="health" category="health" />}></Route>
          <Route path='/science' element={<NewsGrid key="science" category="science" />}></Route>
          <Route path='/sports' element={<NewsGrid key="sports" category="sports" />}></Route>
          <Route path='/technology' element={<NewsGrid key="technology" category="technology" />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
