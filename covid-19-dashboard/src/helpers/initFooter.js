import { createElement } from '@/helpers/createElement';
import logo from '@assets/img/rs_school_js.svg';

export const initFooter = () => {
  const developers = [
    'vladimirm85',
    'onc157',
    'inspectorCode',
    'fr3ud',
    'saintsanta',
  ].map((developer) =>
    createElement(
      'a',
      null,
      ['footer-wrapper__developers--item'],
      `${developer}`,
      null,
      [
        { name: 'target', value: '_blank' },
        {
          name: 'href',
          value: `https://github.com/${developer}`,
        },
      ]
    )
  );

  const footerDevelopers = createElement(
    'div',
    null,
    ['footer-wrapper__developers'],
    null,
    developers
  );

  const footerYear = createElement(
    'div',
    null,
    ['footer-wrapper__year'],
    '2020'
  );

  const footerLogo = createElement(
    'img',
    null,
    ['footer-wrapper__school--logo'],
    null,
    null,
    [
      {
        name: 'src',
        value: `${logo}`,
      },
    ]
  );

  const footerSchool = createElement(
    'a',
    null,
    ['footer-wrapper__school'],
    null,
    [footerLogo],
    [
      { name: 'target', value: '_blank' },
      { name: 'href', value: 'https://rs.school/js/' },
    ]
  );

  const button42 = createElement('div', null, ['button-42'], '42');

  button42.addEventListener('click', () =>
    document
      .querySelectorAll('.light-mode')
      .forEach((el) => el.classList.toggle('light'))
  );

  return createElement('div', null, ['footer-wrapper', 'light-mode'], null, [
    button42,
    footerDevelopers,
    footerYear,
    footerSchool,
  ]);
};
