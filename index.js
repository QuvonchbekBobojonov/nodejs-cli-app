const getArgs = require('./helpers/args')

const startCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        // help
    }
    if (args.s) {
        // save ctiy
    }
    if (args.t) {
        // save token
    }

    // result
}

startCLI()