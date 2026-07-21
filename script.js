// Позначка часу останнього завантаження — проста перевірка, що деплой оновився.
document.getElementById('build').textContent =
  new Date().toLocaleString('uk-UA', { dateStyle: 'medium', timeStyle: 'short' });
