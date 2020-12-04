import field from '../dom-components/field';

export default function clearField() {
  console.log(field);
  field.classList.toggle('field-wrapper--clear');
  console.log('Всё отчищено!');
  // eslint-disable-next-line no-implied-eval
  setTimeout(() => {
    field.innerHTML = '';
    field.classList.toggle('field-wrapper--clear');
  }, 500);
}
