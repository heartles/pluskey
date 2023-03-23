/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import other_ from './other.vue';
const meta = {
	title: 'pages/settings/other',
	component: other_,
} satisfies Meta<typeof other_>;
export const Default = {
	render(args) {
		return {
			components: {
				other_,
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
			template: '<other_ v-bind="props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof other_>;
export default meta;
