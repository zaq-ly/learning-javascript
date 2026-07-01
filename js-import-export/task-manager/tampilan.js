// Tugasmu di sini!
// 1. Import semua dari taskManager.js
// 2. Buat fungsi tampilTaskApi(tasks) → looping tasks dari API,
//    tiap task tampilkan sebagai .task-item dengan checkbox + span judulnya
//    (checkbox checked kalau task.completed === true)
// 3. Buat fungsi tampilTaskSaya() → ambil tasks dari localStorage,
//    tampilkan sama seperti di atas
//    (kalau checkbox dicentang → update completed di localStorage & re-render)
// 4. Saat tombol Tambah diklik:
//    - Ambil nilai input
//    - Tambah task baru pakai tambahTask() dengan format:
//      { id: Date.now(), title: input, completed: false }
//    - Re-render tampilTaskSaya()
// 5. Saat halaman dibuka:
//    - Fetch tasks dari API → tampilkan ke #listApi
//    - Tampilkan tasks dari localStorage ke #listSaya

import { simpanTask, ambilTask } from "./taskManager.js";

export const tampilTaskApi = (tasks) => {
    tasks.forEach(task => {
        const taskItem = document.createElement("div")
        taskItem.classList.add("task-item")
        const inputCheckbox = document.createElement("input")
        inputCheckbox.type = "checkbox"
        inputCheckbox.checked = task.completed
        const judulTask = document.createElement("span")
        judulTask.textContent = task.title

        taskItem.appendChild(judulTask)
        taskItem.appendChild(inputCheckbox)
        document.getElementById("listApi").appendChild(taskItem)
    });
}

export const tampilTaskSaya = () => {
    document.getElementById("listSaya").innerHTML = ""
    const ambil = ambilTask()
    ambil.forEach(task => {
        const taskItem = document.createElement("div")
        taskItem.classList.add("task-item")
        const inputCheckbox = document.createElement("input")
        inputCheckbox.type = "checkbox"
        inputCheckbox.checked = task.completed
        inputCheckbox.addEventListener("change", () => {
            const check = ambil.findIndex(c => c.id === task.id)
            ambil[check].completed = inputCheckbox.checked
            simpanTask(ambil)
            tampilTaskSaya()
        })
        const judulTask = document.createElement("span")
        judulTask.textContent = task.title
        taskItem.appendChild(judulTask)
        taskItem.appendChild(inputCheckbox)
        document.getElementById("listSaya").appendChild(taskItem)
    });
}

