/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import MkDriveFileThumbnail from './MkDriveFileThumbnail.vue';
const meta = {
	title: 'components/MkDriveFileThumbnail',
	component: MkDriveFileThumbnail,
} satisfies Meta<typeof MkDriveFileThumbnail>;
export const Default = {
	render(args) {
		return {
			components: {
				MkDriveFileThumbnail,
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
			template: '<MkDriveFileThumbnail v-bind="props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkDriveFileThumbnail>;
export default meta;
