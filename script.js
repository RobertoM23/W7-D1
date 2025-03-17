class User{
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}.`;
        } else if (this.age < otherUser.age) {
            return `${this.firstName} è più giovane di ${otherUser.firstName}.`;
        } else {
            return `${this.firstName} e ${otherUser.firstName} hanno la stessa età.`;
        }
    }
}

const user1 = new User("Marco", "Castoldi", 52, "Milano");  // Morgan
const user2 = new User("Cristian", "Bugatti", 51, "Rho");   // Bugo
const user3 = new User("Francesca", "Michielin", 30, "Bassano del grappa");

console.log(user1.compareAge(user2)); 
console.log(user2.compareAge(user1)); 
console.log(user1.compareAge(user3)); 



class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    hasSameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

const pets = [];

document.getElementById("petForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;
    
    const newPet = new Pet(petName, ownerName, species, breed);
    pets.push(newPet);
    
    updatePetList();
    
    this.reset();
});

function updatePetList() {
    const petList = document.getElementById("petList");
    petList.innerHTML = "";
    pets.forEach((pet, index) => {
        const petItem = document.createElement("p");
        petItem.textContent = `${pet.petName} (${pet.species}, ${pet.breed}) - Proprietario: ${pet.ownerName}`;
        petItem.setAttribute("data-index", index);
        petList.appendChild(petItem);
    });
}

document.getElementById("compareOwners").addEventListener("click", function() {
    if (pets.length < 2) {
        document.getElementById("comparisonResult").textContent = "Devi aggiungere almeno due animali per confrontare i proprietari.";
        return;
    }

    let resultMessage = "";
    for (let i = 0; i < pets.length; i++) {
        for (let j = i + 1; j < pets.length; j++) {
            if (pets[i].hasSameOwner(pets[j])) {
                resultMessage += `${pets[i].petName} e ${pets[j].petName} hanno lo stesso proprietario (${pets[i].ownerName}).\n`;
            }
        }
    }
    document.getElementById("comparisonResult").textContent = resultMessage || "Nessun animale condivide lo stesso proprietario.";
});