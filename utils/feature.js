export const getAllUsers = async (id) => {
    const url = id ? `https://jsonplaceholder.typicode.com/users/${id}` :
        'https://jsonplaceholder.typicode.com/users/'

    const res = await fetch(url)

    if (!res.ok) return new Error("Something went wrong");
    return await res.json();
}

export const getUserPosts = async (id) => {

    const url = id ? `https://jsonplaceholder.typicode.com/posts?userId=${id}` :
        'https://jsonplaceholder.typicode.com/posts/'

    const res = await fetch(url)

    if (!res.ok) return new Error("Something went wrong");
    const data = await res.json();

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 3000)
    })
}

export const getAllPosts = async (id) => {

    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const res = await fetch(url)

    if (!res.ok) return new Error("Something went wrong");
    const data = await res.json();
    return data;
}
