import create from '../utils/create';

export default function description() {
  const descriptionLogoImg = create('img', null, null, null, ['src', './assets/img/rs.svg']);
  const descriptionLogo = create('a', 'description-logo', descriptionLogoImg, null, ['href', 'https://rs.school/js/'], ['target', '_blanc']);
  const descriptionYear = create('div', 'description-year', '2020');
  const descriptionGithub = create('a', 'description-github', '@onc157', null, ['href', 'https://github.com/onc157'], ['target', '_blanc']);
  const descriptionElement = create('div', 'description-wrapper section-outer', [descriptionGithub, descriptionYear, descriptionLogo]);

  return descriptionElement;
}
