(() => {
  const themeButton = document.querySelector('.theme-toggle');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preference;
  try { preference = localStorage.getItem('appearance'); } catch (_) { /* Storage is optional. */ }
  const applyTheme = (dark) => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.textContent = dark ? 'Light appearance' : 'Dark appearance';
  };
  applyTheme(preference ? preference === 'dark' : systemTheme.matches);
  themeButton.hidden = false;
  themeButton.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    preference = dark ? 'dark' : 'light';
    applyTheme(dark);
    try { localStorage.setItem('appearance', preference); } catch (_) { /* Storage is optional. */ }
  });
  systemTheme.addEventListener('change', event => { if (!preference) applyTheme(event.matches); });

  const search = document.querySelector('#publication-search');
  if (!search) return;
  document.querySelector('.publication-tools').hidden = false;
  const sections = [...document.querySelectorAll('.publication-section')];
  // Fix each paper's original reverse number before filtering, so searches
  // keep stable numbers. This also handles papers added in future edits.
  sections.forEach(section => {
    const papers = [...section.querySelectorAll('.publication')];
    section.querySelector('.publication-list').start = papers.length;
    papers.forEach((paper, index) => { paper.value = papers.length - index; });
  });
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const total = document.querySelectorAll('.publication').length;
  let category = 'all';
  function filter() {
    const terms = search.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    let count = 0;
    sections.forEach(section => {
      let matches = 0;
      section.querySelectorAll('.publication').forEach(paper => {
        const text = paper.textContent.toLocaleLowerCase();
        const visible = (category === 'all' || category === section.dataset.category) && terms.every(term => text.includes(term));
        paper.hidden = !visible;
        if (visible) matches++;
      });
      section.hidden = !matches;
      section.querySelector('.section-heading > span').textContent = String(matches).padStart(2, '0');
      count += matches;
    });
    document.querySelector('#search-status').textContent = `${count} of ${total} publications`;
    document.querySelector('#no-results').hidden = count !== 0;
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.filter;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    filter();
  }));
  search.addEventListener('input', filter);
  filter();
})();
