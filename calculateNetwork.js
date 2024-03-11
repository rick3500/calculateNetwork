const ip = require('ip');

function calculateNetwork(ipAddress, subnet) {
    let subnetInfo;

    // Check if subnet is in CIDR notation
    if (subnet && subnet.startsWith('/')) {
        subnetInfo = ip.cidrSubnet(ipAddress + subnet);
    } else if (subnet) {
        subnetInfo = ip.subnet(ipAddress, subnet);
    } else {
        subnetInfo = ip.cidrSubnet(ipAddress);
    }

    console.log(`Network Address: ${subnetInfo.networkAddress}`);
    console.log(`Broadcast Address: ${subnetInfo.broadcastAddress}`);
    console.log(`First Usable IP: ${ip.fromLong(ip.toLong(subnetInfo.networkAddress) + 1)}`);
    console.log(`Last Usable IP: ${ip.fromLong(ip.toLong(subnetInfo.broadcastAddress) - 1)}`);

    return {
        networkAddress: subnetInfo.networkAddress,
        broadcastAddress: subnetInfo.broadcastAddress,
        firstUsableIP: ip.fromLong(ip.toLong(subnetInfo.networkAddress) + 1),
        lastUsableIP: ip.fromLong(ip.toLong(subnetInfo.broadcastAddress) - 1)
    };
}


module.exports = {
    calculateNetwork
}