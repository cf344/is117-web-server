
const request = require("supertest");
const app = require("../index");

test("Home page works", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
});

test("About page works", async () => {
  const response = await request(app).get("/about");
  expect(response.status).toBe(200);
});

test("Missing page returns 404", async () => {
  const response = await request(app).get("/random");
  expect(response.status).toBe(404);
});

