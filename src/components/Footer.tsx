import { Globe } from "lucide-react"
import { Dispatch, SetStateAction } from "react"

interface Props {
  setCurrentPage: Dispatch<SetStateAction<any>>
}

export default function Footer({ setCurrentPage }: Props) {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">TranslatePro</span>
            </div>
            <p className="text-sm text-gray-400">Современный AI-переводчик для всех ваших потребностей</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setCurrentPage('features')} className="hover:text-blue-400 transition-colors">Возможности</button></li>
              <li><button onClick={() => setCurrentPage('how-it-works')} className="hover:text-blue-400 transition-colors">Как работает</button></li>
              <li><button className="hover:text-blue-400 transition-colors">API</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:text-blue-400 transition-colors">О нас</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Блог</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Контакты</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:text-blue-400 transition-colors">Помощь</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Конфиденциальность</button></li>
              <li><button className="hover:text-blue-400 transition-colors">FAQ</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 TranslatePro. Все права защищены.</p>
        </div>
      </div>
    </footer>
    )
}