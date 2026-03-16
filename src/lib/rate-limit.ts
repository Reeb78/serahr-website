const requests = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(
  ip: string,
  { limit = 5, windowMs = 3600_000 } = {}
): { success: boolean; remaining: number } {
  const now = Date.now();
  const entry = requests.get(ip);

  // Clean up expired entries periodically
  if (requests.size > 10_000) {
    for (const [key, val] of requests) {
      if (val.resetAt < now) requests.delete(key);
    }
  }

  if (!entry || entry.resetAt < now) {
    requests.set(ip, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: limit - 1 };
  }

  entry.count++;
  if (entry.count > limit) {
    return { success: false, remaining: 0 };
  }

  return { success: true, remaining: limit - entry.count };
}
