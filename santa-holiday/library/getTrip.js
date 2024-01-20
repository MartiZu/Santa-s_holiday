const url = "https://santa-backend-t7z8.onrender.com/"

export default async function getTrip() {
    try {const res = await fetch(`${url}trip`);

    if(!res.ok){
        throw new Error(`Something went wrong, status: ${res.status}`);
    }

    const data = await res.json();
    // console.log(data);
    return data;

    } catch (error) {
        console.log(error);
    }
}