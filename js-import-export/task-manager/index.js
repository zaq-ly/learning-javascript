
import fetchApi, { tambahTask } from "./taskManager.js";
import { tampilTaskApi, tampilTaskSaya } from "./tampilan.js";


const init = async () => {
    const tasks = await fetchApi()
    tampilTaskApi(tasks)
    tampilTaskSaya()
}
init()

document.getElementById("tombolTambah").addEventListener("click", () => {
    const inputTask = document.getElementById("inputTask").value
    tambahTask({ id: Date.now(), title: inputTask, completed: false })
    tampilTaskSaya()
})