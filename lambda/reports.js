'use strict'

//This produces a pdf
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
  // const queryTeamServed = await teamServed.queryTeamChildrenServed();
  // const queryTeamPlacement = await teamPlacement.queryTeamSuccess() ;
  // const queryTeamConnections = await teamConnections.queryTeamConnection();
  // const queryTeamKinship = await teamKinship.queryTeamKindship() ;
  // const queryTeamAvg = await teamAVG.queryTeamAvgPlaced();

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
    // page.setContent(html)
    // currently getting the public dashboard to test styling. 
    // should switch to current team dashboard view (assuming user is logged in already, this should work fine)
    await page.goto('https://impact-dashboard.mjherich.now.sh/', {waitUntil: 'networkidle0'});
    
    // Style adjustments
    // to add for team: .team__section--middle:last-child {display: none}
    await page.addStyleTag({ content: '.nav__btn.nav__btn--login { display: none} .public__donate { display: none}' })

    // Create pdf file with puppeteer
    const pdf = await page.pdf({
      format: 'A4',
      landscape: true,
      printBackground: true,
      margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' }
    })

    // Return PDf as base64 string
    const response = {
      headers: {
        'Content-type': 'application/pdf',
        'content-disposition': 'attachment; filename=TeamReport.pdf'
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
