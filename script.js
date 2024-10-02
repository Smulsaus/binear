// Lineair zoekfunctie
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}

// Binair zoekfunctie
function binarySearch(arr, target, low, high) {
    if (low > high) {
        return false;
    }
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        return true;
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, high);
    }
}

// Functie om een array met willekeurige getallen te genereren en te sorteren
function generateArray(size, maxValue) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * maxValue) + 1);
    }
    return arr.sort((a, b) => a - b);
}

// Array genereren
let arr = generateArray(10000, 100000);

// Zoekfunctionaliteit voor beide knoppen
document.getElementById('linearSearchBtn').addEventListener('click', () => {
    let target = parseInt(document.getElementById('searchValue').value);
    if (isNaN(target)) {
        document.getElementById('result').innerText = 'Vul een geldig getal in.';
        return;
    }

    let start = performance.now();
    let result = linearSearch(arr, target);
    let end = performance.now();

    document.getElementById('result').innerText = `Lineair Zoeken: Target ${result ? 'gevonden' : 'niet gevonden'}\nTijd: ${(end - start).toFixed(4)} ms`;
});

document.getElementById('binarySearchBtn').addEventListener('click', () => {
    let target = parseInt(document.getElementById('searchValue').value);
    if (isNaN(target)) {
        document.getElementById('result').innerText = 'Vul een geldig getal in.';
        return;
    }

    let start = performance.now();
    let result = binarySearch(arr, target, 0, arr.length - 1);
    let end = performance.now();

    document.getElementById('result').innerText = `Binair Zoeken: Target ${result ? 'gevonden' : 'niet gevonden'}\nTijd: ${(end - start).toFixed(4)} ms`;
});
