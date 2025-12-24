const advantages = [
  {
    title: "Внедрение под ключ",
    description: "Берем на себя анализ, настройку и запуск, чтобы команда быстро начала работать.",
  },
  {
    title: "Экспертиза в продажах",
    description: "Глубоко разбираемся в воронках, скриптах и мотивации менеджеров.",
  },
  {
    title: "Прозрачная аналитика",
    description: "Настраиваем отчеты для собственников и руководителей в реальном времени.",
  },
  {
    title: "Сопровождение 90 дней",
    description: "Остаемся на связи после запуска, улучшаем настройки и обучаем новых сотрудников.",
  },
];

export const AdvantagesSection = () => {
  return (
    <section className="section-padding bg-slate-50" id="advantages">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="section-title">Почему CRM Studio</h2>
          <p className="section-subtitle">
            Вы получаете сильную команду внедрения и индивидуальный подход к каждому проекту.
          </p>
        </div>
        <a
          href="#contact"
          className="rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
        >
          Получить презентацию
        </a>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {advantages.map((advantage) => (
          <div key={advantage.title} className="card p-8">
            <p className="text-lg font-semibold text-slate-900">{advantage.title}</p>
            <p className="mt-3 text-sm text-slate-600">{advantage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
