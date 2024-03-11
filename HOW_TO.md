````
# Network Calculator

## Overview
The `calculateNetwork` function is used to calculate network details given an IP address and either a subnet mask or a CIDR value.

## Function Signature
```javascript
calculateNetwork(ipAddress, subnet)
````

## Parameters

- `ipAddress`: A string representing the IP address. It can be in the form of `'192.168.1.1'` or `'192.168.1.1/21'`.
- `subnet`: A string representing the subnet mask or CIDR value. It can be in the form of `'255.255.248.0'` or `'/21'`.

## Return Value

The function returns an object with the following properties:

- `networkAddress`: The network address of the given IP address and subnet.
- `broadcastAddress`: The broadcast address of the given IP address and subnet.
- `firstUsableIP`: The first usable IP address in the network.
- `lastUsableIP`: The last usable IP address in the network.

## Usage

You can use the function in the following ways:

- To calculate network details given an IP address and a subnet mask:
- To calculate network details given an IP address in CIDR notation:
- To calculate network details given an IP address and a CIDR value:

Please replace `'192.168.1.1'`, `'255.255.248.0'`, and `'/21'` with your actual IP address and subnet mask or CIDR value.

## Testing

You can test the function using the provided test cases in the `describe` block. Make sure to add your assertions for the tests where the IP address is given in CIDR notation and the CIDR value is given separately.

**JavaScript**

```javascript
const result = calculateNetwork("192.168.1.1", "/21");
```

**JavaScript**

```javascript
const result = calculateNetwork("192.168.1.1/21");
```

**JavaScript**

```javascript
const result = calculateNetwork("192.168.1.1", "255.255.248.0");
```

**JavaScript**

```javascript
you can run from the command line using:

node run.js 192.168.1.1 /21

```
