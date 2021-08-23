let input = prompt("What you want to do");
const todos = ['Collect Chicken Eggs', 'Do Warm Up', 'Grow Taller', 'Become Very fair']
while (input !== 'quit') {
    if (input === 'list') {
        console.log("****************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i} : ${todos[i]}`);
        }
        console.log("****************");
    }
    else if (input === 'new') {
        const newTodo = prompt("New Todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if (input === 'delete') {
        const ind = prompt("What do you want to delete! Enter Index");
        const deleted = todos.splice(ind, 1);
        console.log(`${deleted} deleted`);
    }
    input = prompt("What you want to do")
}
console.log("App Quites")