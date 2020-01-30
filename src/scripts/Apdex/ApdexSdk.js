import { topAppsByHostGetter } from './topAppsByHostGetter';

export const ApdexSdk = props => {
  return Object.freeze({
    ...topAppsByHostGetter(props)
  });
};
export default ApdexSdk;
