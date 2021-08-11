const chalk = require('chalk')

const banner = '*'
const { green, red } = chalk
const logBanner = green(banner)
const warnBanner = red(banner)

const log = function (text = '', indent = 0) {
  const space = '  '.repeat(indent)
  const line = space + text
  console.log(line)
}

const info = function (msg) {
  console.log(msg ? ` ${logBanner} ${msg}` : '')
}

const warn = function (msg) {
  console.warn(msg ? ` ${warnBanner} ⚠️  ${msg}\n` : '')
}

const fatal = function (error) {
  const msg = error.message
  console.error(msg ? ` ${warnBanner} ⚠️  ${msg}` : '')
  process.env.NODE_ENV === 'dev' && console.error(error)
  process.exit(1)
}

const PRINT = {
  ADD: {
    HELP: () => {
      log(`
  Description
  Add a new icon set config. Options that are not supplied as arguments will be prompted.

  Usage
    $ glyphs add [--key <file-key> --token <access-token> --replace]

  Options
    --key, -k      File key for the Figma file
    --token, -t    Personal access token from Figma
    --replace, -r  Overwrite any existing configuration for <name> or <key>
    --help, -h     Displays this message`)
      log()
    },
    INFO: () => {
      log()
      log('Add a new icon set config by providing a file key and access token from Figma', 1)
      log('Instructions can be found at https://glyphs.fyi/docs/cli', 1)
      log()
    },
    FAIL: () => {
      log()
      log('Operation failed', 1)
      log('File key and access token are required to continue', 1)
    },
    CONFLICT: ({ name }) => {
      log()
      log(`Configuration with that file key already exists: "${name}"`, 1)
      log()
    },
    SUCCESS: ({ name }) => {
      log()
      log(`Successfully configured the "${name}" file`, 1)
      log()
      log(`You can run:`, 1)
      log(`glyphs sync   - to export a set to your current folder`, 2)
      log(`glyphs get    - to get the configuration settings for your file`, 2)
      log(`glyphs remove - to remove the file from your config`, 2)
    }
  },
  REMOVE: {
    HELP: () => {
      log(`
  Description
  Remove an existing icon set config by name

  Usage
    $ glyphs remove <key>

  Options
    --help, -h    Displays this message`)
      log()
    }
  },
  GET: {
    HELP: () => {
      log(`
  Description
  Get details on the icon set config

  Usage
    $ glyphs get [<key|name>]

  Options
    --help, -h     Displays this message`)
      log()
    },
    NO_CONFIG: () => {
      log('No icon files have been configured', 1)
      log('Run "glyphs add" to configure a new icon file', 1)
      log()
    },
    CONFIG: ({ name, key, token }) => {
      log(`${chalk.cyan`File Name`}:     ${name}`, 1)
      log(`${chalk.cyan`File Key`}:      ${key}`, 1)
      log(`${chalk.cyan`Access Token`}:  ${token}`, 1)
      log(`${chalk.cyan`Direct Link`}:   ${chalk.cyanBright`https://figma.com/file/${key}`}`, 1)
    }
  },
  LIST: {
    HELP: () => {
      log(`
  Description
  List configured icon sets

  Usage
    $ glyphs list

  Options
    --help, -h       Displays this message`)
      log()
    }
  },
  SYNC: {
    HELP: () => {
      log(`
  Description
  Sync a configured icon set to the current directory. Options that are not supplied as arguments will be prompted.

  Usage
    $ glyphs sync [<key|name> --set <set> --data <data-folder> --svg <svg-folder>]

  Options
    --set, -S      Name of icon set to sync
    --data, -d     Output folder for icon-set data
    --svg, -s      Output folder for SVGs
    --preview, -p  Generate a preview file
    --diff         Fetch only new and updated assets
    --categories   Specify categories to include
    --help, -h     Displays this message
  `)
      log()
    },
    NO_CONFIG: () => {
      log()
      log(`You haven't configured any files to sync`, 1)
      log(`Run "glyphs add" or "glyphs help" to get started`, 1)
      log()
    },
    NOT_FOUND: ({ query }) => {
      log(`No file containing "${query}" has been found in your config`, 1)
      log()
    }
  },
  PREVIEW: {
    HELP: () => {
      log(`
  Description
  Preview a local icon set in the browser.

  Usage
    $ glyphs preview [<data-dir>]

  Options
    --help, -h     Displays this message`)
      log()
    },
    FAIL: () => {
      log()
      log('The files required to generate the preview have not been found', 1)
      log('Run "glyphs sync" to generate the required files', 1)
      log()
    },
    ERROR: (data='data') => {
      log()
      log(`No "${data}" folder found in current directory`, 1)
      log(`Provide the "data" folder location as an argument to "glyphs preview"`, 1)
      log()
    }
  },
  GENERATE: {
    HELP: () => {
      log(`
  Description
  Generate a component set from an exported Glyphs icon set. Options must be supplied in a 'glyphs.config.json' file.

  Usage
    $ glyphs generate

  Options
    --help, -h     Displays this message`)
      log()
    }
  }
}

module.exports = {
  log,
  info,
  warn,
  fatal,
  PRINT
}
