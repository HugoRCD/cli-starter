#!/usr/bin/env node

import process from 'node:process'
import { program } from './main'

program.parse(process.argv)
