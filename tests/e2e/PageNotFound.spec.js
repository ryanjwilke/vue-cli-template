import { snapshot } from './utils/snapshot.js'

describe('PageNotFound', () => {
  it('renders correctly', async () => {
    await page.goto('http://localhost:8080/contact')
    await snapshot(page, '404')
  })
})
