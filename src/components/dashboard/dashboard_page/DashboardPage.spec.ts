// DashboardPage.spec.ts
import { describe, test, expect } from "vitest";
import DashboardPage from "./DashboardPage.vue";

describe("DashboardPage", () => {
    test("mount component", async () => {
        // Dashboard Page exists
        expect(DashboardPage).toBeTruthy();
    })
})