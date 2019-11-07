const { percySnapshot } = require('@percy/puppeteer')

export const config = {
  screenshot: {
    fullPage: true,
  },
  desktop: {
    width: 1280,
    height: 1024,
  },
  tablet: {
    width: 768,
    height: 1024,
  },
  mobile: {
    width: 375,
    height: 600,
  },
}

export function runPercy() {
  return process.env.RUN_PERCY == 'true'
}

export async function snapshot(page, name) {
  if (runPercy()) {
    await percySnapshot(page, name)
  } else {
    await page.setViewport(config.desktop)
    expect(await page.screenshot(config.screenshot)).toMatchImageSnapshot()

    await page.setViewport(config.tablet)
    expect(await page.screenshot(config.screenshot)).toMatchImageSnapshot()

    await page.setViewport(config.mobile)
    expect(await page.screenshot(config.screenshot)).toMatchImageSnapshot()
  }
}
