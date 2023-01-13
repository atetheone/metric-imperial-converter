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
    let c = new ConvertHandler(input);
    
    expect(c.num).toBe("invalid number");
  });

  it("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided", () => {
    const input = "KM";
    const c = new ConvertHandler(input);

    expect(c.num).toBe(1);
  });

  /*
  test("convertHandler should correctly read each valid input unit", () => {


    for (let idx = 0; idx < units.length; idx++) {
      assert.strictEqual((c.getUnit(inputs[idx])), units[idx]);
    }  
  });
  */
  it("convertHandler should correctly read each valid input unit", () => {
    const units = ["gal", "L", "km", "mi", "kg", "lbs"]
    const inputs = ["12gal", "13l", "14km", "15mi", "16kg", "17lbs"];

    for (let idx = 0; idx < units.length; idx++) {
      const c = new ConvertHandler(inputs[idx]);
      expect(c.unit).toBe(units[idx]);

      // assert.strictEqual((c.getUnit(inputs[idx])), units[idx]);
    } 
  });

  it("convertHandler should correctly return an error for an invalid input unit", () => {
    const input = "3g";
    const c = new ConvertHandler(input);

    expect(c.unit).toBe("invalid unit");
  });

  it("convertHandler should return the correct return unit for each valid input unit", () => {
    const returnUnits = ["L", "gal", "mi", "km", "lbs", "kg"]
    const units       = ["gal", "l", "km", "mi", "kg", "lbs"];
    
    for (let idx = 0; idx < units.length; idx++) {
      let c = new ConvertHandler(units[idx]);
      console.log('getReturnUnit: ' + c.convertUnit())
      expect(c.convertUnit()).toBe(returnUnits[idx]);
    }
  });

  it("convertHandler should correctly return the spelled-out string unit for each valid input unit", () => {
    const units = ["L", "gal", "km", "mi", "kg", "lbs"]
    const spelledUnit = ["liters", "gallons", "kilometers", "miles", "kilograms", "pounds"];
    
    for (let idx = 0; idx < units.length; idx++) {
      // assert.strictEqual((c.spellOutUnit(units[idx])), spelledUnits[idx]);
    }
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