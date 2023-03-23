/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import MkPlusOneEffect from './MkPlusOneEffect.vue';
const meta = {
	title: 'components/MkPlusOneEffect',
	component: MkPlusOneEffect,
} satisfies Meta<typeof MkPlusOneEffect>;
export const Default = {
	render(args) {
		return {
			components: {
				MkPlusOneEffect,
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
			template: '<MkPlusOneEffect v-bind="props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkPlusOneEffect>;
export default meta;
