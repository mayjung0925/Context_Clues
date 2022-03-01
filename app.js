

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



for (var i = 0; i < h3Arr.length; i++) {
    var newH3 = h3Arr[i];
    newH3.setAttribute('id', i)
    newH3.textContent = 'Accusation ' + (i + 1);

    var indexOfFriends = i % 5;
    var friend = friendsArr[indexOfFriends];

    var indexOfWeapons = i % 20;
    var weapon =  weaponsArr[indexOfWeapons]; 

    var indexOfLocations = i % 10
    var newLocation =locationsArr[indexOfLocations];
   


    var currentH3 = document.getElementById(i);

    currentH3.addEventListener('click', alertFriend(friend , weapon ,  newLocation ))

}

function alertFriend( friend, weapon, newLocation ) {
    return function () {
        this.style.color = 'skyblue'
        alert(' I accuse ' + friend + ' , with the '+ weapon + ' in the '  + newLocation )
    };
    
}





