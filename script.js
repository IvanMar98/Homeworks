function addTask(callback) {
    const btnAdd = document.getElementById('btnAdd');
    btnAdd.addEventListener("click", () => {
        const inputTask = document.getElementById('inpTask').value;
        const tasks = [];
        tasks.push(inputTask);
        const lista = document.getElementById('lista');

        tasks.forEach(item => {
            const li = document.createElement('li');
            li.id = `element${item}`;
            const checkBox = document.createElement('input');
            checkBox.type = 'checkBox';
            checkBox.id = `completeTask${item}`;
            li.textContent = item;
            lista.appendChild(li);
            li.appendChild(checkBox);
            document.getElementById('inpTask').value= "";
        });
        
        callback(tasks);
    });

}

addTask(function completeTask(...array) {
    array.forEach(item => {
        const classTask = document.getElementById(`completeTask${item}`);
        classTask.addEventListener("change", () => {
            if (classTask.value == 'on') {
                const element = document.getElementById(`element${item}`);
                const arrayTaskComplete = [];
                arrayTaskComplete.push(item);
                const listaComplete = document.getElementById('listaComplete');
                arrayTaskComplete.forEach(newItem => {
                    const li = document.createElement('li');
                    li.id = `element${newItem}`;
                    li.textContent = newItem;
                    listaComplete.appendChild(li);
                    setTimeout(function () {
                        element.remove();

                    }, 1000);
                });


            }
        })
    })
});