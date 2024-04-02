const { createApp } = Vue;
createApp({
    data() {
        return {
            tasks: '123'
        };
    },
    
    methods: {
        deleteItem(indexToDelete) {
            this.tasks.splice(indexToDelete, 1);
        }
    }
}).mount('#app');