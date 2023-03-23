/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import _error_ from './_error_.vue';
const meta = {
	title: 'pages/_error_',
	component: _error_,
} satisfies Meta<typeof _error_>;
export const Default = {
	render(args) {
		return {
			components: {
				_error_,
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
			template: '<_error_ v-bind="props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof _error_>;
export default meta;
