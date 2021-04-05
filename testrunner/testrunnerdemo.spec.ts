import {it, describe, expect} from "@playwright/test";

it("first test from simple demo", () =>{
    console.log("test")   
})

it("first test to navigate to a site  demo", async({context}) => {
    var page = await context.newPage();
    await page.goto("http://www.neowin.net");
})

