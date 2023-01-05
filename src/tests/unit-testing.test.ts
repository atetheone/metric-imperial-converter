import { ConvertHandler } from "../controllers/convertHandler";

describe('Unit testing', () => {
  it("convertHandler should correctly read a whole number input", () => {
    const input = '32L';
    const c = new ConvertHandler(input);

    expect(c.num).toBe(32);
  });

  it("convertHandler should correctly read a decimal number input", () => {
    const input = "4.2KM";
    const c = new ConvertHandler(input);

    expect(c.num).toBe(4.2);
  });

  it("convertHandler should correctly read a fractional input", () => {
    const input = "4/2KM";
    const c = new ConvertHandler(input);

    expect(c.num).toBe(2);
  });

  it("convertHandler should correctly read a fractional input with a decimal", () => {
    const input = "3.4/2KM";
    const c = new ConvertHandler(input);

    expect(c.num).toBe(1.7);
  });

  it("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)", () => {
    const input = "4/2/3KM";
    let c: any;
    try { 
      c = new ConvertHandler(input);
    } catch (err) {
      expect(c.num).toThrowError("invalid number");
    }

  });

  it("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided", () => {
    const input = "KM";
    const c = new ConvertHandler(input);

    expect(c.num).toBe(1);
  });

  it("convertHandler should correctly read each valid input unit", () => {
    const input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(elm => {
        const c = new ConvertHandler(elm);
        expect(c.unit).toBe(elm.toLowerCase());
      });
  });

  it("convertHandler should correctly return an error for an invalid input unit", () => {
    const input = "3g";
    const c = new ConvertHandler(input);

    expect(c.unit).toThrowError(Error("invalid unit"));
  });

  it("convertHandler should return the correct return unit for each valid input unit", () => {

  });

  it("convertHandler should correctly return the spelled-out string unit for each valid input unit", () => {

  });

  it("convertHandler should correctly convert gal to L", () => {

  });

  it("convertHandler should correctly convert L to gal", () => {

  });

  it("convertHandler should correctly convert mi to km", () => {

  });

  it("convertHandler should correctly convert km to mi", () => {

  });

  it("convertHandler should correctly convert lbs to kg", () => {

  });

  it("convertHandler should correctly convert kg to lbs", () => {

  });
});