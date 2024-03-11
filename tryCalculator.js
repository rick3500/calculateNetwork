const {calculateNetwork} = require('./calculateNetwork')


// Example usage:

var IPAddress = '10.1.128.200';
var SubnetMask = '255.255.248.0';

console.log();
console.log("GIVEN: calculateNetwork('IPAddress', 'SubnetMask')");
console.log();

 `${calculateNetwork(IPAddress, SubnetMask)}` ;

 console.log();
console.log("GIVEN: calculateNetwork('IPAddress/CIDR')");
console.log();

 `${calculateNetwork(IPAddress + '/24')}`;

console.log();
console.log("GIVEN: calculateNetwork('IPAddress', 'CIDR')");
console.log();

 `${calculateNetwork(IPAddress,'/24')}`;