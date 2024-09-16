// Task Manager

class Task {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = false;
    }
    
    markAsCompleted() {
        this.completed = true;
    }
    
    displayTask() {
        return `Task: ${this.title}\nDescription: ${this.description}\nDue Date: ${this.dueDate}\nCompleted: ${this.completed ? 'Yes' : 'No'}`;
    }
};

class TaskManager {
    constructor() {
        this.tasks = [];
    }
    
    addTask(task) {
        if (task instanceof Task) {
            this.tasks.push(task);
        } else {
            console.log("Oops! Invalid Task");
        }
    }
    
    showTask() {
        console.log("------Tasks to be completed------");
        console.log(this.tasks.map(item => item.displayTask()).join("\n\n"));
    }
    
    removeTask() {
        // Filter out the completed tasks and update `this.tasks`
        this.tasks = this.tasks.filter(task => task.completed==false);
        this.remainingTask();
    }
    
    remainingTask() {
        console.log("\n------Remaining Tasks------");
        if (this.tasks.length > 0) {
            console.log(this.tasks.map(item => item.displayTask()).join("\n\n"));
        } else {
            console.log("All tasks are completed!");
        }
    }
};

// create objects and call methods
let task1 = new Task("Shopping", "Cargo Pants, Sneakers", "2024-09-20");
let task2 = new Task('Grocery shopping', 'Buy groceries for the week', '2024-09-24');
let s1 = new TaskManager();

s1.addTask(task1);
s1.addTask(task2);
s1.showTask();
task1.markAsCompleted();
s1.removeTask();

