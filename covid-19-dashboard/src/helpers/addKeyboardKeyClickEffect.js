export const addKeyboardKeyClickEffect = (key) => {
  key.addEventListener('mousedown', (e) => {
    e.target.closest('button').classList.add('keyboard__key--active');
  });
  key.addEventListener('mouseup', (e) => {
    e.target.closest('button').classList.remove('keyboard__key--active');
  });
  key.addEventListener('mouseleave', (e) => {
    e.target.closest('button').classList.remove('keyboard__key--active');
  });
};
