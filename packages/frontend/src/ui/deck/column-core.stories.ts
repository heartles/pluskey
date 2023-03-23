/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import column_core from './column-core.vue';
const meta = {
	title: 'ui/deck/column-core',
	component: column_core,
} satisfies Meta<typeof column_core>;
export const Default = {
	render(args) {
		return {
			components: {
				column_core,
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
			template: '<column_core v-bind="props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof column_core>;
export default meta;
