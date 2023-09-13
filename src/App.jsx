import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className='flex flex-col min-w-screen min-h-screen overflow-x-hidden bg-slate-900 font-poppins text-gray-50 px-8'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
