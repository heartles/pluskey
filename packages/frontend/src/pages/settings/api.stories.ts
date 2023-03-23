/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import api_ from './api.vue';
const meta = {
	title: 'pages/settings/api',
	component: api_,
} satisfies Meta<typeof api_>;
export const Default = {
	render(args) {
		return {
			components: {
				api_,
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
			template: '<api_ v-bind="props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof api_>;
export default meta;
