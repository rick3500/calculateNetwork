const { calculateNetwork } = require('./calculateNetwork'); // replace 'your_module_file' with the name of your file
const args = process.argv.slice(2); // get command line arguments

if (args.length < 2) {
    console.log('Please provide an IP address and a subnet.');
    process.exit(1);
}

const networkInfo = calculateNetwork(args[0], args[1]);

console.log(networkInfo);
