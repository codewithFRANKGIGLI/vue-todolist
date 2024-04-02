const { createApp } = Vue;
createApp({
    data() {
        return {
            newTask: '',
            tasks: [
            ]
        };
    },
    
    methods: {
        // funzione btn delete
        deleteItem(indexToDelete) {
            this.tasks.splice(indexToDelete, 1);
        },
        // funzione btn  add task

    }
}).mount('#app');