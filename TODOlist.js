/*
const list = {};
    
    function addTask(adding) {
        adding["create a task"] = "In Progress";
        adding["make a bed"] = "Done";
        adding["write a post"] = "To Do";
        adding["have a walk"] = "To Do"
        return adding
    }
    console.log(addTask(list));

    function changeStatus(change) {
        change["write a post"] = "Done";
        return change
    }
    console.log(changeStatus(list));

    function deleteTask(deleteIt) {
        delete deleteIt["have a walk"];
        return deleteIt
    }
    console.log(deleteTask(list));

    function showList() {
        
    }
*/

const list = {};

    function addTask(task, status) {
        list[task] = status;
    }
    addTask('wake up', 'To Do');
    addTask('do workout', 'To Do');
    addTask('have a breakfast', 'To Do');

    function changeStatus(task, status) {
        list[task] = status;
    }
    changeStatus('wake up', 'Done');
    changeStatus('do workout', 'In Progress')

    function deleteTask(task) {
        delete list[task];
    }
    deleteTask('do workout');

    function showList() {
        console.log('To do:')
            for (let tsk in list) {
                if (list[tsk] == 'To Do') 
                    console.log(tsk);
                } 
        console.log('In Progress:')
            for (let tsk in list) {     
                if (list[tsk] == 'In Progress') 
                    console.log(tsk);
                } 
        console.log('Done:')
            for (let tsk in list) {     
                if (list[tsk] == 'Done') 
                    console.log(tsk);
                }
    }
    showList();