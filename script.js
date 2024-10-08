// Functie voor lineair zoeken
function linearSearch(array, target) {
    for (let element of array) {
        if (element === target) {
            return true;
        }
    }
    return false;
}

// Genereer een gesorteerde array van 10000 willekeurige nummers
function generateSortedArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100000) + 1);
    }
    return array.sort((a, b) => a - b);
}

// Functie voor binair zoeken
function binarySearch(array, target, low, high) {
    if (low > high) {
        return false;
    }
    const mid = Math.floor((low + high) / 2);
    if (array[mid] === target) {
        return true;
    } else if (array[mid] > target) {
        return binarySearch(array, target, low, mid - 1);
    } else {
        return binarySearch(array, target, mid + 1, high);
    }
}

// Start de zoekopdracht
document.getElementById('startSearch').addEventListener('click', function() {
    const array = generateSortedArray(10000);
    const target = array[Math.floor(Math.random() * array.length)]; // Kies een willekeurig element

    // Tijd meten voor lineair zoeken
    const linearStartTime = performance.now();
    const linearResult = linearSearch(array, target);
    const linearEndTime = performance.now();
    const linearTime = linearEndTime - linearStartTime;

    // Tijd meten voor binair zoeken
    const binaryStartTime = performance.now();
    const binaryResult = binarySearch(array, target, 0, array.length - 1);
    const binaryEndTime = performance.now();
    const binaryTime = binaryEndTime - binaryStartTime;

    // Resultaten weergeven
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>Lineair zoeken: ${linearResult ? 'Gevonden' : 'Niet gevonden'}</p>
        <p>Tijd voor lineair zoeken: ${linearTime.toFixed(6)} ms</p>
        <p>Binair zoeken: ${binaryResult ? 'Gevonden' : 'Niet gevonden'}</p>
        <p>Tijd voor binair zoeken: ${binaryTime.toFixed(6)} ms</p>
    `;
});
