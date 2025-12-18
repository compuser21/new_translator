import { Zap, Globe, MessageSquare, Shield, BookOpen, TrendingUp } from "lucide-react"
import { Dispatch, SetStateAction } from "react"

interface Props {
  setCurrentPage: Dispatch<SetStateAction<any>>
}

export default function FeaturesPage({ setCurrentPage }: Props) {
    return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Возможности TranslatePro</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Все инструменты, которые вам нужны для профессионального перевода</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Zap, title: 'Мгновенный перевод', desc: 'Получайте результаты за считанные секунды благодаря мощным AI-моделям последнего поколения', color: 'blue' },
            { icon: Globe, title: '18+ языков', desc: 'Поддержка всех основных языков мира включая редкие и региональные диалекты', color: 'green' },
            { icon: MessageSquare, title: 'Фонетическая транскрипция', desc: 'Узнайте, как правильно произносить переведенный текст на любом языке', color: 'purple' },
            { icon: Shield, title: 'Безопасность данных', desc: 'Ваши тексты защищены и не используются для обучения моделей или передачи третьим лицам', color: 'orange' },
            { icon: BookOpen, title: 'Контекстный перевод', desc: 'Учитываем контекст и культурные особенности для максимально точного перевода', color: 'pink' },
            { icon: TrendingUp, title: 'Постоянное улучшение', desc: 'Наши модели регулярно обновляются для повышения качества и точности переводов', color: 'indigo' }
          ].map((feature, i) => (
            <div key={i} className={`p-8 rounded-2xl bg-gradient-to-br from-${feature.color}-50 to-${feature.color}-100 border-2 border-${feature.color}-200 hover:shadow-xl transition-all hover:-translate-y-1`}>
              <div className={`w-14 h-14 bg-${feature.color}-500 rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Попробуйте все возможности прямо сейчас</h2>
          <p className="text-lg mb-6 text-blue-100">Начните использовать TranslatePro бесплатно</p>
          <button onClick={() => setCurrentPage('register')} className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
    )
}