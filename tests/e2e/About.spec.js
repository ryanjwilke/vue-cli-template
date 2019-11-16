import { snapshot } from './utils/snapshot.js'

describe('About', () => {
  it('renders correctly with async data', async () => {
    await page.goto('http://localhost:8080/about')
    await page.waitFor(5000)
    await snapshot(page, 'About')
  })
})
