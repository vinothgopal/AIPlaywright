import { test } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test('AI test with Playwright', async ({ page }) => {
  await page.goto('http://qa-tools-appsulate.onrender.com/basic-auth?')

  const aiArgs = { page, test }
  const headerText = await ai('Get the header text', aiArgs)
  await ai(`Type "${headerText}" in the search box`, aiArgs)
  await ai ('enter username "admin"', aiArgs)
  await ai ('enter password "admin"', aiArgs)
  await ai ('click  sign in button ', aiArgs)
})


test('zerostep example', async ({ page }) => {
  await page.goto('https://zerostep.com/')

  // An object with page and test must be passed into every call
  const aiArgs = { page, test }
  const headerText = await ai('Get the header text', aiArgs)
  await page.goto('https://google.com/')
  await ai(`Type "${headerText}" in the search box`, aiArgs)
  await ai('Press enter', aiArgs)
})