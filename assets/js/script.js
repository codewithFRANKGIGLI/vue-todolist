const { createApp } = Vue;
createApp({
    data() {
        return {
            todos: [
                {
                    text: 'Vue 3 basics 1',
                    done: false
                },{
                    text: 'Vue 3 basics 2',
                    done: true
                },{
                    text: 'Vue 3 basics 3',
                    done: false
                },
            ],
            isError: false,
            newTask: '',
        };
    },
    
    methods: {
        // funzione btn delete
        deleteItem(indexToDelete) {
            this.todos.splice(indexToDelete, 1);
        },
        // funzione btn add new task
        addNewTask() {
            const newTodo = {
                text: this.newTask,
                done: false
            };
            if(newTodo.text.length >= 5) {
                this.isError = false;
                this.todos.unshift(newTodo);
                this.newTask = '';
            } else {
                this.isError = true;
            }
        },
        checkTask(todoDone) {
            if(todoDone.done) {
                todoDone.done = false;
            } else {
                todoDone.done = true;
            }
        }
    }
}).mount('#app');