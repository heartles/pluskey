/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import MkSignup from './MkSignup.vue';
const meta = {
	title: 'components/MkSignup',
	component: MkSignup,
} satisfies Meta<typeof MkSignup>;
export const Default = {
	render(args) {
		return {
			components: {
				MkSignup,
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
			template: '<MkSignup v-bind="props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkSignup>;
export default meta;
