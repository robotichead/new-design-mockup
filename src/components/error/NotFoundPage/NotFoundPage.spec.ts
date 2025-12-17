// NotFound.spec.ts
import { describe, test, expect } from "vitest";
import NotFoundPage from "./NotFoundPage.vue";
import { mount } from "@vue/test-utils";

describe("NotFound", async () => {
	test("mount component", async () => {
		// App exists
        expect(NotFoundPage).toBeTruthy();
	});

    // Mount the wrapper
    const wrapper = mount(NotFoundPage, {});

    // Test to make sure there is only ONE heading
    const allHeadings = wrapper.findAll("h1");
    expect(allHeadings.length).toBe(1);

    // Test to make sure we have landed on the correct not found page
    const heading = allHeadings[0];
    expect(heading?.text()).toBe("404 Not Found");

    // Match snapshot
    // expect(wrapper.html()).toMatchSnapshot();
});
