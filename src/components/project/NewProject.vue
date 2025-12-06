<script setup lang="ts">
import ButtonComponent from '@/components/render/button/ButtonComponent.vue';
import CardComponent from '@/components/render/card/CardComponent.vue';
import CardFooter from '@/components/render/card/CardFooter.vue';
import CardHeader from '@/components/render/card/CardHeader.vue';
import TextInputComponent from '@/components/render/text_input/TextInputComponent.vue';
import { ButtonVariantEnum } from '@/utils/enums/ButtonVariantEnum.ts';
import { ObjectStateEnum } from '@/utils/enums/ObjectStateEnum.ts';
import { nextTick, ref } from 'vue';

// Define Models
const titleModel = defineModel('titleModel', {
    type: String,
    default: '',
});
const groupModel = defineModel('groupModel', {
    type: String,
    default: '',
});

// Define Refs
const objectState = ref(ObjectStateEnum.NoAction);
const isTitleModelValid = ref(false);

// Define Methods
async function createProject() {
    // Check the validation
    // TODO - Figure out a better method to this

    // Do we wait for a tick?
    await nextTick();

    if (!isTitleModelValid.value) {
        alert("YEP! Not valid mate")
        return;
    }

    objectState.value = ObjectStateEnum.Saving;
}
</script>

<template>
    <CardComponent>
        <CardHeader
            title="Create your new project"
            description="Fill in the details below to start your new project" />

        <TextInputComponent
            title="Title"
            :isRequired="true"
            v-model="titleModel"
            @isValid="(args) => (isTitleModelValid = args)"
            />
        <TextInputComponent
            v-model="groupModel"
            title="Group Permissions" />

        <CardFooter>
            <ButtonComponent
                label="Create Project"
                :variant="ButtonVariantEnum.Primary"
                :objectState="objectState"
                v-on:click="createProject" />

        </CardFooter>
    </CardComponent>
</template>

<style scoped></style>
