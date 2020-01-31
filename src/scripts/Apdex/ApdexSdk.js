// this is the core of the SDK
import { dataDigester } from './dataDigester';
// these could be like plugins, improved over time, and extending the SDK
import { topAppsByHostGetter } from './topAppsByHostGetter';
import { appToHostsAdder } from './appToHostsAdder';
import { appToHostsRemover } from './appToHostsRemover';

export const ApdexSdk = props => {
  const { digestHostAppData, hostAppEntryDigester, hostAppEntryGarbager } = dataDigester();
  const orderedMap = digestHostAppData(props.list);

  return Object.freeze({
    ...topAppsByHostGetter(orderedMap),
    ...appToHostsAdder(props.list, orderedMap, hostAppEntryDigester),
    ...appToHostsRemover(props.list, orderedMap, hostAppEntryGarbager)
  });
};
export default ApdexSdk;
