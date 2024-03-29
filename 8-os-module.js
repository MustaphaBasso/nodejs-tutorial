const OS = require("os");

// info about current user
const user = OS.userInfo();
console.log(user);

// method returns system uptime in seconds

console.log(` The System Uptime is ${OS.uptime()} seconds`);

const currentOS = {
  name: OS.type(),
  release: OS.release(),
  totalMem: OS.totalmem(),
  freeMem: OS.freemem(),
};

console.log(currentOS);