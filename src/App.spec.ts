// App.spec.ts
import { routes } from '@/router';
import { useNavStore } from '@/stores/nav.ts';
import { mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import { describe, test, expect, beforeEach } from 'vitest';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

describe('App', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test('mount component', async () => {
        // Load the basic dashboard page
        router.push('/');
        await router.isReady();

        // App exists
        expect(App).toBeTruthy();

        // Mount the wrapper
        const wrapper = mount(App, {
            global: {
                plugins: [router],
            },
        });

        // Test to make sure there is only ONE heading
        const allHeadings = wrapper.findAll('h1');
        expect(allHeadings.length).toBe(1);

        // Test to make sure we have landed on the correct dashboard page
        const heading = allHeadings[0];
        expect(heading?.text()).toBe('Dashboard');

        // Match snapshot
        expect(wrapper.html()).toMatchSnapshot();
    });
});

describe('App - mobile vue', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        Object.defineProperty(window, 'innerWidth', {
            writable: true, // Make it writable for mocking
            configurable: true, // Allow redefinition
            value: 375, // Set your desired mock width
        });
    });

    test('mobile viewport - navbar should close automatically', async () => {
        // await page.viewport(375, 812);
        // global.screen.width = 3755;

        // Load the basic dashboard page
        router.push('/');
        await router.isReady();

        // App exists
        expect(App).toBeTruthy();

        // Mount the wrapper
        const wrapper = mount(App, {
            global: {
                plugins: [router],
            },
        });

        // Make sure the app has loaded
        const header = wrapper.find('h1');
        expect(header.text()).toBe('Dashboard');

        // Make sure the nav is not open
        const nav = useNavStore();
        expect(nav.isNavOpen).toBe(false);

        // Check screen width
        expect(window.innerWidth).toBe(375);
    });
});
