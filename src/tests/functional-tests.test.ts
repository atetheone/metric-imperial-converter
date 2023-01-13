import app from "../app";
import request from "supertest";

describe('Functional tests', () => {
  it("Convert a valid input such as 10L: GET request to /api/convert?input=10L", async () => {
    const res = await request(app)
      .get("/api/convert?input=10L")
      .send()
      .expect(200);
      
      
    expect(res.body).toEqual({
      initNum: 10,
      initUnit: "L",
      returnNum: 2.64172,
      returnUnit: "gal",
      string: "10 liters converts to 2.64172 gallons",
    });

  })

  it("Convert an invalid input such as 32g: GET request to /api/convert", async () => {
    const res = await request(app)
      .get("/api/convert?input=32g")
      .send()
      .expect(200);
      
      
    expect(res.body).toEqual({
      error: "invalid unit"
    });
  })

  it("Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert", async () => {
    const res = await request(app)
      .get("/api/convert?input=3/7.2/4kg")
      .send()
      .expect(200);
      
      
    expect(res.body).toEqual({
      error: "invalid number"
    });
  })

  it("Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert", async () => {
    const res = await request(app)
      .get("/api/convert?input=3/7.2/4kilomegagram")
      .send()
      .expect(200);
      
      
    expect(res.body).toEqual({
      error: "invalid number and unit"
    });
  })

  it("Convert with no number such as kg: GET request to /api/convert", async() => {
    const res = await request(app)
      .get("/api/convert?input=kg")
      .send()
      .expect(200);
      
      
    expect(res.body.initNum).toEqual(1);
  })
});
