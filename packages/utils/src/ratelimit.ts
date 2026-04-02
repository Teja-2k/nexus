import { Ratelimit } from "@upstash/ratelimit";
import { getRedis } from "./redis";

export function createWidgetRateLimiter(maxRequests: number = 100) {
  return new Ratelimit({
    redis: getRedis(),
    limiter: Ratelimit.slidingWindow(maxRequests, "1 m"),
    analytics: true,
    prefix: "nexus:widget:ratelimit",
  });
}
