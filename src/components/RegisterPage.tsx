import { Dispatch, SetStateAction } from "react"

interface Props {
  setCurrentPage: Dispatch<SetStateAction<string>>
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

export default function RegisterPage({ setCurrentPage, setIsLoggedIn }: Props) {
    return (
<div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Создать аккаунт</h2>
          <p className="text-gray-600">Начните использовать TranslatePro бесплатно</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
          <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); setCurrentPage('dashboard'); }}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                <input type="text" placeholder="Иван Иванов" className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" placeholder="ivan@example.com" className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Пароль</label>
                <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Подтвердите пароль</label>
                <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" required />
              </div>
            </div>

            <button type="submit" className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl">
              Зарегистрироваться
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Уже есть аккаунт?{' '}
              <button onClick={() => setCurrentPage('login')} className="text-blue-600 font-medium hover:text-blue-700">
                Войти
              </button>
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">100</div>
            <div className="text-xs text-gray-600">Переводов/день</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">18+</div>
            <div className="text-xs text-gray-600">Языков</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">Free</div>
            <div className="text-xs text-gray-600">Навсегда</div>
          </div>
        </div>
      </div>
    </div>
    )
}