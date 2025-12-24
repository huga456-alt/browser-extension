const systems = [
  {
    name: "amoCRM",
    description: "Идеальна для продаж и работы с лидами. Быстрый старт и удобный интерфейс.",
    tag: "#sales",
  },
  {
    name: "Kommo",
    description: "Новая версия amoCRM с фокусом на коммуникации и мессенджеры.",
    tag: "#messaging",
  },
  {
    name: "Bitrix24",
    description: "Комплексное решение для бизнеса: CRM, проекты, задачи, телефония.",
    tag: "#all-in-one",
  },
];

export const SystemsOverviewSection = () => {
  return (
    <section className="section-padding bg-slate-50" id="systems">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="section-title">Подбираем CRM под задачи бизнеса</h2>
          <p className="section-subtitle">
            Работает с ключевыми платформами и адаптируем их под процессы вашей команды.
          </p>
        </div>
        <span className="badge">Партнеры ведущих CRM</span>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {systems.map((system) => (
          <div key={system.name} className="card p-8">
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold text-slate-900">{system.name}</p>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {system.tag}
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-600">{system.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>• Настройка воронок и этапов</li>
              <li>• Интеграции с телефонией и почтой</li>
              <li>• Обучение команды и поддержка</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
