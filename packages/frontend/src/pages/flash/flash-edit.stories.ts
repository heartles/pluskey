/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import flash_edit from './flash-edit.vue';
const meta = {
	title: 'pages/flash/flash-edit',
	component: flash_edit,
} satisfies Meta<typeof flash_edit>;
export const Default = {
	render(args) {
		return {
			components: {
				flash_edit,
			},
			setup() {
				return {
					args,
				};
			},
			computed: {
				props() {
					return {
						...args,
					};
				},
			},
			template: '<flash_edit v-bind="props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof flash_edit>;
export default meta;
