

const deviceIds = ["213300549","213300587","213300535","213300544","213300540","213299317","213299304","213299343","213299291","213299320","213300745","213300771","213300746","213300788","213300747","213299480","213299457","213299493","213299442","213299441","213300955","213300976","213300989","213301005","213301001","213301150","213301114","213301078","213301115","213301085","213301221","213301277","213301433","213301330","213301337","213300642","213300640","213300641","213300649","213300692","213300850","213300863","213300877","213300902","213300876","213301801","213301724","213301914","213301799","213301782","213302214","213302175","213302271","213302282","213302137","213299188","213299225","213299186","213299229","213299187"];

const notsorted = [30,40,15,5];

const sorted = notsorted.sort((a, b) => deviceIds.indexOf(a) - deviceIds.indexOf(b));

console.log(sorted);

