const partners = [
  {
    name: "amoCRM Gold Partner",
    description: "Сертифицированные внедрения и обучение команд продаж.",
  },
  {
    name: "Kommo Solution",
    description: "Интеграции мессенджеров и омниканальные процессы.",
  },
  {
    name: "Bitrix24 Expert",
    description: "Сложные бизнес-процессы и автоматизация для крупных команд.",
  },
];

export const CertificatesSection = () => {
  return (
    <section className="section-padding" id="certificates">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="section-title">Сертификаты партнеров</h2>
          <p className="section-subtitle">
            Подтвержденная экспертиза в ведущих CRM платформах.
          </p>
        </div>
        <span className="badge">Официальные статусы</span>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {partners.map((partner) => (
          <div key={partner.name} className="card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              ★
            </div>
            <p className="mt-4 text-base font-semibold text-slate-900">{partner.name}</p>
            <p className="mt-2 text-sm text-slate-600">{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
