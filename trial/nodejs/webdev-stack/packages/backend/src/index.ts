import config from 'config'
import app from './main'

const { host, port } = config.get('backend')

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
