import { createElement } from '@/helpers/createElement';
import url from '@assets/img/spinner.svg';

export const getSpinner = () =>
  createElement('img', null, ['loading'], null, null, [
    {
      name: 'src',
      value: `${url}`,
    },
  ]);
