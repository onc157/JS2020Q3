import create from '../utils/create';
import groups from '../data/groups';

export default function burger() {
  const burgerList = create('nav', 'burger-list', null);
  const mainPage = create('li', 'burger-list__item', 'Main', burgerList);
  const burgerListArr = [mainPage];
  groups.forEach((elem) => {
    burgerListArr.push(create('li', 'burger-list__item', elem.word, burgerList));
  });
  const statisctics = create('li', 'burger-list__item', 'Statistics', burgerList);
  burgerListArr.push(statisctics);
  const burgerMain = create('div', 'burger-main', burgerList);
  const burgerHeader = create('div', 'burger-header', null);
  const burgerElement = create('div', 'burger-wrapper', [burgerHeader, burgerMain]);

  return {
    burgerElement,
    burgerListArr,
    burgerList,
    burgerHeader,
    burgerMain,
  };
}
