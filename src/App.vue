<script setup lang="ts">
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import NavComponent from '@/components/nav/NavComponent.vue';
import SkipLinks from '@/components/skip_links/SkipLinks.vue';
import { useNavStore } from '@/stores/nav.ts';
import { computed, onMounted } from 'vue';
import { useLocale } from "vue-intlayer";

// Stores
const navStore = useNavStore();

// Computed
const mainClass = computed(() => (navStore.isNavOpen ? 'main nav-open' : 'main'));

// i18n
const { setLocale } = useLocale();

// On Mounted
onMounted(() => {
    // If user is on mobile, the menu will not appear by default
    if (window.innerWidth < 640) {
        navStore.toggleNav();
    }

	// Setup i18n for application
	const locale : string = document.documentElement.lang ?? 'en';
	setLocale(locale);
});
</script>

<template>
    <SkipLinks />
    <HeaderComponent />
    <NavComponent />
    <main
        id="main"
        :class="mainClass"
        aria-labelledby="main-title"
        role="main">
        <RouterView />
    </main>
</template>

<style scoped>
.main {
    min-height: calc(100dvh - 65px);
    background-color: var(--bg-dark);
    padding-top: 20px;
}

.main.nav-open {
    @media (--small-screen) {
        margin-left: 263px;
    }
}
</style>
