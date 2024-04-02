const { createApp } = Vue;
createApp({
    data() {
        return {
            tasks: [
                'task1',
                'task2',
                'task3',
            ]
        };
    },
    methods: {

    }
}).mount('#app');