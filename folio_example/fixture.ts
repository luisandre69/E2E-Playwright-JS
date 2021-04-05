import { folio as base } from "@playwright/test"
export { expect } from 'folio';

type Browsers = {
    opera: string
}

const fixtures = base.extend<Browsers>();

fixtures.opera.init(async ({}, run) => {
    await run("C:\Users\luis.abreu\AppData\Local\Programs\Opera\launcher.exe");
})

const folio = fixtures.build();
export const it = folio.it;
export const describe = folio.describe;