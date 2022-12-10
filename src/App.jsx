import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col min-w-screen min-h-screen overflow-x-hidden bg-slate-900 font-poppins text-gray-50'>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
