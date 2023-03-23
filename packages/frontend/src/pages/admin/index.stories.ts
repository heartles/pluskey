/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import index_ from './index.vue';
const meta = {
	title: 'pages/admin/index',
	component: index_,
} satisfies Meta<typeof index_>;
export const Default = {
	render(args) {
		return {
			components: {
				index_,
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
			template: '<index_ v-bind="props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof index_>;
export default meta;
