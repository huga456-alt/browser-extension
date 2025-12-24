const steps = [
  "Проводим экспресс-аудит процессов и KPI",
  "Формируем карту воронок и сценариев",
  "Настраиваем CRM и права доступа",
  "Интегрируем телефонию, почту, мессенджеры",
  "Обучаем сотрудников и готовим инструкции",
  "Сопровождаем запуск и оптимизацию",
];

export const ImplementationStepsSection = () => {
  return (
    <section className="section-padding" id="steps">
      <div className="text-center">
        <h2 className="section-title">6 шагов до новой CRM</h2>
        <p className="section-subtitle">
          Четкий план внедрения обеспечивает результат и быструю окупаемость.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step} className="card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-lg font-semibold text-primary">
              0{index + 1}
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-900">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
