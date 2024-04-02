const { createApp } = Vue;
createApp({
    data() {
        return {
            isError: false,
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
        // funzione btn add new task
        addNewTask() {
            const trimmedString = this.newTask.trim();
            if(trimmedString.length >= 5) {
                this.tasks.unshift(trimmedString);
                this.newTask = '';
                this.isError = false;
            } else {
                this.isError = true;
            }
        }
    }
}).mount('#app');