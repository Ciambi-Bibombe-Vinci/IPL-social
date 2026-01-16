import { Email } from "./validateEmail";

describe("Email Checker",() => {
    test("Must have at least one @ ", () => {
        const email = new Email();
        const actual = email.emailCheck("Abcdefghij");
        expect(actual).toBe(false);
    })

    test("Don't have a space-between",() => {
        const email = new Email();
        const actual = email.spaceCheck("Abcde @fghij");
        expect(actual).toBe(false);
    })
})