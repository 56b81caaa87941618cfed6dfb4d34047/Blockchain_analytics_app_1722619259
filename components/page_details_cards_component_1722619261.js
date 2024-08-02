/* Summary: Contains a section with three cards with black background and white text.
  The three cards are side by side and each contains a detail name in bold above a detail value.
*/
Vue.component("page_details_cards_component_1722619261", {
    template: `
    <section id="page-details-cards-component" class="py-8 bg-gradient-to-br from-purple-600 to-pink-500">
        <h2 id="details-title" class="text-2xl font-bold mb-8 pl-4 text-white">Details</h2>
        <ul id="details-list" class="grid gap-6 min-[480px]:grid-cols-3 text-sm px-4">
            <li id="project-length" class="p-6 rounded-xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg">
                <div class="font-semibold text-xl text-white mb-2">Real-Time Analysis</div>
                <div class="text-purple-100">Stay ahead of the curve with our advanced analytics platform that ingests and processes new blockchain data as it arrives.</div>
            </li>
            <li id="start-date" class="p-6 rounded-xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg">
                <div class="font-semibold text-xl text-white mb-2" id="start-date-des-1">Actionable Insights</div>
                <time class="text-purple-100" id="start-time-des-1">Gain valuable insights into emerging trends, anomalies, and opportunities by analyzing the latest blockchain transactions and activity.</time>
            </li>
            <li id="end-date" class="p-6 rounded-xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg">
                <div class="font-semibold text-xl text-white mb-2" id="end-date-des-1">Automated Monitoring</div>
                <time class="text-purple-100" id="end-time-des-1">Set up custom alerts and notifications to track specific events, addresses, or transaction patterns of interest.</time>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

