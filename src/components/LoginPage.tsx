import { Dispatch, SetStateAction } from "react"

interface Props {
  setCurrentPage: Dispatch<SetStateAction<string>>
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

export default function LoginPage({ setCurrentPage, setIsLoggedIn }: Props) {
    return (
<div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Вход в аккаунт</h2>
          <p className="text-gray-600">Добро пожаловать обратно!</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
          <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); setCurrentPage('dashboard'); }}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" placeholder="ivan@example.com" className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Пароль</label>
                <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" required />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-600">Запомнить меня</span>
                </label>
                <button type="button" className="text-sm text-blue-600 hover:text-blue-700">Забыли пароль?</button>
              </div>
            </div>

            <button type="submit" className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl">
              Войти
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Нет аккаунта?{' '}
              <button onClick={() => setCurrentPage('register')} className="text-blue-600 font-medium hover:text-blue-700">
                Зарегистрироваться
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}