<script setup lang="ts">
import GeneralDetailComponent from '@/components/project/project_page/general_detail/GeneralDetailComponent.vue';
import PropertiesComponent from '@/components/project/project_page/properties_component/PropertiesComponent.vue';
import CardComponent from '@/components/prefab/card/CardComponent.vue';
</script>

<template>
    <div class="project-information">
        <GeneralDetailComponent />
        <PropertiesComponent />
        <CardComponent class="fill-out hello-world">
            <h1>Hello World</h1>
        </CardComponent>
    </div>
</template>

<style scoped>
.project-information {
    max-width: calc(var(--x-large-card-width));
    display: grid;
    grid-template-columns: [container] 1fr;

    @media (--large-screen) {
        grid-template-columns: [container] 1fr [properties] 320px;

        > .general-details {
            grid-column-start: container;
        }

        > .properties {
            grid-column-start: properties;
        }

        > .hello-world {
            grid-column-start: container;
        }
    }
}
</style>
