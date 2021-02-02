const router = new Navigo('/');

function randomizeArray(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const parseStaticData = (path, callback) => {
    return new Promise((resolve, reject) => {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) {
                    callback(data);
                    return resolve();
                } else {
                    return reject();
                }
            }
        };
        httpRequest.open('GET', path);
        httpRequest.send();
    });
}

const contact = function() {
    return fetch('/contact.html')
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
}

const about = function() {
    return fetch('/about.html')
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
}

const add = function() {
    return fetch('/add.html')
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
}

const listing = function() {
    function createCard(id, img, title, date, view, old = false) {
        let cardTemplate = document.querySelector('#car_card');
        let clone = cardTemplate.content.cloneNode(true);
        if (old) {
            clone.querySelector('a').href = "/details/old/" + id;
        } else {
            clone.querySelector('a').href = "/details/" + id;
        }
        clone.querySelector('.img-fluid').src = "/img/" + img;
        clone.querySelector('h2').textContent = title;
        clone.querySelector('.date').textContent = date;
        clone.querySelector('.views').textContent = view;
        return clone
    }

    return fetch('/listing.html')
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;

            return parseStaticData('/data/data_active.json', function(data) {
                data = data.data
                data = randomizeArray(data);
                const list = document.getElementById('active')
                const toCreate = document.createElement('div')
                for (let i = 0; i < data.length; i++) {
                    toCreate.appendChild(createCard(data[i].id, data[i].image, data[i].title, data[i].date, data[i].view))
                }
                list.innerHTML = toCreate.innerHTML
            })
        }).then((info) => {
            return parseStaticData('/data/data_old.json', function(data) {
                data = data.data
                data = randomizeArray(data);
                const list = document.getElementById('old')
                const toCreate = document.createElement('div')
                for (let i = 0; i < data.length; i++) {
                    toCreate.appendChild(createCard(data[i].id, data[i].image, data[i].title, data[i].date, data[i].view, true))
                }
                list.innerHTML = toCreate.innerHTML
            })
        })
}

const showCars = function(parameters) {
    const id = parameters.data.id

    function createCard(img, desc, stars) {
        let cardTemplate = document.querySelector('#story');
        let clone = cardTemplate.content.cloneNode(true);
        clone.querySelector('img').src = "/img/" + img;
        clone.querySelector('h3').textContent = desc;
        clone.querySelector('.stars').textContent = stars;
        return clone
    }
    return fetch('/detail.html')
        .then(response => {
            return response.text();
        })
        .then(data => {
            return document.getElementById('content').innerHTML = data;
        }).then((info) => {
            return parseStaticData('/data/data_active.json', function(data) {
                data = data.data
                data = randomizeArray(data);
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        document.querySelector('img').src = "/img/" + data[i].image
                        document.querySelector('.title').textContent = data[i].title
                        document.querySelector('.date').textContent = data[i].date
                        document.querySelector('.year').textContent = data[i].year
                        document.querySelector('.price').textContent = data[i].price
                        document.querySelector('.description').textContent = data[i].desc
                        document.querySelector('.color').textContent = data[i].color
                        document.querySelector('.category').textContent = data[i].category
                        document.querySelector('.milage').textContent = data[i].milage
                        return;
                    }
                }
            })
        }).then((info) => {
            parseStaticData('/data/data_stories.json', function(data) {
                data = data.data
                data = randomizeArray(data);
                const list = document.getElementById('stories')
                const toCreate = document.createElement('div')
                for (let i = 0; i < 4; i++) {
                    toCreate.appendChild(createCard(data[i].image, data[i].desc, data[i].stars))
                }
                list.innerHTML = toCreate.innerHTML
            })
        })

}

const showOldCars = function(parameters) {
    const id = parameters.data.id

    function createCard(img, desc, stars) {
        let cardTemplate = document.querySelector('#story');
        let clone = cardTemplate.content.cloneNode(true);
        clone.querySelector('img').src = "/img/" + img;
        clone.querySelector('h3').textContent = desc;
        clone.querySelector('.stars').textContent = stars;
        return clone
    }
    return fetch('/detail.html')
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
            return parseStaticData('/data/data_old.json', function(data) {
                data = data.data
                data = randomizeArray(data);
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        document.querySelector('img').src = "/img/" + data[i].image
                        document.querySelector('.title').textContent = data[i].title
                        document.querySelector('.date').textContent = data[i].date
                        document.querySelector('.year').textContent = data[i].year
                        document.querySelector('.price').textContent = data[i].price
                        document.querySelector('.description').textContent = data[i].desc
                        document.querySelector('.color').textContent = data[i].color
                        document.querySelector('.category').textContent = data[i].category
                        document.querySelector('.milage').textContent = data[i].milage
                        return;
                    }
                }
            })
        }).then((info) => {

            parseStaticData('/data/data_stories.json', function(data) {
                data = data.data
                data = randomizeArray(data);
                const list = document.getElementById('stories')
                const toCreate = document.createElement('div')
                for (let i = 0; i < 4; i++) {
                    toCreate.appendChild(createCard(data[i].image, data[i].desc, data[i].stars))
                }
                list.innerHTML = toCreate.innerHTML
            })
        });
}

const renderer = (match, callback, navigo = null) => {
    if (navigo == null) {
        callback(match).then(() => {
            router.updatePageLinks();
        });
    } else {
        callback(match, navigo).then(() => {
            router.updatePageLinks();
        });
    }
}

router
    .on('/', (match) => (renderer(match, listing)))
    .on('/details/:id', (match) => (renderer(match, showCars)))
    .on('/details/old/:id', (match) => (renderer(match, showOldCars)))
    .on('/add', (match) => (renderer(match, add)))
    .on('/about', (match) => (renderer(match, about)))
    .on('/contact', (match) => (renderer(match, contact)))
    .resolve()

window.addEventListener('load', function() {
    document.querySelector('body').classList.add('loaded');
});