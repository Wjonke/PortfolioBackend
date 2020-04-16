const server = require("../server");
const request = require("supertest");
const db = require("../database/db-config");
// const Users = require("../crudOperations/userOperations/userModel");

describe("ROUTE TESTING", () => {
  //   beforeAll(async () => {
  //     return (
  //       await db.migrate.rollback(),
  //       await db.migrate.latest(),
  //       await db.seed.run()
  //     );
  //   });

  //   afterAll(async () => {
  //     return await db.migrate.rollback();
  //   });

  //put tests in here
  //   vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv  SERVER STATUS  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv   //
  describe("Should be in testing environment", () => {
    it("should be in testing environment", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe("Checking server status", () => {
    describe("Sanity check", () => {
      it("should return an OK status code from the index route", async () => {
        const expectedStatus = 200;

        const response = await request(server).get("/");

        expect(response.status).toEqual(expectedStatus);
      });

      it("should return a JSON object from the index route", async () => {
        const expectedBody = {
          status: "The Portfolio server is running!!",
        };
        const response = await request(server).get("/");
        expect(response.body).toEqual(expectedBody);
      });

      it("should return a JSON object from the index route", async () => {
        const response = await request(server).get("/");
        expect(response.type).toEqual("application/json");
      });
    });
  });
});
