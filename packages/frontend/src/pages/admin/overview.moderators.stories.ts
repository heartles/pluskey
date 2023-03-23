/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import overview_moderators from './overview.moderators.vue';
const meta = {
	title: 'pages/admin/overview.moderators',
	component: overview_moderators,
} satisfies Meta<typeof overview_moderators>;
export const Default = {
	render(args) {
		return {
			components: {
				overview_moderators,
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
			template: '<overview_moderators v-bind="props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof overview_moderators>;
export default meta;
