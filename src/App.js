// 1. Import Area
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
import Section from './components/Section';

// 2. Function Defination
function App() {
  return (
    <>
      <Header/>
      <main>
        <Aside/>
        <Section/>
      </main>
      <Footer/>
    </>
  );
}

// 3. Export Area
export default App;
