import Image from "next/image";

export default function HomePage() {
  return (
    <main className="font-sans text-[#1a2a52]">
      
      <header className="flex items-center justify-between px-6 py-4">
        <p className="text-xl font-bold">BOXPACK</p>
        <nav className="hidden gap-6 text-sm sm:flex">
          <a href="#">Услуги</a>
          <a href="#">Как работаем</a>
          <a href="#">Тарифы</a>
          <a href="#">Контакты</a>
        </nav>
      </header>

      
      <section className="bg-[#1a2a52] px-6 py-16 text-white">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Автоматизированный фулфилмент
        </p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
          Фулфилмент, который держит сроки и репутацию
        </h1>
        <p className="mt-4 max-w-xl text-sm text-gray-300">
          Автоматизированная упаковка, видеоконтроль каждого заказа и отправка
          в день поступления. Мы берем на себя хранение, сборку, маркировку
          и логистику.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <button className="rounded-md bg-white px-5 py-2 text-sm font-bold text-[#1a2a52]">
            Рассчитать стоимость
          </button>
          <button className="rounded-md border border-white px-5 py-2 text-sm font-bold text-white">
            Получить консультацию
          </button>
        </div>

        
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            ["5000+", "заказов в день"],
            ["99.8%", "точность сборки"],
            ["FBO/FBS", "все маркетплейсы"],
          ].map(([num, text]) => (
            <div key={text} className="rounded-lg bg-[#253a6b] p-4">
              <p className="text-2xl font-bold">{num}</p>
              <p className="text-xs text-gray-300">{text}</p>
            </div>
          ))}
        </div>

      
        <div className="mt-10 flex h-56 items-center justify-center rounded-lg bg-gray-300 text-sm text-[#1a2a52]">
          Видео автоматической упаковочной линии
        </div>
      </section>

      
      <section className="px-6 py-16">
        <h2 className="text-center text-2xl font-bold">Как начать работать с нами</h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          Подключение занимает всего несколько дней. Все процессы максимально
          автоматизированы.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Оставляете заявку", "Через сайт или Telegram"],
            ["Получаете расчет", "Под ваш объем и формат работы"],
            ["Подписываем договор", "Через ЭДО"],
            ["Принимаем товар", "От поставщика или транспортной компании"],
            ["Автоматизированная упаковка", "С видеоконтролем каждого этапа"],
            ["Отправляем", "На маркетплейсы по всей России"],
            ["Получаете результат", "Отчеты и прозрачную статистику"],
          ].map(([title, text], i) => (
            <div key={title} className="rounded-lg bg-gray-100 p-5">
              <p className="text-xs font-bold">ШАГ {i + 1}</p>
              <h3 className="mt-2 text-sm font-bold">{title}</h3>
              <p className="mt-1 text-xs text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="bg-gray-50 px-6 py-16">
        <h2 className="text-center text-2xl font-bold">Услуги фулфилмента</h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          Полный цикл обработки товара от приемки до доставки.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Приемка и сортировка", "Принимаем поставки любого объема и размещаем товар на адресное хранение."],
            ["Проверка на брак", "Контроль качества перед отправкой покупателю."],
            ["Автоматизированная упаковка", "Автоматические линии и видеоконтроль каждого заказа."],
            ["Сборка заказов", "Быстрая комплектация заказов по данным маркетплейсов."],
            ["Отправка на маркетплейсы", "FBO и FBS для всех крупных площадок."],
            ["Хранение товаров", "Безопасное адресное хранение продукции."],
            ["Интеграции", "Синхронизация с маркетплейсами и CRM."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-lg border-t-4 border-[#40c4d0] bg-white p-5 shadow-sm"
            >
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="mt-2 text-xs text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ПОЧЕМУ ВЫБИРАЮТ BOXPACK */}
      <section className="bg-[#1a2a52] px-6 py-16 text-white">
        <h2 className="text-center text-2xl font-bold">Почему выбирают BOXPACK</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Скорость", "До 20 000 товаров за смену и отправка день в день."],
            ["Точность", "До 99.8% точность сборки благодаря автоматизации."],
            ["Надежность", "Страхование товара и круглосуточный контроль."],
            ["Поддержка", "Персональный менеджер и оперативная помощь."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg bg-[#253a6b] p-5">
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="mt-2 text-xs text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}