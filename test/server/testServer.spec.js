import Glue from 'glue'

import manifest from './manifest.json'
import {
    expect
} from 'chai'
import {
    doesNotThrow
} from 'should'

const options = {
    relativeTo: __dirname
}

export const testServer = async () => {
    try {
        process.on('SIGTERM', err => {
            // logger.error(err)
            process.exit(1)
        });
        const server = await Glue.compose(manifest, options)


        return server

        await server.start();

        console.log('server has started')
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}