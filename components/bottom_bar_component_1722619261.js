/* Summary: Contains a bar fixed at the bottom of the page with a transparent background with a blur effect.
It has two buttons: Contact button that directs to the contact page and Pay button that directs to the payment page, styled with a blue background and a shine animation effect.
*/
Vue.component("bottom_bar_component_1722619261", {
    template: `
    <section id="bottom-bar-component" class="fixed bottom-0 z-30 w-full lg:w-1/2 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-opacity-30 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-t-3xl shadow-lg">
        <div id="bottom-bar-component-content" class="w-full max-w-xl mx-auto px-6 py-6">
            <div id="action-buttons" class="flex space-x-6 justify-center">
                <a id="contact-button" class="btn flex items-center justify-center w-1/2 h-14 p-4 text-white font-semibold text-lg tracking-wide bg-white bg-opacity-20 rounded-2xl hover:bg-opacity-30 transition duration-300 ease-in-out shadow-md backdrop-filter backdrop-blur-sm" href="contact.html">Contact</a>
                <a id="pay-button" class="btn flex items-center justify-center w-1/2 h-14 p-4 text-white font-semibold text-lg tracking-wide bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl hover:from-pink-600 hover:to-purple-700 transition duration-300 ease-in-out shadow-md backdrop-filter backdrop-blur-sm">Pay</a>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            expanded:false,
            tab:null
        }
    },
});
