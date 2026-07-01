

export const simpanTask = (tasks) => {
    localStorage.setItem("simpan", JSON.stringify(tasks))
}

export const ambilTask = () => {
    return JSON.parse(localStorage.getItem("simpan")) || []
}

export const tambahTask = (task) => {
    const tambah = ambilTask()
    tambah.push(task)
    simpanTask(tambah)
    return tambah
}

export default async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        if (!response.ok) throw new Error("Gagal Request :" + response.status);
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

