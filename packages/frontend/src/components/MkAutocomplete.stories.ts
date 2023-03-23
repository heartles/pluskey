/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import MkAutocomplete from './MkAutocomplete.vue';
const meta = {
	title: 'components/MkAutocomplete',
	component: MkAutocomplete,
} satisfies Meta<typeof MkAutocomplete>;
export const Default = {
	render(args) {
		return {
			components: {
				MkAutocomplete,
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
			template: '<MkAutocomplete v-bind="props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkAutocomplete>;
export default meta;
