import puppetteer from 'puppeteer';
import { fork } from 'child_process';

// eslint-disable-next-line no-undef
jest.setTimeout(30000); // default puppeteer timeout

// eslint-disable-next-line no-undef
describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  // eslint-disable-next-line no-undef
  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 50,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
    await page.goto(baseUrl);
  });

  // eslint-disable-next-line no-undef
  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  // eslint-disable-next-line no-undef
  test('card 4276864025488162 be ok', async () => {
    const form = await page.$('.checkCard form');
    const input = await page.$('.checkCard input');
    await input.type('4276864025488162');
    const submit = await form.$('button');
    await submit.click();
    await page.waitForSelector('.valid');
  });

  // eslint-disable-next-line no-undef
  test('card 418730202602443 is NOT ok', async () => {
    const form = await page.$('.checkCard form');
    const input = await page.$('.checkCard input');
    await input.type('418730202602443');
    const submit = await form.$('button');
    await submit.click();
    await page.waitForSelector('.invalid');
  });
});
