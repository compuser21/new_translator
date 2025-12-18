import { Dispatch, SetStateAction } from "react"
import { Globe, Menu } from "lucide-react"

interface Props {
  setCurrentPage: Dispatch<SetStateAction<string>>
  isLoggedIn: boolean
  isMenuOpen: boolean
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

export default function Navigation({ setCurrentPage, isLoggedIn, setIsLoggedIn }: Props) {
    return (
    <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">TranslatePro</h1>
            </button>
            
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => setCurrentPage('features')} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Возможности</button>
              <button onClick={() => setCurrentPage('how-it-works')} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Как работает</button>
              <button onClick={() => setCurrentPage('home')} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Переводчик</button>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <button onClick={() => setCurrentPage('dashboard')} className="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                  Личный кабинет
                </button>
                <button onClick={() => { setIsLoggedIn(false); setCurrentPage('home'); }} className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg">
                  Выйти
                </button>
              </>
            ) : (
              <>
                <button onClick={() => setCurrentPage('login')} className="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                  Войти
                </button>
                <button onClick={() => setCurrentPage('register')} className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg">
                  Регистрация
                </button>
              </>
            )}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
    )
}