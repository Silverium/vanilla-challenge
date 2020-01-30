export const topAppsByHostGetter = (props = {}) => {
  const { data } = props;
  const getTopAppsByHost = () => {
    console.log(data);
  };
  return Object.freeze({
    getTopAppsByHost
  });
};
export default topAppsByHostGetter;
