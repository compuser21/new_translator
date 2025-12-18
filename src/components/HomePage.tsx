import {
  ArrowLeftRight,
  Volume2,
  Copy,
  Share2,
  X,
  Loader2,
  ChevronRight
} from "lucide-react"
import { Dispatch, SetStateAction, useState, useEffect, useRef } from "react"
import { useQuery } from "@tanstack/react-query"
import { getResponse } from "../api"

interface Props {
  setCurrentPage: Dispatch<SetStateAction<any>>
}

export default function HomePage({setCurrentPage}: Props) {
  const [fromLang, setFromLang] = useState('en')
  const [toLang, setToLang] = useState('ru')
  const [inputText, setInputText] = useState('')
  const [debouncedText, setDebouncedText] = useState('')
  const lastTranslatedRef = useRef('')

  const languages = [
    { code: 'en', name: 'Английский' },
    { code: 'ru', name: 'Русский' },
    { code: 'zh', name: 'Китайский' },
    { code: 'tr', name: 'Турецкий' },
    { code: 'es', name: 'Испанский' },
    { code: 'fr', name: 'Французский' },
    { code: 'de', name: 'Немецкий' },
    { code: 'it', name: 'Итальянский' },
    { code: 'pt', name: 'Португальский' },
    { code: 'ja', name: 'Японский' },
    { code: 'ko', name: 'Корейский' },
    { code: 'az', name: 'Азербайджанский' },
    { code: 'hi', name: 'Хинди' },
    { code: 'th', name: 'Тайский' },
    { code: 'vi', name: 'Вьетнамский' },
    { code: 'ar', name: 'Арабский' },
    { code: 'fa', name: 'Персидский' },
    { code: 'be', name: 'Белорусский' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputText.trim() !== lastTranslatedRef.current) {
        setDebouncedText(inputText.trim());
        lastTranslatedRef.current = inputText.trim();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [inputText]);

  const { data: translationData, isLoading, isError, error } = useQuery({
    queryKey: ['translate', fromLang, toLang, debouncedText],
    queryFn: () => getResponse({
      sourceLang: fromLang,
      targetLang: toLang,
      inputText: debouncedText
    }),
    enabled: !!debouncedText && fromLang !== toLang,
    staleTime: 30 * 1000, // Кэш на 5 минут
    retry: 2
  });

  const handleClear = () => {
    setInputText('');
  }

  const handleSwapLanguages = () => {
    setFromLang(toLang);
  setToLang(fromLang);

  if (translationData?.translatedText) {
    setInputText(translationData.translatedText);
  }

  setDebouncedText('');
  lastTranslatedRef.current = '';
  }

  const handleCopy = async () => {
    if (translationData?.translatedText) {
      await navigator.clipboard.writeText(translationData.translatedText);
    }
  };

    return (
        <>
      <section className="bg-white py-12">
        <main className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Мгновенный перевод на любой язык
            </h2>
            <p className="text-lg text-gray-600">
              Переводите тексты с высокой точностью и получайте транскрипцию для правильного произношения
            </p>
          </div>

          <div className="flex items-center gap-2 md:gap-4 mb-6 flex-wrap justify-center">
            <select value={fromLang} onChange={(e) => setFromLang(e.target.value)} className="px-4 py-2.5 text-sm md:text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all bg-white font-medium">
              {languages.map(lang => (<option key={lang.code} value={lang.code}>{lang.name}</option>))}
            </select>
            <button onClick={handleSwapLanguages} className="p-2.5 rounded-xl hover:bg-blue-50 transition-colors border-2 border-transparent hover:border-blue-200">
              <ArrowLeftRight className="w-5 h-5 text-blue-600" />
            </button>
            <select value={toLang} onChange={(e) => setToLang(e.target.value)} className="px-4 py-2.5 text-sm md:text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all bg-white font-medium">
              {languages.map(lang => (<option key={lang.code} value={lang.code}>{lang.name}</option>))}
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <div className="border-2 border-gray-200 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6 md:p-8">
                <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Введите текст для перевода..." className="w-full h-48 md:h-64 resize-none outline-none text-base md:text-lg text-gray-800 placeholder:text-gray-400" maxLength={5000} />
              </div>
              <div className="border-t-2 border-gray-100 px-6 py-4 flex items-center justify-between bg-gray-50">
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <Volume2 className="w-5 h-5 text-gray-600" />
                  </button>
                  {inputText && (
                    <button onClick={handleClear} className="p-2 rounded-lg hover:bg-red-50 transition-colors">
                      <X className="w-5 h-5 text-red-500" />
                    </button>
                  )}
                </div>
                <span className="text-sm font-medium text-gray-500">{inputText.length} / 5000</span>
              </div>
            </div>

            <div className="border-2 border-blue-200 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-white shadow-lg">
              <div className="p-6 md:p-8 relative">
                {isLoading && (
                  <div className="absolute top-6 right-6">
                    <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
                  </div>
                )}
                <div className="w-full h-48 md:h-64 text-base md:text-lg text-gray-800 overflow-y-auto">
                  {isError ? (
                    <div className="flex items-center gap-2 text-red-500">
                      <X className="w-5 h-5" />
                      <span>Ошибка: {error?.message}</span>
                    </div>
                  ) : translationData?.translatedText ? (
                    <div>
                      <div className="mb-4 leading-relaxed">{translationData.translatedText}</div>
                    </div>
                  ) : (
                    <span className="text-gray-400 italic">
                      {inputText ? '⏱️ Перевод появится через 3 секунды...' : '✨ Начните вводить текст для перевода'}
                    </span>
                  )}
                </div>
              </div>
              {translationData?.translatedText && (
                <div className="border-t-2 border-blue-100 px-6 py-4 flex items-center gap-2 bg-blue-50/50">
                  <button className="p-2 rounded-lg hover:bg-blue-100 transition-colors">
                    <Volume2 className="w-5 h-5 text-blue-600" />
                  </button>
                  <button onClick={handleCopy} className="p-2 rounded-lg hover:bg-blue-100 transition-colors">
                    <Copy className="w-5 h-5 text-blue-600" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-blue-100 transition-colors">
                    <Share2 className="w-5 h-5 text-blue-600" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl md:text-5xl font-bold mb-2">18+</div><div className="text-blue-100">Поддерживаемых языков</div></div>
            <div><div className="text-4xl md:text-5xl font-bold mb-2">99.5%</div><div className="text-blue-100">Точность перевода</div></div>
            <div><div className="text-4xl md:text-5xl font-bold mb-2">&lt;3с</div><div className="text-blue-100">Среднее время ответа</div></div>
            <div><div className="text-4xl md:text-5xl font-bold mb-2">5000</div><div className="text-blue-100">Символов за раз</div></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Готовы начать переводить?</h2>
          <p className="text-lg text-gray-600 mb-8">Присоединяйтесь к тысячам пользователей, которые уже используют TranslatePro</p>
          <button onClick={() => setCurrentPage('register')} className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
            Начать бесплатно <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
    )
}