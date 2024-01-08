import { test, expect } from "vitest";
import { getProcessTitle } from "./index";

test("test", () => {
  process.title = "browser";
  const env = getProcessTitle();
  expect(env).toBe("browser");
});
