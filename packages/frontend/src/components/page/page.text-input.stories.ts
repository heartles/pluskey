/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import page_text_input from './page.text-input.vue';
const meta = {
	title: 'components/page/page.text-input',
	component: page_text_input,
} satisfies Meta<typeof page_text_input>;
export const Default = {
	render(args) {
		return {
			components: {
				page_text_input,
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
			template: '<page_text_input v-bind="props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof page_text_input>;
export default meta;
