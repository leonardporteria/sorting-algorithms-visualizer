import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App flex flex-col min-w-screen min-h-screen overflow-x-hidden bg-gray-800 font-poppins text-gray-50'>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
