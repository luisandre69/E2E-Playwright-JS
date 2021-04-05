import { folio as base } from '@playwright/test'
export { expect } from 'folio';

// Declare types for new fixture and parameters
const fixtures = base.extend<{}, { browsers: string }, { version: number }>();

// Define browser parameter with desciption and default value
fixtures.version.initParameter('Browser version', 86);

fixtures.browsers.init(async ({ version }, runTest) => {
    if (version > 80) {
        console.log("Running latest version of browser and use new driver")
    }
    else {
        console.log("Running older version of browser and use older driver")
    }
    await runTest(`Current version: ${version}`);
}, { scope: 'worker' });

const folio = fixtures.build()
export const it = folio.it;