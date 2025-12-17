// NotFound.spec.ts
import {describe, test, expect} from "vitest";
import NotFoundPage from "./NotFoundPage.vue";
import {mount} from "@vue/test-utils";

describe("NotFound", async () => {
    // Mount the wrapper
    const wrapper = mount(NotFoundPage, {});

    test("mount component", async () => {
        // App exists
        expect(NotFoundPage).toBeTruthy();
    });

    test("make sure there is only ONE heading", async () => {
        const allHeadings = wrapper.findAll("h1");
        expect(allHeadings.length).toBe(1);
    })

    test("make sure we have landed on the correct not found page", () => {
        const heading = wrapper.find("h1");
        expect(heading?.text()).toBe("404 Not Found");
    })
});
