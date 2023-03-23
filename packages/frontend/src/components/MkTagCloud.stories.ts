/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import MkTagCloud from './MkTagCloud.vue';
const meta = {
	title: 'components/MkTagCloud',
	component: MkTagCloud,
} satisfies Meta<typeof MkTagCloud>;
export const Default = {
	render(args) {
		return {
			components: {
				MkTagCloud,
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
			template: '<MkTagCloud v-bind="props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkTagCloud>;
export default meta;
