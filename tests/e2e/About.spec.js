import { snapshot } from './utils/snapshot.js'

describe('About', () => {
  it('renders correctly', async () => {
    await page.goto('http://localhost:8080/about')
    await snapshot(page, 'About')
  })
})
