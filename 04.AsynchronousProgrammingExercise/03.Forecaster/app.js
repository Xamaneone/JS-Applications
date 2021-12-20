async function attachEvents() {
    const location = document.getElementById('location').value

    document.querySelector('#submit').addEventListener('click', getForecast);


}

attachEvents();

async function getForecast(name) {
    const code = await getLocationCode(name);

    const [current, upcoming] = Promise.all([
        getCurrent(code),
        getUpcoming(code),
    ]);

    console.log(current, upcoming)
}


async function getLocationCode(name) {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';

    const res = await fetch(url);
    const data = await res.json();

    try {
        const location = data.find(l => l.name === name);
    } catch (error) {
        console.error(error);
    }

    return location.code
}


async function getCurrent(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;

    const res = await fetch(url);
    return await res.json();

}


async function getUpcoming(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;

    const res = await fetch(url);
    return await res.json();

}