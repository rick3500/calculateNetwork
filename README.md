This is a learning tool and not meant for any other use. There may be errors, flaws, and omissions. Please feel free to create a pull request if you wish to add comments, corrections, or add the the learnings herein.

# Understanding CIDR and Private Network Addressing

## Introduction

Understanding how data is routed and how systems communicate is crucial. My aim is to explain the concepts of Classless Inter-Domain Routing (CIDR) and private network addressing, and why they are so important in the corporate networks today.

## What is CIDR?

CIDR is a method for allocating IP addresses and routing IP packets. Before the CIDR network addressed were introduced, it was necessary to use IP addresses that were routable between any computer network. This was true until 1993.

In 1993 the IETF (Internet Engineering Task Force) selected a trio of IP address constructs that would simplify private network addressing in a meaningful and predictable manner.

CIDR notation appends a suffix to an IP address indicating the number of network address prefix bits. For example, 192.168.1.0/24 tells us that the first 24 bits of an IPv4 IP address is the network address. We will get into the details a little later on how this works. For now just let that rest in your mind as we progress forward.

## Why Do we use CIDR?

CIDR helps us separate networks and allows the company to support many computers on our network. By using CIDR, we can create subnets within our network, which can help organize our systems based on their function, business, units, locations, etc. This makes it easier to manage network traffic and enhances network performance. We will delve further into how all of this works in a future section.

## Private Network Addressing

Private networks are designed to keep our systems safe from the outside world. By using private IP addresses, we make it more difficult for an outside host to gain access to a system on our internal network. Only devices within the local network are able to see the address of another device on our private network.

## Routers and CIDR

Routers use CIDR values to segment networks and provide a logical routing network. When a packet arrives at a router, the router examines the destination IP address and compares it with entries in its routing table to determine the best path for the IP packet to arrive at the proper device with the destination IP address from the IP packet.

# What exactly is an IP Address?

## IPv4 Address

An IPv4 address is a 32-bit number that identifies a device on the internet. It is typically written as four numbers separated by periods, each number ranging from 0 to 255. This is commonly called 'dotted notation'. Each of these numbers is called an octet, representing 8 bits. For example, let's use our previously introduced IP address 192.168.1.1 this is a 32-bit IPv4 IP address represented in the 'dotted notation'.

The four octets serve a purpose in networking. The first part of the IP address is the network address, which identifies the specific network on which a device is located. The remaining part is the host address, which identifies the specific device on that network.

## Subnet Masks

A subnet mask is used in conjunction with an IP address to determine which part of the address is the network address and which part is the host address. Like an IP address, a subnet mask consists of four octets and uses the same dotted notation (Yes, this looks confusingly like an IP address but, it isn't).

A typical subnet mask is 255.255.255.0 . In binary, this would be represented as 11111111.11111111.11111111.00000000 . The 1s in the subnet mask binary representation signify the network address portion, the 0s represent the host address portion. Later we will provide a little more information on how you might see these values expressed. but for now, this is a good place to start.

When a device sends an IP packet to another device, it performs a bitwise AND operation on its own IP address and the subnet mask to find its network address. It does the same with the destination IP address. If the two network addresses match, the devices are on the same network.

By using CIDR and subnet masks, we can segment a large network into smaller subnetworks (or subnets), which can help improve network management, security, and performance. Each subnet operates as its own network, allowing us to apply security policies or performance enhancements at the subnet level.

# CIDR subnets and the various ways they may be represented

## Class A: 10.0.0.0/8

• CIDR notation: 10.0.0.0/8  
• Subnet mask: 255.0.0.0  
• Binary subnet mask: 11111111.00000000.00000000.00000000  
In this case, the /8 in the CIDR notation means that the first 8 bits are used for the network address, leaving the remaining 24 bits for host addresses. This allows for a large number of hosts within the same network.

## Class B: 192.168.0.0/16

• CIDR notation: 192.168.0.0/16  
• Subnet mask: 255.255.0.0  
• Binary subnet mask: 11111111.11111111.00000000.00000000  
Here, the /16 in the CIDR notation means that the first 16 bits are used for the network address, leaving the remaining 16 bits for host addresses. This allows for a moderate number of hosts within the same network.

## Class C: 172.16.1.0/24

• CIDR notation: 172.16.1.0/24  
• Subnet mask: 255.255.255.0  
• Binary subnet mask: 11111111.11111111.11111111.00000000  
In this case, the /24 in the CIDR notation means that the first 24 bits are used for the network address, leaving the remaining 8 bits for host addresses. This allows for a smaller number of hosts within the same network.

## Subclassing Addresses

Using the basic Classes to further breakdown the network groups for your usage  
Subclassing, or subnetting, is the process of dividing a network into smaller networks, or subnets. This can be done by borrowing bits from the host portion of the IP address to use for the network address. For example, a Class C network could be subnetted into multiple smaller networks by using a subnet mask of 255.255.255.128 (/25 in CIDR notation). This would create two subnets, each capable of hosting 126 hosts.  
Subnetting allows for more efficient use of IP address space and can improve network performance and security. By creating smaller, more manageable networks, we can reduce network congestion and isolate network issues. Additionally, subnetting can enhance security by limiting the broadcast domain and providing better control over traffic flow.

## Tell me more about Subnetting

Subnetting and Binary Representation  
In the example of a subnet mask of 255.255.255.128, the last octet is 128. in binary, this is 10000000. this means that the first bit of the last octet is used for subnetting, while the remaining 7 bits are used for host addresses within each subnet.

## Let's calculate our networks and hosts

The number of subnets can be calculated using the formula:  
2^n , where n is the number of bits used for subnetting. In this case we are using 1 bit for subnetting, we have 2^1 which is equal to 2 subnets.  
The number of hosts per subnet is calculated by the formula:  
2^n - 2 , where n is the number of bits used for the host addresses. The -2 accounts for the network address and broadcast address, which cannot be assigned to a host. In this case, since we are using 7 bits for host addresses, we have 2^7 - 2 = 126 . meaning we can have 126 hosts on each of the subnets 126 + 126 = 252 hosts in total in these two networks.

## Network and Broadcast Domains

A network domain is a logical division of a network where all devices can reach each other at the data link layer (Layer 2) of the OSI model. In other words, devices within the same network domain can communicate directly with each other without the need of a router.  
A broadcast domain is a logical division of a network where if one device sends a broadcast message, all other devices in the same network will receive the broadcast message. In terms of subnetting, each subnet forms its own broadcast domain. This helps to reduce network congestion by limiting the scope of the broadcast traffic.

## Broadcast Messages

In a computer network, broadcasting refers to transmitting a packet that will be received by every device on the network. This is in contrast with a unicast addressing in which a host sends datagrams to another single host identified by a unique address.  
Broadcast messages are often used for tasks such as network discovery, service annoucements, and address resolution. Each device evaluates the message and determines whether it is relevant or not based on its network address. Devices that recognize the message's relevance process it further, while the others simply discard/drop it.

## Importance of Broadcast Messages and Subdomains

Broadcast messages are important because they allow a device to communicate with all other devices on the network simultaneously. This is useful for tasks that require the message to reach multiple devices at once, such as announcing services or sending alerts.  
However, too many broadcast messages can lead to network congestion. This is where subdomains come in. By dividing a large network into smaller subdomains (subnets), we can limit the scope of broadcast messages to just the devices withing the subnet. This helps reduce network traffic and improved performance. Remember, even reading and discarding a packet takes process time by the devices on the broadcast network.  
Router vs Layer 2 Switch  
Routers and Layer 2 switches are both crucial networking devices, but they operate at different layers of the OSI model and serve different functions.  
• Router: Routers operate at Layer 3 (Network) of the OSI model. They provide connectivity between different networks and also allow communication between different hosts even if they are connected to separate networks. Routers use IP addresses to route packets to their destinations.  
• Layer 2 Switch: Layer 2 switches operate at, you guessed it, Layer 2 (Data link Layer) of the OSI model. They primarily provide connectivity within a single nework (or LAN - local area network). Switches learn the MAC addresses of all devices connected to them and use this information to forward packets to the correct device. Layer 2 switches are generally faster than routers because they don’t' take up time looking at the Network layer header information.

## OSI Layers (Open Systems Interconnection)

The OSI model is a conceptual framework that describes how data is sent and received over a network. The model was developed by the International Organization for Standardization in 1984. the OSI 'stack' is divided into 7 layers, each with a specific function.

1.  **Physical Layer (Layer 1):** This is the lowest layer of the OSI model. It is responsible for the actual physical connection between devices, such as cables and switches. It transmits individual bits from one node to the next.
    1.  **purpose:** This layer handles the raw bits of data. Binary 1s and 0s
    2.  **protocol:** Protocols at this layer define the electrical and physical specifications for devices. Examples include Ethernet for wired connections and IEEE 802.11 for wireless connections.
2.  **Data Link Layer (Layer 2):** This layer is responsible for node-to-node delivery of messages. It make sure data transfer is error-free from one node to another, over the physical layer.
    1.  **purpose:** This layer handles frames. Frames include raw bits of data, along from the physical layer including addressing information (MAC addresses) and error-checking information.
    2.  **protocol:** at this layer provide node-to-node data transfer. Examples include PPP (Point-to-Point) and MAC(Media Access Control)
3.  **Network Layer (Layer 3):** The network is responsible for routing and transferring data from one point to another. It provides switching and routing technologies, creating logical paths for data transmission.  
    \*\*purpose:\*\*This layer handles packets. A packet includes the frame from Layer 2 along with network addressing (IP addresses) and routing information.  
    Protocols at this layer handle routing and transferring data from one point to another. An example is IP (Internet Protocol)
4.  **Transport Layer (Layer 4):** This layer provides transparent transfer of data between end systems. It is responsible for end-to-end error recovery and flow control.
    1.  **purpose:** This layer handles segments (for TCP) or datagrams (for UDP). These include the packet from Layer 3, along with port numbers and other information to support data transmission.
    2.  **protocol:** Protocols at this layer provide transparent transfer of data between end systems. Examples include TCP(Transmission Control Protocol) and UDP (User Datagram Protocol)
5.  **Session Layer (Layer 5):**\*\*\*\* This layer establishes, manages, and terminates connections between applications. It sets up , coordinates, and terminates conversations, exchanges, and dialogs between the applications.
    1.  **purpose:** This layer is data. This layer establishes, manages, and terminates connections between applications.
    2.  **protocol:** Protocols at this layer establish, manage, and terminate connections between applications. Examples include NFS (Network File System) and SQL (Structured Query Language)
6.  **Presentation Layer (Layer 6):** This layer provides independence from differences in data representation (e.g. encryption) by translating from application to network format and vice versa. It transforms data to provide a standard interface for the application layer.
    1.  **purpose:** This layer is also data. But this layer translates the data into a format that the application layer can understand.
    2.  **protocol:** Protocols at this layer provide independence from differences in data representation. Examples include TLS (Transport Layer Security)
7.  **Application Layer (Layer 7):** This is the layer closest to the end user. It interacts directly with the software application, providing network services to the application software.
    1.  **purpose:** This is the actual application data that the user interacts with.
    2.  **protocol:** Protocols at this layer interact directly with the software application. Examples include HTTP(Hypertext Transfer Protocol), HTTPS(HTTP secure), and FTP (File Transfer Protocol)

Sample of how networks may be subnetted to create smaller internally routable networks

Let's have a little  
mathematical fun with routing:

Let's say we have a Class 'A' address (10.0.0.0/8) subnetted with a subnet mask  
of 255.255.248.0

in other works we are dividing (10.0.0.0/21)

This is what the network would look like for the following host  
addresses:

10.1.5.2,  
10.1.11.3,  
10.1.22.1,  
10.1.128.200

```
Network: 10.1.0.0/21 (10.1.0.0 to 10.1.7.255)
|
|--- IP: 10.1.5.2


Network: 10.1.8.0/21 (10.1.8.0 to 10.1.15.255)
|
|--- IP: 10.1.11.3


Network: 10.1.16.0/21 (10.1.16.0 to 10.1.23.255)
|
|--- IP: 10.1.22.1


Network: 10.1.128.0/21 (10.1.128.0 to 10.1.135.255)
|
|--- IP: 10.1.128.200



Let's look at the math behind what we see above
```

# Let's look at the math that makes what we see above work

What we are doing above is stealing some of the Network address for the purpose of creating a set of Networks that can be internally routed.

10.0.0.0/8 is a Class 'A' address. This means that only the first octet is always matched. it has a subnet mask of 255.0.0.0
But we don't want to limit ourselves to a single network, we want to break down (subclass) the large network into smaller networks.
This will provide us less hosts, but the trade off is we will have smaller collision domains. The smaller collision domains mean
that we will have less broadcast messages to handle. A host that doesn't care about a particular message can simply discard it, but
there won't be as many of those broadcasts. The broadcasts (by default) do not route between networks.
The way we create more networks is to borrow from the Host space. We borrow by increasing the Subnet Mask to encompass more of the 10.0.0.0 
host space (the hosts space is the 0.0.0 portion of this class 'A' space)

In order to see this we will look at the binary map of the IP address 10.0.0.0
11111111 00000000 00000000 00000000 = 10.0.0.0. the 11111111 is the 8-bit mask of the Subnet Mask.

We said we would borrow from the host portion (reducing our number of total hosts, but increasing our number of networks). We will examine
the IP address 10.1.128.200 with subnet CIDR /21 or subnet mask 255.255.248.0. when we put the 21-bit mask in place we will discover how
the subnet mask was derived:

10.1.128.200 255.255.248.0  we will break down the ip address into octets to make the process easier to visualize
10          1           128         200         subnet mask 255         255         248         0
00001010    00000001    10000000    11111000                11111111    11111111    11111000    00000000

00001010    00000001    10000000    11001000    IP ADDRESS IN BINARY
11111111    11111111    11111000    00000000    SUBNET MASK IN BINARY
----------------------------------------------  We will perform a binary AND operation
00001010    00000001    10000000    00000000    This is our network ADDRESS  which is 10.1.128.0

10          1           136         200
00001010    00000001    10001000    11111000    IP ADDRESS IN BINARY
11111111    11111111    11111000    00000000    SUBNET MASK IN BINARY
----------------------------------------------  We will perform a binary AND operation
00001010    00000001    10001000    00000000    Network is 10.1.136.0

10          1           135         200
00001010    00000001    10000000    11111000    IP ADDRESS IN BINARY
11111111    11111111    10000111    00000000    SUBNET MASK IN BINARY
----------------------------------------------  We will perform a binary AND operation
00001010    00000001    10000000    00000000    Network is 10.1.128.0