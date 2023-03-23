/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import MkEmojiPickerDialog from './MkEmojiPickerDialog.vue';
const meta = {
	title: 'components/MkEmojiPickerDialog',
	component: MkEmojiPickerDialog,
} satisfies Meta<typeof MkEmojiPickerDialog>;
export const Default = {
	render(args) {
		return {
			components: {
				MkEmojiPickerDialog,
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
			template: '<MkEmojiPickerDialog v-bind="props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkEmojiPickerDialog>;
export default meta;
