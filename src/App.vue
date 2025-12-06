<script setup lang="ts">
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import NavComponent from '@/components/nav/NavComponent.vue';
import SkipLinks from '@/components/skip_links/SkipLinks.vue';
import { useNavStore } from '@/stores/nav.ts';
import { computed, onMounted } from 'vue';

// Stores
const navStore = useNavStore();

// Computed
const mainClass = computed(() => (navStore.isNavOpen ? 'main nav-open' : 'main'));

// On Mounted
onMounted(() => {
    // If user is on mobile, the menu will not appear by default
    if (window.innerWidth < 640) {
        navStore.toggleNav();
    }

    // Toggle the language of the page
    // document.head.lang = 'es'
    // Not implemented at page load - default to 'en'. Will update once the system gets the user's details.
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
