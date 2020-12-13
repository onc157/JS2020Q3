import field from '../dom-components/field';

export default function clearField() {
  field.classList.toggle('field-wrapper--clear');
  // eslint-disable-next-line no-implied-eval
  setTimeout(() => {
    field.innerHTML = '';
    field.classList.toggle('field-wrapper--clear');
  }, 500);
}
