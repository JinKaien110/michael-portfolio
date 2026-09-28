
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs font-semibold text-secondary sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <span>© {new Date().getFullYear()} Michael G. Gonzaga</span>
        <span>
          Michael G. Gonzaga · also known as Shin Yamauchi
        </span>
      </div>
    </footer>
  );
}

export default Footer;