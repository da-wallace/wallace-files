// Test setup for Vitest
import { beforeAll, afterAll } from "vitest";
import "@testing-library/jest-dom";

// Mock environment variables for testing
process.env.NODE_ENV = "test";
process.env.DATABASE_URL = "postgresql://test:test@localhost:5432/test";
process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = "pk_test_mock";
process.env.CLERK_SECRET_KEY = "sk_test_mock";
process.env.SKIP_ENV_VALIDATION = "true";

// Mock Next.js router
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => "/",
}));

beforeAll(() => {
  console.log("🧪 Setting up modern test environment with Vitest...");
});

afterAll(() => {
  console.log("✅ Test environment cleaned up");
});
