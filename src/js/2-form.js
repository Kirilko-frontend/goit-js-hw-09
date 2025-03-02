// 2-form.js

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Объект formData
let formData = { email: '', message: '' };

// Функция для обновления formData и записи в localStorage
function updateStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Проверяем наличие данных в localStorage при загрузке страницы
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.email.value = formData.email || '';
  form.message.value = formData.message || '';
}

// Обработчик события input
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  updateStorage();
});

// Обработчик события submit
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
