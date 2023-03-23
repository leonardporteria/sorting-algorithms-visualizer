import Header from './components/Hearder';
import Footer from './components/Footer';
import Visualizer from './components/Visualizer';

function App() {
  return (
    <div className='flex flex-col min-w-screen min-h-screen overflow-x-hidden bg-slate-900 font-poppins text-gray-50'>
      <Header />
      <Visualizer />
      <Footer />
    </div>
  );
}

export default App;
