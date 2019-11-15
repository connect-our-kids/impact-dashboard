'use strict'
const chromium = require('chrome-aws-lambda')
const fs = require('fs')
const path = require('path')

module.exports.pdf = async (event, context) => {
  const yearMonth = ((event || {}).pathParameters || {}).yearMonth || ''
  const year = yearMonth.length == 7 && yearMonth.substring(0, 4)
  const month = yearMonth.length == 7 && yearMonth.substring(5, 6)

  // Select a date
  const selDate = new Date(year, month)
  const filter = {
    month: selDate.toLocaleString('en', { month: 'long' }),
    year: selDate.getFullYear()
  }


  // 1. (TODO) Get data


  // 2. Create html
  const html = `
    <html>
        <body>
            <h1>Team Report:</h1>
        </body>
    </html>
  `;

  // 3. Open puppeteer
  let browser = null
  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless
    })

    const page = await browser.newPage()
    page.setContent(html)

    // 4. Create pdf file with puppeteer
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' }
    })

    // 5. Return PDf as base64 string
    const response = {
      headers: {
        'Content-type': 'application/pdf',
        'content-disposition': 'attachment; filename=test.pdf'
      },
      statusCode: 200,
      body: pdf.toString('base64'),
      isBase64Encoded: true
    }
    context.succeed(response)
  } catch (error) {
    return context.fail(error)
  } finally {
    if (browser !== null) {
      await browser.close()
    }
  }
}