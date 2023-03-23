/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import list_column from './list-column.vue';
const meta = {
	title: 'ui/deck/list-column',
	component: list_column,
} satisfies Meta<typeof list_column>;
export const Default = {
	render(args) {
		return {
			components: {
				list_column,
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
			template: '<list_column v-bind="props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof list_column>;
export default meta;
