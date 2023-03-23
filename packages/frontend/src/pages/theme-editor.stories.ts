/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import theme_editor from './theme-editor.vue';
const meta = {
	title: 'pages/theme-editor',
	component: theme_editor,
} satisfies Meta<typeof theme_editor>;
export const Default = {
	render(args) {
		return {
			components: {
				theme_editor,
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
			template: '<theme_editor v-bind="props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof theme_editor>;
export default meta;
