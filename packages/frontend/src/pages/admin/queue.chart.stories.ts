/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import queue_chart from './queue.chart.vue';
const meta = {
	title: 'pages/admin/queue.chart',
	component: queue_chart,
} satisfies Meta<typeof queue_chart>;
export const Default = {
	render(args) {
		return {
			components: {
				queue_chart,
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
			template: '<queue_chart v-bind="props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof queue_chart>;
export default meta;
