import { insertByOrder } from '@/scripts/utils';

export const dataDigester = () => {
  const digestHostAppData = (data = []) => {
    const apdexByHost = new Map();
    data.forEach(entry => {
      const { host = [] } = entry;
      host.forEach(hostName => {
        if (apdexByHost.has(hostName)) {
          // working with reference types we don't need to reset the array
          // but simply modify it in place
          const arrayOfEntries = apdexByHost.get(hostName);
          const condition = (a, b) => a.apdex < b.apdex;
          insertByOrder(arrayOfEntries, entry, condition);
        } else {
          apdexByHost.set(hostName, [entry]);
        }
      });
    });

    return apdexByHost;
  };
  return Object.freeze({
    digestHostAppData
  });
};
