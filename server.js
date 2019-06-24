var prompt = require('prompt');

var prompt_attributes = [
    {
        name: 'adults'
    },
    {
        name: 'children'
    },
    {
        name: 'infants'
    }
];

console.log('Enter the number of Adults, children, infants for booking !')

prompt.start();


prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    } else {
        var adults = parseInt(result.adults);
        var children = parseInt(result.children);
        var infants = parseInt(result.infants);

        const maxGuests = 7;
        const maxNonAdults = Math.max(children, infants);
        const maxNonAdultRooms = Math.ceil(maxNonAdults / 3);

        if (((adults + children) <= maxGuests) && (infants <= 9)) {
            if (adults < maxNonAdultRooms) {
                console.log('Minimun one adult is required in a room!');
            } else {
                const maxAdultRooms = Math.ceil(adults / 3);
                const minRooms = Math.max(maxNonAdultRooms, maxAdultRooms);
                console.log('Minimum Rooms Required : ' + minRooms);
            }
        } else {
            console.log('Maximum guests can be 7 excluding infants!');
        }
    }
});