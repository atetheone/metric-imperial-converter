export class ConvertHandler {
  private static galToL = 3.78541;
  private static lbsToKg = 0.453592;
  private static miToKm = 1.60934;
  private static kgToLbs = 2.20462;
  private static lToGal = 0.26417;
  private static kmToMi = 0.62137;
  private static inputUnit = ["gal", "l", "mi", "km", "lbs", "kg"];
  private static convertUnit = [this.galToL, this.lToGal, this.miToKm, this.kmToMi, this.lbsToKg, this.kgToLbs];
  
  private _num?: number;
  private _unit?: string;
  private input: any;
  constructor(input: any) {
    this.input = input.toLowerCase();
  }

  get num(): number {
    let num = (this.input.match(/[0-9/.]+/g) || [])[0];

    if (num === undefined) num = "1";
    if (num.split("/")[2]) throw new Error("invalid number");

    try {
      num = eval(num);
    } catch (e) {
      throw new Error("invalid number");
    }

    return parseFloat(num.toFixed(5));
  }

  get unit(): string {
    let idx = 0;
    for (let char of this.input) {
      if (char.match(/[A-Za-z]/)) break;
      idx++;
    }
    const result = this.input.substring(idx);

    ConvertHandler.inputUnit.forEach(unit => {
      if (unit === result) return result;
    }) 
    return ""

    // throw new Error("invalid unit");
  }

  private convertUnit() {
    let conversion: any = {
      "kg": "lbs",
      "lbs": "kg",
      "gal": "L",
      "l": "gal",
      "km": "mi",
      "mi": "km"
    };

    return conversion[this.unit];
  }

  convert() {
    const convert = ConvertHandler.convertUnit
    const inputUnit = ConvertHandler.inputUnit;

    try {
      const initNum = this.num;
      const initUnit = this.unit;
      const result = parseFloat((initNum * convert[inputUnit.indexOf(initUnit)]).toFixed(5));
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  private getString() {
    const initNum = this.num;
    const initUnit = this.unit;
    const returnNum = this.convert();
    const returnUnit = this.convertUnit().toLowerCase();

    let toStr: any = {
      kg: "kilograms",
      lbs: "pounds",
      gal: "gallons",
      l: "liters",
      km: "kilometers",
      mi: "miles"
    };

    return `${initNum} ${toStr[initUnit]} converts to ${returnNum} ${toStr[returnUnit]}`
  }

  getResult () {
    try {
      const initNum = this.num;
      const initUnit = this.unit;
      const returnNum = this.convert();
      const returnUnit = this.convertUnit();

      return {
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string: this.getString()
      }
    } catch (e) {

    }
  };
}
