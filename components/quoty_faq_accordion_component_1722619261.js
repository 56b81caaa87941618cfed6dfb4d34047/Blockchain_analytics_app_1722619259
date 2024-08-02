/* Summary: Contains a section with:
1. Accordion title: An h2 element that displays the title of the FAQ section, styled for font size, weight, and margin.
2. Accordion container: A div element that holds multiple accordion items, styled with vertical spacing. Each item has a visible question. When the + icon on the right is clicked, it expands to show the answer for that question.
*/

Vue.component("quoty_faq_accordion_component_1722619261", {
    template: `
    <section class="py-8 pl-4 bg-gradient-to-br from-purple-600 to-pink-500 backdrop-blur-md bg-opacity-30 rounded-xl shadow-lg">
        <h2 class="text-2xl font-bold mb-5 text-white">Frequently Asked Questions About Our Blockchain Analytics App</h2>
        <!-- Accordion -->
        <div class="space-y-3">
            <!-- Accordion item -->
            <div v-for="(term, index) in terms" :key="index" class="text-sm rounded-lg backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300" :class="[{ 'expanded': term.expanded }]">
                <h3>
                    <button type="button" class="flex items-center justify-between w-full text-left font-medium px-5 py-3 text-white" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                        <span>{{ term.title }}</span>
                        <svg class="shrink-0 ml-8 fill-white" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                        </svg>
                    </button>
                </h3>
                <div :id="'terms-text-' + index" role="region" :aria-labelledby="'terms-title-' + index" class="text-white grid overflow-hidden transition-all duration-300 ease-in-out" :class="[{ 'grid-rows-1fr opacity-100': term.expanded, 'grid-rows-0fr opacity-0': !term.expanded }]">
                    <div class="overflow-hidden" :id="'terms-text-' + index + '-content'">
                        <p class="px-5 pb-3" :id="'terms-text-' + index + '-description'">
                            {{ term.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            terms: [
                { title: "What is this app for?", description: "Our app provides advanced analytics for blockchain data. It allows you to track, monitor, and gain insights into new transactions, smart contracts, and activity across multiple blockchain networks.", expanded: false },
                { title: "What blockchain platforms does it support?", description: "We currently support Ethereum, Bitcoin, Polygon, Solana, and Binance Smart Chain. More platforms will be added based on user demand.", expanded: false },
                { title: "How does the analysis work?", description: "Our app ingests real-time blockchain data through node connections. It then processes and organizes this data using proprietary parsing algorithms to extract valuable information and insights.", expanded: false },
                { title: "What kind of analytics can I get?", description: "You can analyze transaction flows, smart contract activity, token transfers, network usage metrics, and more. Customizable dashboards allow you to visualize the data based on your needs.", expanded: false },
            ],
        };
    },
    methods: {
        toggle(index) {
            this.terms[index].expanded = !this.terms[index].expanded;
        },
    },
});
