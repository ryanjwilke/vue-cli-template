import { snapshot } from './utils/snapshot.js'

describe('Home', () => {
  it('renders correctly', async () => {
    await page.goto('http://localhost:8080/')
    await snapshot(page, 'Home')
  })
})
