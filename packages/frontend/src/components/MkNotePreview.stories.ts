/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import MkNotePreview from './MkNotePreview.vue';
const meta = {
	title: 'components/MkNotePreview',
	component: MkNotePreview,
} satisfies Meta<typeof MkNotePreview>;
export const Default = {
	render(args) {
		return {
			components: {
				MkNotePreview,
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
			template: '<MkNotePreview v-bind="props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkNotePreview>;
export default meta;
