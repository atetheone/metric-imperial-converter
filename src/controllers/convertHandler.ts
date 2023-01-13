export class ConvertHandler {
  private static galToL = 3.78541;
  private static lbsToKg = 0.453592;
  private static miToKm = 1.60934;
  private static inputUnit = ["gal", "L", "mi", "km", "lbs", "kg"];
  private static convertUnit = [this.galToL, 1 / this.galToL, this.miToKm, 1 / this.miToKm, this.lbsToKg, 1 / this.lbsToKg];
  
  private _num?: number;
  private _unit?: string;
  private input: any;
  constructor(input: any) {
    this.input = input.toLowerCase();
  }

  get num(): any {
    let num = (this.input.match(/[0-9/.]+/g) || [])[0];

    if (num === undefined) num = "1";
    if (num.split("/")[2]) return "invalid number";

    try {
      num = eval(num);
    } catch (e) {
      return "invalid number";
    }

    return parseFloat(num.toFixed(5));
  }

  get unit(): string {
    let idx = 0;
    for (let char of this.input) {
      if (char.match(/[A-Za-z]/)) break;
      idx++;
    }

    const result = this.input.substr(idx);

    for (let unit of ConvertHandler.inputUnit) {
      if (result === "l") return "L";
      if (unit === result) return result;
    } 
    return "invalid unit";
    /*let idx = 0;
    for (let char of this.input) {
      if (char.match(/[A-Za-z]/)) break;
      idx++;
    }
    const result = this.input.substr(idx);

    ConvertHandler.inputUnit.forEach(unit => {
      if (unit === result) return result;
    }) 
    return "invalid unit";*/
  }

  convertUnit() {
    let conversion: any = {
      "kg": "lbs",
      "lbs": "kg",
      "gal": "L",
      "L": "gal",
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
      L: "liters",
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
