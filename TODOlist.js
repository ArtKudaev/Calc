let list = [];

    function addTask(taskName) {
        let max_id = list.reduce((acc, item) => Math.max(item.id), 0);
        list.push({id: max_id + 1, name: taskName, status: 'To Do', priority: 'low'}); // добавление объектов в массив
    }
    
    function changeStatus(taskName, status) {                                          // изменение статуса
        list = list.map((item) => {
            if (item.name == taskName) {
                item.status = status;
                return item;
            }
            return item;
        });
    }  

    function changePriority(taskName, priority) {                                      // изменение приоритета 
        list = list.map((item) => {
            if (item.name == taskName) {
                item.priority = priority;
                return item;
            }
            return item;
        });
    }

    function deleteTask(taskName) {                                                    // удаление задачи
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

    function showBy(group) {
        
        let todo = '';
        let done = '';
        let inProgress = '';
    
        list.forEach(item => {                                                         // группировка по статусу
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
    
        let lowPriority = '';
        let highPriority = '';

        list.forEach(item => {                                                          // группировка по приоритету
            if (item.priority == 'low') {
                lowPriority += ' ' + item.name + '\n';
            }

            if (item.priority == 'high') {
                highPriority += ' ' + item.name + '\n';
            }
        });

        if (lowPriority == '') {
            lowPriority = '-\n';
        }

        if (highPriority == '') {
            highPriority = '-\n';
        }

        
            if (group == 'status') {
                console.log('Todo:\n' + todo + 'In Progress:\n' + inProgress + 'Done:\n' + done);  // вывод ToDo листа по статусу
            }
            else if (group == 'priority') {
                console.log('low:\n' + lowPriority + 'high:\n' + highPriority);                    // вывод ToDo листа по приоритету
            } 
        
    }
    console.log(list);
    showBy('priority');