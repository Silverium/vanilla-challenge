import { topAppsByHostGetter } from './topAppsByHostGetter';
import { dataDigester } from './dataDigester';

export const ApdexSdk = props => {
  const { digestHostAppData } = dataDigester();
  const orderedMap = digestHostAppData(props.data);

  return Object.freeze({
    ...topAppsByHostGetter(orderedMap)
  });
};
export default ApdexSdk;
