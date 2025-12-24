const comparison = [
  {
    title: "До внедрения",
    points: [
      "Разрозненные данные по клиентам",
      "Потеря лидов и задач",
      "Отсутствие прозрачной аналитики",
      "Сложность контроля KPI",
    ],
  },
  {
    title: "После внедрения",
    points: [
      "Единая база клиентов и сделок",
      "Автоматические напоминания и задачи",
      "Сквозная аналитика и отчеты",
      "Прозрачные KPI и рост продаж",
    ],
  },
];

export const ComparisonSection = () => {
  return (
    <section className="section-padding" id="comparison">
      <div className="text-center">
        <h2 className="section-title">CRM меняет хаос на системный рост</h2>
        <p className="section-subtitle">
          Зафиксируем текущее состояние, настроим процессы и дадим команде понятные правила работы.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {comparison.map((item) => (
          <div key={item.title} className="card p-8">
            <p className="text-xl font-semibold text-slate-900">{item.title}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
