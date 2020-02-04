export const rankedAppsByHost = new Map();
export const host1 = 'host1';
export const host2 = 'host2';
let counter = 100;
while (counter > 0) {
  const appData = {
    apdex: counter,
  };
  if (counter > 30) {
    const host1Apps = rankedAppsByHost.get(host1);
    if (host1Apps) {
      host1Apps.push(appData);
    } else {
      rankedAppsByHost.set(host1, [appData]);
    }
  } else {
    const host2Apps = rankedAppsByHost.get(host2);
    if (host2Apps) {
      host2Apps.push(appData);
    } else {
      rankedAppsByHost.set(host2, [appData]);
    }
  }
  counter -= 1;
}
