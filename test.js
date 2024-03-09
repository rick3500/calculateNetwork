const assert = require('assert');
const { calculateNetwork } = require('./calculateNetwork'); // replace with your file name

describe('Network Calculator', function() {
    it('should calculate network details given IP address and subnet mask', function() {
        const result = calculateNetwork('192.168.1.1', '255.255.248.0');
        assert.strictEqual(result.networkAddress, '192.168.0.0');
        assert.strictEqual(result.broadcastAddress, '192.168.7.255');
        assert.strictEqual(result.firstUsableIP, '192.168.0.1');
        assert.strictEqual(result.lastUsableIP, '192.168.7.254');
    });

    it('should calculate network details given IP address in CIDR notation', function() {
        const result = calculateNetwork('192.168.1.1/21');
        // Add your assertions here based on the expected result
    });

    it('should calculate network details given IP address and CIDR value', function() {
        const result = calculateNetwork('192.168.1.1', '/21');
        // Add your assertions here based on the expected result
    });
});
