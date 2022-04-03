let list = [];

    function addTask(taskName) {
        let max_id = list.reduce((acc, item) => Math.max(item.id), 0);
        list.push({id: max_id + 1, name: taskName, status: 'To Do', priority: 'low'}); 
    }
    
    function changeStatus(taskName, status) {
        list = list.map((item) => {
            if (item.name == taskName) {
                item.status = status;
                return item;
            }
            return item;
        });
    }  

    function changePriority(taskName, priority) {
        list = list.map((item) => {
            if (item.name == taskName) {
                item.priority = priority;
                return item;
            }
            return item;
        });
    }

    function deleteTask(taskName) {
        list = list.filter(item => {
            return item.name !== taskName;
        });
    }
    
    addTask('wake up');
    addTask('have a breakfast');
    addTask('do workout');
    changeStatus('wake up', 'Done');
    changePriority('do workout', 'high');
    deleteTask('have a breakfast');

    function showList() {
            
        let todo = '';
        let done = '';
        let inProgress = '';
    
        list.forEach(item => {
            if (item.status == "To Do") {
                todo += '  ' + item.name + '\n';
            }
    
            if (item.status == "In Progress") {
                inProgress += '  ' + item.name + '\n';
            }
    
            if (item.status == "Done") {
                done += '  ' + item.name + '\n';
            }
        });
    
        if (todo == '') {
            todo = '-\n';
        }
    
        if (inProgress == '') {
            inProgress = '-\n';
        }
    
        if (done == '') {
            done = '-\n';
        }
    
        console.log('Todo:\n' + todo + 'In Progress:\n' + inProgress + 'Done:\n' + done);  
    }
    console.log(list);
    showList();