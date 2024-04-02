const { createApp } = Vue;
createApp({
    data() {
        return {
            newTask: '',
            tasks: []
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
                this.tasks.push(trimmedString);
                this.newTask = '';
            } else {
                alert('enter at least 5 characters');
            }
        }
    }
}).mount('#app');