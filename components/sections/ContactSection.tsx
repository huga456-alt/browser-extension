export const ContactSection = () => {
  return (
    <section className="section-padding" id="contact">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="section-title">Готовы внедрять CRM?</h2>
          <p className="section-subtitle">
            Оставьте контакты — свяжемся в течение 15 минут, проведем экспресс-аудит и предложим
            решение.
          </p>
          <div className="mt-8 space-y-4 text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                ☎
              </span>
              +7 (495) 999-99-99
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                ✉
              </span>
              hello@crmstudio.ru
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                ⌂
              </span>
              Москва, ул. Пресненская 10
            </div>
          </div>
        </div>
        <div className="card p-8">
          <h3 className="text-lg font-semibold text-slate-900">Заполните форму</h3>
          <p className="mt-2 text-sm text-slate-600">
            Мы подготовим персональное предложение и пришлем расчет бюджета.
          </p>
          <form className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                placeholder="Имя"
                type="text"
              />
              <input
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                placeholder="Компания"
                type="text"
              />
            </div>
            <input
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
              placeholder="Телефон"
              type="tel"
            />
            <textarea
              className="min-h-[120px] w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
              placeholder="Расскажите о задаче"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
            >
              Отправить заявку
            </button>
            <p className="text-xs text-slate-500">
              Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
