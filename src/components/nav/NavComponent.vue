<script setup lang="ts">
import NavMenu from "@/components/nav/NavMenu.vue";
import NavMenuSkeleton from "@/components/nav/NavMenuSkeleton.vue";
import NavSettingMenu from "@/components/nav/NavSettingMenu.vue";
import { useNavStore } from "@/stores/nav.ts";
import { computed } from "vue";

// Stores
const navStore = useNavStore();

// Computed
const navClass = computed(() => (navStore.isNavOpen ? "nav-open" : ""));
</script>

<template>
  <nav v-bind:class="navClass" role="navigation">
    <div class="nav-bar--menu">
      <ul class="nav-bar--menu--list">
        <suspense>
          <NavMenu />
          <template #fallback>
            <NavMenuSkeleton :count="4" />
          </template>
        </suspense>
      </ul>
    </div>
    <div class="nav-bar--settings">
      <ul class="nav-bar--settings--list">
        <suspense>
          <NavSettingMenu />
          <template #fallback>
            <NavMenuSkeleton />
          </template>
        </suspense>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: none;
  background-color: white;
  width: 100vw;
  height: calc(100dvh - 60px);
  position: fixed;
  top: 60px;
  left: 0;
  overflow-x: scroll;
  flex-direction: column;

  @media (--small-screen) {
    width: 255px;
    height: calc(100vh - 45px);
    top: 45px;
    padding: 0 4px;
  }

  > .nav-bar--menu {
    height: 100%;
    margin-top: 15px;

    @media (--small-screen) {
      margin-top: 5px;
    }
  }
}

.nav-bar--menu--list,
.nav-bar--settings--list {
  display: flex;
  flex-direction: column;
  padding: 0;
  width: calc(100vw - 16px);
  margin: auto;
  font-size: 24px;
  line-height: 32px;
  font-weight: 500;
  font-family: "Open Sans", sans-serif;
  font-style: normal;

  @media (--small-screen) {
    width: 243px;
    font-size: 18px;
    line-height: 24px;
  }
}

.nav-open {
  display: flex;
}
</style>
