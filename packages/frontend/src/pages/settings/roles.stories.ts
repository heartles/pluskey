/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import roles_ from './roles.vue';
const meta = {
	title: 'pages/settings/roles',
	component: roles_,
} satisfies Meta<typeof roles_>;
export const Default = {
	render(args) {
		return {
			components: {
				roles_,
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
			template: '<roles_ v-bind="props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof roles_>;
export default meta;
