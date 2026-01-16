import { Email } from "./validateEmail";

describe("Email Checker",() => {
    const email = new Email();
    test("Must have at least one @ ", () => {
        const actual = email.emailCheck("Abcdefghij");
        expect(actual).toBe(false);
    })

    test("Don't have a space-between",() => {
        const actual = email.spaceCheck("Abcde @fghij");
        expect(actual).toBe(false);
    })

    test("it must have text before and after the @ symbol",() =>{
        const actual = email.otherCheck("@");
        expect(actual).toBe(false);

    })
})