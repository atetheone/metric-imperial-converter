import app from "../app";
import request from "supertest";

describe('Functional tests', () => {
  it("Convert a valid input such as 10L: GET request to /api/convert", async () => {
    const res = await request(app)
      .get("/api/convert")
      .query({ input: "10L"})
      .send()
      .expect(200);
      
      
    expect(res.body.initNum).toBe(10);
    expect(res.body.initUnit).toBe("l");
    expect(res.body.returnNum).toBe(10);

  })

  it("Convert an invalid input such as 32g: GET request to /api/convert", () => {
    
  })

  it("Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert", () => {
    
  })

  it("Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert", () => {
    
  })

  it("Convert with no number such as kg: GET request to /api/convert", () => {
    
  })
});
