function getData() {
    // http://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=4e8fe55b900263c5f83603ed631e15ad
    var cityName = document.getElementById('city').value;
    var URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=4e8fe55b900263c5f83603ed631e15ad';

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('data').innerText = JSON.stringify(data);
        })
        .catch(e => console.log(e));
}