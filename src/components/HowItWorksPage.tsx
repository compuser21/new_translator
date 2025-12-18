import { Dispatch, SetStateAction } from "react"

interface Props {
  setCurrentPage: Dispatch<SetStateAction<string>>
}

export default function HowItWorksPage({ setCurrentPage }: Props) {
    return (
<div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Как работает TranslatePro?</h1>
          <p className="text-xl text-gray-600">Простой процесс для получения идеальных переводов</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 mb-16">
          {[
            { step: 1, title: 'Введите текст', desc: 'Напишите или вставьте текст, который нужно перевести. Поддерживаются тексты до 5000 символов. Вы можете вводить текст на любом поддерживаемом языке.', color: 'blue' },
            { step: 2, title: 'Выберите языки и параметры', desc: 'Укажите исходный и целевой языки из списка поддерживаемых. При желании добавьте язык транскрипции для получения информации о произношении. Выберите стиль перевода: разговорный, официальный или словарный.', color: 'purple' },
            { step: 3, title: 'Получите результат', desc: 'Через 3 секунды вы получите точный перевод с учетом контекста и выбранного стиля. Если выбрана транскрипция, вы также увидите, как правильно произносить переведенный текст.', color: 'green' },
            { step: 4, title: 'Используйте перевод', desc: 'Копируйте результат одним нажатием, слушайте произношение, делитесь переводом с друзьями или сохраняйте в истории для дальнейшего использования.', color: 'orange' }
          ].map((item) => (
            <div key={item.step} className="flex gap-6 items-start">
              <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-full flex items-center justify-center shadow-lg`}>
                <span className="text-2xl font-bold text-white">{item.step}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-lg text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Технология за кулисами</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">🤖</div>
              <h4 className="font-bold text-xl mb-2">AI-модели</h4>
              <p className="text-gray-600">Используем передовые нейронные сети для понимания контекста</p>
            </div>
            <div>
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="font-bold text-xl mb-2">Быстрая обработка</h4>
              <p className="text-gray-600">Оптимизированная инфраструктура для моментальных результатов</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="font-bold text-xl mb-2">Точность</h4>
              <p className="text-gray-600">99.5% точность благодаря постоянному обучению на реальных данных</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}