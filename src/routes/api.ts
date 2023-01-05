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
  
  const toConvert: ConvertHandler = new ConvertHandler(input)
  // console.log(toConvert.num);

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
  res.json(toConvert.getResult());
});

export { apiRouter };
