import { Command } from 'commander'
import consola from 'consola'
import { name, version } from '../package.json'

export const program = new Command()
program
  .name(name)
  .version(version)
  .description('A simple program to say hello')
  .option('-n, --name <name>', 'Your name')
  .action((options) => {
    consola.info(`Hello ${options.name}`)
  })
