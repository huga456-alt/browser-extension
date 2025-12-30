import type { ReactNode } from "react";

const navigation = [
  { label: "Услуги", href: "#services" },
  { label: "Этапы", href: "#steps" },
  { label: "Кейсы", href: "#cases" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contact" },
];

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="flex items-center justify-between px-6 py-4 sm:px-10 lg:px-20">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-bold">
              CS
            </div>
            <div>
              <p className="text-lg font-semibold">CRM Studio</p>
              <p className="text-xs text-slate-500">Внедрение и автоматизация</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
          >
            Бесплатная консультация
          </a>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-slate-200/60">
        <div className="grid gap-6 px-6 py-10 sm:px-10 lg:grid-cols-[2fr_1fr_1fr] lg:px-20">
          <div>
            <p className="text-lg font-semibold">CRM Studio</p>
            <p className="mt-2 text-sm text-slate-600">
              Помогаем компаниям наводить порядок в продажах, автоматизировать воронки и
              выстраивать клиентский сервис.
            </p>
          </div>
          <div className="text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Контакты</p>
            <p className="mt-2">+7 (495) 999-99-99</p>
            <p>hello@crmstudio.ru</p>
            <p>Москва, ул. Пресненская 10</p>
          </div>
          <div className="text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Полезное</p>
            <p className="mt-2">Политика обработки данных</p>
            <p>Реквизиты</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
