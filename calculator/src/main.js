import Vue from 'vue'
import App from './App'

new Vue({
    // Render pega um componente e renderiza na página
    render: createElement => createElement(App)
}).$mount("#app")