// stores/nav.spec.ts
import { setActivePinia, createPinia } from "pinia";
import { describe, test, expect, beforeEach } from "vitest";
import { useNavStore } from "./nav.ts";

describe('Nav - check "toggleNav" action works', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("Make sure the toggleNav function updates the isNavOpen from true to false", () => {
    const nav = useNavStore();

    // Expect isNavOpen to be true by default
    expect(nav.isNavOpen).toBe(true);

    // Activate the toggleNav action
    nav.toggleNav();

    // Expect isNavOpen to be false now
    expect(nav.isNavOpen).toBe(false);
  });

  test("Make sure the toggleNav function updates the isNavOpen from true to false", () => {
    const nav = useNavStore();

    // Update the isNavOpen to false
    nav.isNavOpen = false;
    expect(nav.isNavOpen).toBe(false);

    // Active the toggleNav action
    nav.toggleNav();

    // Expect isNavOpen to be true now
    expect(nav.isNavOpen).toBe(true);
  });
});
