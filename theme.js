/* Accessible persisted theme toggle. Default: dark; user choice wins. */
(function () {
  const control = document.getElementById('theme-toggle');
  if (!control) return;
  const root = document.documentElement;
  const label = control.querySelector('.theme-toggle-label');
  function setTheme(theme, persist) {
    const isLight = theme === 'light';
    root.dataset.theme = isLight ? 'light' : 'dark';
    control.setAttribute('aria-pressed', String(isLight));
    const next = isLight ? 'escuro' : 'claro';
    control.setAttribute('aria-label', 'Ativar modo ' + next);
    control.setAttribute('title', 'Ativar modo ' + next);
    if (label) label.textContent = 'Modo ' + next;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = isLight ? '#f6f7fb' : '#101725';
    if (persist) {
      try { localStorage.setItem('samuel-portfolio-theme', isLight ? 'light' : 'dark'); } catch (e) {}
    }
  }
  setTheme(root.dataset.theme, false);
  control.addEventListener('click', function () {
    setTheme(root.dataset.theme === 'light' ? 'dark' : 'light', true);
  });
})();
