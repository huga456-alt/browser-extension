export const HeroSection = () => {
  return (
    <section className="gradient-surface section-padding" id="hero">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 animate-fade-up">
          <span className="badge">CRM Studio</span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            CRM Studio - Внедрение CRM систем за 1-4 недели
          </h1>
          <p className="text-lg text-slate-600 sm:text-xl">
            Помогаем командам продаж автоматизировать процессы, повысить конверсию и создать
            прозрачную аналитику за счет правильно подобранной CRM.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
            >
              Записаться на аудит
            </a>
            <a
              href="#cases"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-primary hover:text-primary"
            >
              Посмотреть кейсы
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-600">
            <div>
              <p className="text-2xl font-semibold text-slate-900">120+</p>
              <p>Внедрений</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-900">92%</p>
              <p>Довольных клиентов</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-900">15</p>
              <p>Сертифицированных экспертов</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 top-10 h-24 w-24 rounded-3xl bg-primary/10 blur-xl" />
          <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-primary/20 blur-2xl" />
          <div className="card animate-fade-up">
            <div className="border-b border-slate-100 p-6">
              <p className="text-sm font-medium text-slate-500">Результаты внедрения</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                +38% к конверсии в сделки
              </p>
            </div>
            <div className="space-y-4 p-6">
              {[
                "Автоматизация воронок и задач",
                "Интеграция телефонии и мессенджеров",
                "Единая аналитика продаж",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="card mt-6 animate-float-slow">
            <div className="p-6">
              <p className="text-sm font-medium text-slate-500">Срок запуска</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">1-4 недели</p>
              <p className="mt-2 text-sm text-slate-600">
                Сформируем план внедрения и быстро запустим ключевые процессы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
