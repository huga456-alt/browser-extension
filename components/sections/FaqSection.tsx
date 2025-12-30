const faqs = [
  {
    question: "Сколько времени занимает внедрение CRM?",
    answer:
      "Проект длится от 1 до 4 недель в зависимости от количества процессов и интеграций.",
  },
  {
    question: "Можно ли перенести существующую базу?",
    answer: "Да, переносим контакты, сделки, задачи и историю коммуникаций.",
  },
  {
    question: "Обучаете ли вы сотрудников?",
    answer: "Проводим онлайн-сессии, даем инструкции и поддержку в течение 90 дней.",
  },
  {
    question: "Есть ли поддержка после запуска?",
    answer: "Да, выделенный менеджер и чат поддержки остаются с вами после запуска.",
  },
];

export const FaqSection = () => {
  return (
    <section className="section-padding bg-slate-50" id="faq">
      <div className="text-center">
        <h2 className="section-title">Частые вопросы</h2>
        <p className="section-subtitle">Ответы на популярные вопросы о внедрении.</p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {faqs.map((faq) => (
          <div key={faq.question} className="card p-6">
            <p className="text-base font-semibold text-slate-900">{faq.question}</p>
            <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
