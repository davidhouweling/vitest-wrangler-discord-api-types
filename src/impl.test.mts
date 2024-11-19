import { describe, it, expect } from "vitest";
import { getRoute } from './impl.mjs';

describe("impl.test.mts", function() {
  it("getRoute", function() {
    const channelId = "123";
    const result = getRoute(channelId);
    expect(result).toBe("/channels/123");
  });
});