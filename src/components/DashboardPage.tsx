import {
  TrendingUp,
  Award,
  History,
  Globe,
  Settings,
  ChevronRight,
  CreditCard,
  ArrowLeftRight
} from "lucide-react"

const user = {
  name: "Ali",
  plan: "Free",
  translationsUsed: 124,
  translationsLimit: 500
}

export default function DashboardPage() {
    return (
<div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Личный кабинет</h1>
          <p className="text-gray-600">Добро пожаловать, {user.name}!</p>
        </div>

        {/* Статистика */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md border-2 border-blue-100">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900">{user.translationsUsed}</div>
            <div className="text-sm text-gray-600">Использовано переводов</div>
            <div className="mt-2 text-xs text-gray-500">из {user.translationsLimit}</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{user.plan}</div>
            <div className="text-sm text-gray-600">Текущий тариф</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
              <History className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">47</div>
            <div className="text-sm text-gray-600">Сохранено переводов</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-2 border-orange-100">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
              <Globe className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-600">Активных языковых пар</div>
          </div>
        </div>

        {/* История переводов */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <History className="w-5 h-5" />
            История переводов
          </h2>
          <div className="space-y-4">
            {[
              { from: 'English', to: 'Russian', text: 'Hello, how are you?', result: 'Привет, как дела?', time: '2 часа назад' },
              { from: 'Russian', to: 'Turkish', text: 'Спасибо за помощь', result: 'Yardım için teşekkürler', time: '5 часов назад' },
              { from: 'Chinese', to: 'English', text: '你好', result: 'Hello', time: 'Вчера' }
            ].map((item, i) => (
              <div key={i} className="p-4 border-2 border-gray-100 rounded-lg hover:border-blue-200 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="font-medium">{item.from}</span>
                    <ArrowLeftRight className="w-4 h-4" />
                    <span className="font-medium">{item.to}</span>
                  </div>
                  <span className="text-xs text-gray-400">{item.time}</span>
                </div>
                <div className="text-gray-800 mb-1">{item.text}</div>
                <div className="text-blue-600">{item.result}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Настройки быстрого доступа */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Настройки
            </h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-between">
                <span>Редактировать профиль</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-between">
                <span>Безопасность и пароль</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-between">
                <span>Уведомления</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-md p-6 text-white">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Улучшить тариф
            </h2>
            <p className="mb-4 text-blue-100">Получите неограниченные переводы и дополнительные функции</p>
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all">
              Перейти на Pro
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}