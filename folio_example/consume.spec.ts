import {it, expect} from "./fixture"

it("getting the browser path", ({opera}) =>{
    console.log(`${opera}`);
    expect(`${opera}`).toBe("C:\Users\luis.abreu\AppData\Local\Programs\Opera\launcher.exe")
})