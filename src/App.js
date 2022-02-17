import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import About from './components/About/About';
import Benefit from './components/Benefit/Benefit';
import Roadmap from './components/Roadmap/Roadmap';
import Collection from './components/Collection/Collection';
import Team from './components/Team/Team';
import Faq from './components/Faq/Faq';
import Social from './components/Social/Social';
function App() {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <Benefit />
      <Roadmap />
      <Collection />
      <Team />
      <Faq />
      <Social />
    </div>
  );
}

export default App;
