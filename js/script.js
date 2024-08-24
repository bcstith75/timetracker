
getDataByDay('daily');

const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');


daily.addEventListener('click', function(){
  getDataByDay('daily');

  daily.classList.add("text-paleBlue");
  daily.classList.remove("text-blue");

  if(weekly.classList.contains('text-paleBlue') || monthly.classList.contains('text-paleBlue')){
    weekly.classList.remove('text-paleBlue');
    monthly.classList.remove('text-paleBlue');
  }
});

document.getElementById('weekly').addEventListener('click', function(){
  getDataByDay('weekly');

  this.classList.add("text-paleBlue");
  this.classList.remove("text-blue");

  daily.classList.add("text-blue");

  if(daily.classList.contains('text-paleBlue') || monthly.classList.contains('text-paleBlue')){
    daily.classList.remove('text-paleBlue');
    monthly.classList.remove('text-paleBlue');
  }
});

document.getElementById('monthly').addEventListener('click', function(){
  getDataByDay('monthly');

  this.classList.add("text-paleBlue");
  this.classList.remove("text-blue");

  daily.classList.add("text-blue");

  if(daily.classList.contains('text-paleBlue') || weekly.classList.contains('text-paleBlue')){
    daily.classList.remove('text-paleBlue');
    weekly.classList.remove('text-paleBlue');
  }
});




function getDataByDay(day) {

let time = day;

const work = document.getElementById('work');
const play = document.getElementById('play');
const study = document.getElementById('study');
const exercise = document.getElementById('exercise');
const social = document.getElementById('social');





 fetch('../data.json').then((request) => {
  if(!request.ok) {
    console.log('Oops! Something went wrong.');
    return null;
  }

  return request.json();

}).then((data) => {
  console.log(data);
  console.log(time);



  work.innerHTML = `<div class="flex justify-between items-center pb-2">
                      <div class="text-sm text-paleBlue">Work</div>
                      <img src="images/icon-ellipsis.svg" alt="">
                    </div>
                    <div class="text-6xl text-white font-thin pt-6">${data[0].timeframes[time].current}hrs</div>
                    <div class="text-sm text-paleBlue py-3">Last Week - ${data[0].timeframes[time].previous}hrs</div>`;

  play.innerHTML = `<div class="flex justify-between items-center pb-2">
                      <div class="text-sm text-paleBlue">Play</div>
                      <img src="images/icon-ellipsis.svg" alt="">
                    </div>
                    <div class="text-6xl text-white font-thin pt-6">${data[1].timeframes[time].current}hrs</div>
                    <div class="text-sm text-paleBlue py-3">Last Week - ${data[1].timeframes[time].previous}hrs</div>`;

  study.innerHTML = ` <div class="flex justify-between items-center pb-2">
                        <div class="text-sm text-paleBlue">Study</div>
                        <img src="images/icon-ellipsis.svg" alt="">
                      </div>
                      <div class="text-6xl text-white font-thin pt-6">${data[2].timeframes[time].current}hrs</div>
                      <div class="text-sm text-paleBlue py-3">Last Week - ${data[2].timeframes[time].previous}hrs</div>`;
  
  exercise.innerHTML = `<div class="flex justify-between items-center pb-2">
                          <div class="text-sm text-paleBlue">Excercise</div>
                          <img src="images/icon-ellipsis.svg" alt="">
                        </div>
                        <div class="text-6xl text-white font-thin pt-6">${data[3].timeframes[time].current}hrs</div>
                        <div class="text-sm text-paleBlue py-3">Last Week - ${data[3].timeframes[time].previous}hrs</div>`;

  social.innerHTML = `<div class="flex justify-between items-center pb-2">
                        <div class="text-sm text-paleBlue">Social</div>
                        <img src="images/icon-ellipsis.svg" alt="">
                      </div>
                      <div class="text-6xl text-white font-thin pt-6">${data[4].timeframes[time].current}hrs</div>
                      <div class="text-sm text-paleBlue py-3">Last Week - ${data[4].timeframes[time].previous}hrs</div>`;

  care.innerHTML = `<div class="flex justify-between items-center pb-2">
                        <div class="text-sm text-paleBlue">Self Care</div>
                        <img src="images/icon-ellipsis.svg" alt="">
                    </div>
                    <div class="text-6xl text-white font-thin pt-6">${data[5].timeframes[time].current}hrs</div>
                    <div class="text-sm text-paleBlue py-3">Last Week - ${data[5].timeframes[time].previous}hrs</div>`
});





}