/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import welcome_entrance_a from './welcome.entrance.a.vue';
const meta = {
	title: 'pages/welcome.entrance.a',
	component: welcome_entrance_a,
} satisfies Meta<typeof welcome_entrance_a>;
export const Default = {
	render(args) {
		return {
			components: {
				welcome_entrance_a,
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
			template: '<welcome_entrance_a v-bind="props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof welcome_entrance_a>;
export default meta;
