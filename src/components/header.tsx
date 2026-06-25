const Header = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <div className="flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="Debt Help Logo"
            className="h-14 w-auto rounded-2xl shadow-sm"
          />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
              Debt Help
            </p>
            <p className="text-sm text-slate-500">
              Financial Freedom
            </p>
          </div>
        </div>

        <a
          href="tel:+12892013339"
          className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
        >
          📞 1-289-201-3339
        </a>
      </div>
    </header>
  );
};

export default Header;


