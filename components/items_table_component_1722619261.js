/* Summary: Contains a section with:
- A title for the table
- A table with 6 rows and 2 columns. The first column of each row contains the item name on top and description under it. The second column of each row contains the item's price.
- If the user hovers over a price, it shows a blue button on the row labelled "Details"
*/

Vue.component("items_table_component_1722619261", {
    template: `
    <section id="items-table-component" class="py-8 bg-gradient-to-br from-purple-600 to-pink-500 backdrop-blur-lg bg-opacity-30 rounded-3xl shadow-2xl">
        <h2 id="costs-title" class="text-2xl font-bold mb-5 text-white text-center">Blockchain Analytics Tools</h2>
        <div id="costs-table-container" class="overflow-x-auto px-6">
            <table id="costs-table" class="table-auto w-full text-sm bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-xl">
                <thead id="costs-table-header" class="text-white">
                    <tr>
                        <th id="description-header" class="px-4 py-3 text-left">Description</th>
                        <th id="cost-header" scope="col" class="px-4 py-3 text-right">Cost</th>
                    </tr>
                </thead>
                <tbody id="costs-table-body">
                    <tr class="group hover:bg-white hover:bg-opacity-30 transition-all duration-300" id="costs-row-1">
                        <th scope="row" class="text-left font-normal px-4 py-5 border-b border-purple-300 border-opacity-30" id="costs-cell-description-1">
                            <div class="font-semibold mb-0.5 text-white" id="costs-link-1">
                                <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">
                                    On-Chain Data Explorer
                                </a>
                            </div>
                            <p class="text-purple-200" id="costs-description-1">Drill down into raw on-chain data across multiple blockchains</p>
                        </th>
                        <td class="font-semibold text-right px-4 py-5 border-b border-purple-300 border-opacity-30 text-white" id="costs-cell-cost-1">
                            <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">$99/month</a>
                        </td>
                    </tr>
                    <tr class="group hover:bg-white hover:bg-opacity-30 transition-all duration-300" id="costs-row-2">
                        <th scope="row" class="text-left font-normal px-4 py-5 border-b border-purple-300 border-opacity-30" id="costs-cell-description-2">
                            <div class="font-semibold mb-0.5 text-white" id="costs-link-2">
                                <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">
                                    Smart Contract Auditor
                                </a>
                            </div>
                            <p class="text-purple-200" id="costs-description-2">Automated security analysis for Solidity smart contracts</p>
                        </th>
                        <td class="font-semibold text-right px-4 py-5 border-b border-purple-300 border-opacity-30 text-white" id="costs-cell-cost-2">
                            <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">$149/month</a>
                        </td>
                    </tr>
                    <tr class="group hover:bg-white hover:bg-opacity-30 transition-all duration-300" id="costs-row-3">
                        <th scope="row" class="text-left font-normal px-4 py-5 border-b border-purple-300 border-opacity-30" id="costs-cell-description-3">
                            <div class="font-semibold mb-0.5 text-white" id="costs-link-3">
                                <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">Token Metrics Dashboard</a>
                            </div>
                            <p class="text-purple-200" id="costs-description-3">In-depth analytics on token supplies, volumes and holders</p>
                        </th>
                        <td class="font-semibold text-right px-4 py-5 border-b border-purple-300 border-opacity-30 text-white" id="costs-cell-cost-3">
                            <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">$49/month</a>
                        </td>
                    </tr>
                    <tr class="group hover:bg-white hover:bg-opacity-30 transition-all duration-300" id="costs-row-4">
                        <th scope="row" class="text-left font-normal px-4 py-5 border-b border-purple-300 border-opacity-30" id="costs-cell-description-4">
                            <div class="font-semibold mb-0.5 text-white" id="costs-link-4">
                                <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">DEX Liquidity Tracker</a>
                            </div>
                            <p class="text-purple-200" id="costs-description-4">Track liquidity provisioning and slippage across DEXes</p>
                        </th>
                        <td class="font-semibold text-right px-4 py-5 border-b border-purple-300 border-opacity-30 text-white" id="costs-cell-cost-4">
                            <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">$79/month</a>
                        </td>
                    </tr>
                    <tr class="group hover:bg-white hover:bg-opacity-30 transition-all duration-300" id="costs-row-5">
                        <th scope="row" class="text-left font-normal px-4 py-5 border-b border-purple-300 border-opacity-30" id="costs-cell-description-5">
                            <div class="font-semibold mb-0.5 text-white" id="costs-link-5">
                                <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">NFT Rarity Analyzer</a>
                            </div>
                            <p class="text-purple-200" id="costs-description-5">Evaluate rarity and traits for any NFT collection</p>
                        </th>
                        <td class="font-semibold text-right px-4 py-5 border-b border-purple-300 border-opacity-30 text-white" id="costs-cell-cost-5">
                            <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">$129/month</a>
                        </td>
                    </tr>
                    <tr class="group hover:bg-white hover:bg-opacity-30 transition-all duration-300" id="costs-row-6">
                        <th scope="row" class="text-left font-normal px-4 py-5" id="costs-cell-description-6">
                            <div class="font-semibold mb-0.5 text-white" id="costs-link-6">
                                <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">Whale Transaction Monitor</a>
                            </div>
                            <p class="text-purple-200" id="costs-description-6">Get alerts on large transactions from blockchain whales</p>
                        </th>
                        <td class="font-semibold text-right px-4 py-5 text-white" id="costs-cell-cost-6">
                            <a class="hover:text-pink-300 transition-colors duration-300" href="details.html">$199/month</a>
                        </td>
                    </tr>
                </tbody>
                <tfoot id="costs-table-footer">
                    <tr>
                        <th id="total-description" scope="row" class="text-left font-normal px-4 py-5">
                            <p id="total-description-text" class="italic text-purple-200">Total in USD</p>
                        </th>
                        <td id="total-cost" class="font-bold text-right text-lg px-4 py-5 text-white">$704/month</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
