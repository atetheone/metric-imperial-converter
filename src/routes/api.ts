import { Router, Response, Request } from "express";
import { ConvertHandler } from "../controllers/convertHandler";

const apiRouter = Router();
/**
 * /api/convert?input=4gal
 * /api/convert?input=1/2km
 * /api/convert?input=5.4/3lbs
 * /api/convert?input=kg
 */

apiRouter.get("/api/convert", (req: Request, res: Response) => {
  const {input} = req.query;
  
  const convertHandler: ConvertHandler = new ConvertHandler(input)
  // console.log(toConvert.num);

  const initNum    = convertHandler.num;
  const initUnit   = convertHandler.unit;

    if (initNum === "invalid number" && initUnit === "invalid unit")
      return res.json({error: "invalid number and unit"});

    if (initNum === "invalid number") 
      return res.json({ error: "invalid number" });
    
    if (initUnit === "invalid unit") 
      return res.json({ error: "invalid unit" });
  /**
   * response
   * { 
   *    initNum: 3.1, 
   *    initUnit: 'mi', 
   *    returnNum: 4.98895, 
   *    returnUnit: 'km', 
   *    string: '3.1 miles converts to 4.98895 kilometers' 
   * }
   */
  res.json(convertHandler.getResult());
});

export { apiRouter };
