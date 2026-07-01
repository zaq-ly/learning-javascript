export const simpanRiwayat = (username) => {
    const riwayat = ambilRiwayat()
    riwayat.push(username)
    localStorage.setItem("riwayat", JSON.stringify(riwayat))
}

export const ambilRiwayat = () => {
    return JSON.parse(localStorage.getItem("riwayat")) || []
}

export default async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        if (!response.ok) throw new Error("Request Gagal " + response.status);
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}
