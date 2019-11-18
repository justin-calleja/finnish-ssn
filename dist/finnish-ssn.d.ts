/**
 * Project: finnish-ssn
 * Purpose: Validate and generate Finnish SSN's according to https://fi.wikipedia.org/wiki/Henkil%C3%B6tunnus
 * Author:  Ville Komulainen
 */
interface SSN {
    valid: boolean;
    sex: string;
    ageInYears: number;
    dateOfBirth: Date;
}
export declare class FinnishSSN {
    static FEMALE: string;
    static MALE: string;
    /**
     * Parse parameter given SSN string into Object representation.
     * @param ssn - {String} SSN to parse
     */
    static parse(ssn: string): SSN;
    /**
     * Validates parameter given SSN. Returns true if SSN is valid, otherwise false.
     * @param ssn - {String} For example '010190-123A'
     */
    static validate(ssn: string): boolean;
    /**
     * Creates a valid SSN using the given day of month (String), month (String) and year (Integer).
     * Creates randomly male and female SSN'n.
     *
     * @param dayOfMonth as String.
     * @param month as String.
     * @param year as Integer.
     */
    static createWithDob(dayOfMonth: string, month: string, year: number): string;
    /**
     * Creates a valid SSN using the given age (Integer). Creates randomly male and female SSN'n.
     * In case an invalid age is given, throws exception.
     *
     * @param age as Integer. Min valid age is 1, max valid age is 200
     */
    static createWithAge(age: number): string;
    static isLeapYear(year: number): boolean;
}
export {};
