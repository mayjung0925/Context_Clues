

var h3Arr = document.querySelectorAll('h3');

var friendsArr = [
    'Jane', 
    'Jones', 
    'Brooklyn', 
    'Kenzi', 
    'Yaz'
];
var locationsArr = [
    'hall',
    'office',
    'hall',
    'bedroom',
    'porch',
    'restroom',
    'classroom',
    'kitchen',
    'bathtub',
    'dining room'
];
var weaponsArr = [
    'stick','paper clip','paper', 'flower', 'cotton ball',
    'hat', 'cape', 'spider web', 'water', 'fire', 
    'magic wand', 'bird', 'dinosaur', 'headband','paint brush',
    'water bottle',' cloud','thunder','lightening', 'yarn'
];



for (var i = 0 ; i < h3Arr.length; i++) {
    var newH3 = h3Arr[i];
    newH3.setAttribute('id', i)
    newH3.textContent = 'Accusation ' + (i+1);

    var currentH3 = document.getElementById(i);

    currentH3.addEventListener('click', alertFriend(i))

}

function alertFriend(i) {
    return function () {
        this.style.color = 'skyblue'
        alert(`Accusation ${i+1} :  I accuse ${friendsArr[i%5]}, with the ${weaponsArr[i%20]} in the ${locationsArr[i%10]} `)
       
    };
    
}





