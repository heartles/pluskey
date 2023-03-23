/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import MkImageViewer from './MkImageViewer.vue';
const meta = {
	title: 'components/MkImageViewer',
	component: MkImageViewer,
} satisfies Meta<typeof MkImageViewer>;
export const Default = {
	render(args) {
		return {
			components: {
				MkImageViewer,
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
			template: '<MkImageViewer v-bind="props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkImageViewer>;
export default meta;
