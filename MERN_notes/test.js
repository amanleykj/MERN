const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
    {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
    },
    {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
    }
    ],
    createdAt: 1543945177623
};

const { firstName : first_name, lastName : last_name, ...otherstuff } = person

const stuff = ["jumble", "crumble", "tumble", "grumble"]


const grab_info = () => {
    console.log("I would like to introduce you to " + first_name, last_name + ", a dear friend of mine.")
    for (let idx = 0; idx < person.length; idx++) {
        const output = person[idx];
        if(output === "tumble"){
            console.log("Found tumble")
            return true
        }
        else{
            console.log("Not found yet")
        }
    }
}

grab_info()