<script setup lang="ts">
import AddObject from "@/components/prefab/add_object/AddObject.vue";
import {ObjectTitleCaseEnums} from "@/utils/enums/ObjectTitleCaseEnums.ts";
import type {PropType} from "vue";
import {TrashIcon} from "lucide-vue-next";

// DEFINE EMITS
const emit = defineEmits(['removeUser']);

// DEFINE PROPS
const props = defineProps({
	userList: {
		type: Array as PropType<{ user_id: number, user_name: string }[]>,
		required: true,
	},
});

// DEFINE FUNCTIONS
function removeUser(user_id: number) {
	emit('removeUser', user_id);
}
</script>

<template>
	<div class="user-access">
		<h3>User Access</h3>
		<div
			v-if="props.userList.length > 0"
			class="user-access-list"
		>
			<div
				v-for="user in props.userList"
				:key="user.user_id"
				class="user-access-item"
			>
				<img
					src="https://nearbeach.org/media/gkgmptvg/bee-socks.jpg?width=120"
					alt="User Profile Picture"
				/>
				{{ user.user_name }}
				<TrashIcon
					v-if="props.userList.length > 1"
					v-on:click="removeUser(user.user_id)"
					type="button"
					aria-label="Remove User"
				/>
			</div>
		</div>

		<AddObject
			:object-type="ObjectTitleCaseEnums.user"
		/>
	</div>
</template>

<style scoped>
.user-access {

	> .user-access-list {
		> .user-access-item {
			padding: 0.5rem 0;

			> img {
				width: 20px;
				height: 20px;
				object-fit: cover;
				border-radius: 50%;
				transform: translateY(5px);
			}

			> svg {
				position: absolute;
				transform: translateY(-1px);
				right: 1rem;
				width: 1rem;
			}

			&:hover {
				background-color: var(--secondary-hover);
			}
		}
	}

	> .add-object {
		margin: 1rem 0;
	}
}

</style>