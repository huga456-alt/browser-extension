const cases = [
  {
    company: "Сеть клиник Medline",
    result: "+45% к повторным обращениям за 3 месяца",
    details: "Настроили омниканальные коммуникации и автоматические напоминания.",
  },
  {
    company: "Девелопер Nova",
    result: "+28% конверсии из лида в сделку",
    details: "Перенесли базу, внедрили аналитические отчеты и сквозную аналитику.",
  },
  {
    company: "IT-платформа Flex",
    result: "-35% времени на рутину",
    details: "Автоматизировали этапы продаж и интегрировали HelpDesk.",
  },
];

export const CaseStudiesSection = () => {
  return (
    <section className="section-padding bg-slate-50" id="cases">
      <div className="text-center">
        <h2 className="section-title">Кейсы клиентов</h2>
        <p className="section-subtitle">Реальные результаты после внедрения CRM.</p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {cases.map((item) => (
          <div key={item.company} className="card p-8">
            <p className="text-lg font-semibold text-slate-900">{item.company}</p>
            <p className="mt-4 text-2xl font-semibold text-primary">{item.result}</p>
            <p className="mt-3 text-sm text-slate-600">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
