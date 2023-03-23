/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import page_number_input from './page.number-input.vue';
const meta = {
	title: 'components/page/page.number-input',
	component: page_number_input,
} satisfies Meta<typeof page_number_input>;
export const Default = {
	render(args) {
		return {
			components: {
				page_number_input,
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
			template: '<page_number_input v-bind="props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof page_number_input>;
export default meta;
