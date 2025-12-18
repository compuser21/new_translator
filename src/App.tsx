import { useState } from "react"

import HomePage from "./components/HomePage"
import FeaturesPage from "./components/FeaturesPage"
import DashboardPage from "./components/DashboardPage"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import HowItWorksPage from "./components/HowItWorksPage"

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation 
        setCurrentPage={setCurrentPage}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
        isMenuOpen={isMenuOpen}
        />
      
      {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === "features" && <FeaturesPage setCurrentPage={setCurrentPage} />}
      {currentPage === "how-it-works" && <HowItWorksPage setCurrentPage={setCurrentPage} />}
      {currentPage === "register" && (
        <RegisterPage
          setCurrentPage={setCurrentPage}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      {currentPage === "login" && (
        <LoginPage
          setCurrentPage={setCurrentPage}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      {currentPage === "dashboard" && <DashboardPage />}
      
      <Footer setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default App
