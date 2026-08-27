import './App.css'
import Header from './components/Header/Header'
import CalculatorPage from './pages/Calculator/Calculator.page'
import ConverterPage from './pages/Converter/Converter.page';
import DestinationPage from './pages/Destination/Destination.page'
import HomePage from './pages/Home/Home.page'

function App() {

  return (
    <>
      <Header />
      <main>
        <HomePage />
        <CalculatorPage />
        <ConverterPage />
        <DestinationPage />
      </main>
    </>
  )
}

export default App

