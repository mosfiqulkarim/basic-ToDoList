let tasks = [];   // the data
    const input = document.getElementById("taskInput");
    const list = document.getElementById("list");

    function render() {
      list.innerHTML = "";                        // clear the screen

      tasks.forEach((task, index) => {            // redraw from the data
        const li = document.createElement("li");
        li.classList.toggle("done", task.done);

        const span = document.createElement("span");
        span.textContent = task.text;

        const del = document.createElement("button");
        del.textContent = "Delete";

        li.addEventListener("click", () => {
          task.done = !task.done;
          render();
        });

        del.addEventListener("click", (e) => {
          e.stopPropagation();                    // don't trigger the li click
          tasks.splice(index, 1);
          render();
        });

        li.append(span, del);
        list.appendChild(li);
      });
    }

        function addTask() {
      const text = input.value.trim();
      if (text === "") return;
      tasks.push({ text: text, done: false });
      input.value = "";
      render();
    }

    document.getElementById("addBtn").addEventListener("click", addTask);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") addTask();
    });