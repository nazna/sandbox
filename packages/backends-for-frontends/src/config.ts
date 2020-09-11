import fs from 'fs'

export default () => {
  const env = process.env.NODE_ENV

  let defaultConfig = {}
  let envConfig = {}

  if (fs.existsSync('../../config/default.json')) {
    defaultConfig = JSON.parse(fs.readFileSync('../../config/default.json', 'utf-8'))
  }

  if (fs.existsSync(`../../config/${env}.json`)) {
    envConfig = JSON.parse(fs.readFileSync(`../../config/${env}.json`, 'utf-8'))
  }

  return { ...defaultConfig, ...envConfig }
}
