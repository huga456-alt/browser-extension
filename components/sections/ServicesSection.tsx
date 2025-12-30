const services = [
  {
    title: "Аудит",
    description: "Проводим диагностику, фиксируем узкие места и составляем дорожную карту.",
    price: "от 45 000 ₽",
  },
  {
    title: "Внедрение",
    description: "Настраиваем CRM под процессы, интегрируем сервисы и запускаем команду.",
    price: "от 120 000 ₽",
  },
  {
    title: "Расширенная интеграция",
    description: "Скрипты, BI-отчеты, сложные интеграции и автоматизация маркетинга.",
    price: "от 220 000 ₽",
  },
];

export const ServicesSection = () => {
  return (
    <section className="section-padding" id="services">
      <div className="text-center">
        <h2 className="section-title">Услуги CRM Studio</h2>
        <p className="section-subtitle">
          Гибкие пакеты работ для компаний любого размера и уровня автоматизации.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="card p-8">
            <p className="text-xl font-semibold text-slate-900">{service.title}</p>
            <p className="mt-3 text-sm text-slate-600">{service.description}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-lg font-semibold text-primary">{service.price}</span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                2-4 недели
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
