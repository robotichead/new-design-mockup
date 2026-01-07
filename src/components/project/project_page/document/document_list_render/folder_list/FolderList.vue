<script setup lang="ts">
import {Folder} from "lucide-vue-next";
import type {PropType} from "vue";

// Define props
import type {FolderItemInterface} from "@/utils/interfaces/FolderItemInterface.ts";

defineProps({
	folderList: {
		type: Array as PropType<FolderItemInterface[]>,
		required: true,
	},
})

</script>

<template>
	<div class="folder-list">
		<div
			class="folder-item"
			v-for="item in folderList"
			:key="item.folderId"
		>
			<div class="folder-icon">
				<Folder/>
			</div>
			<div class="folder-name">{{ item.folderName }}</div>
		</div>
	</div>
</template>

<style scoped>
.folder-list {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	> .folder-item {
		display: flex;
		flex-direction: column;
		height: 10rem;
		width: 10rem;
		border-style: solid;
		border-width: var(--border-width);
		border-color: var(--border-muted);
		border-radius: var(--border-radius);
		padding: 0.5rem;

		> .folder-icon {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;

			> svg {
				flex: 1;
				width: 4rem;
				height: 4rem;
				stroke-width: 1px;
			}
		}

		> .folder-name {
			height: 1rem;
			font-size: 0.75rem;
			line-height: 1rem;
			font-weight: 100;
			font-family: "Roboto", sans-serif;
		}
	}
}

</style>