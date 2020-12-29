import { createElement } from '@helpers';

export const fullScreenButton = (wrapper) => {
  const container = wrapper;
  let fsButton = null;
  let currentElem = null;

  container.onmouseover = (e) => {
    if (currentElem) return;
    const target = e.target.closest('.wrapper>div');
    if (!target) return;
    if (!container.contains(target)) return;
    currentElem = target;
    fsButton = createElement(
      'div',
      null,
      ['full-screen-button'],
      '<i class="material-icons md-dark">fullscreen</i>'
    );
    const changeButtonIcon = () => {
      if (target.classList.contains('full-screen')) {
        fsButton.firstChild.innerHTML = 'fullscreen_exit';
      } else {
        fsButton.firstChild.innerHTML = 'fullscreen';
      }
    };
    fsButton.onclick = () => {
      target.classList.toggle('full-screen');
      changeButtonIcon();
    };
    changeButtonIcon();
    target.append(fsButton);
  };

  container.onmouseout = (e) => {
    if (!currentElem) return;
    let { relatedTarget } = e;
    while (relatedTarget) {
      if (relatedTarget === currentElem) return;
      relatedTarget = relatedTarget.parentNode;
    }
    fsButton.remove();
    currentElem = null;
  };
};
