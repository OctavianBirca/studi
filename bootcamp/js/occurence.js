/**
 * Écrire une fonction `countOccurrences` qui prend une chaîne de caractères et un caractère en entrée et retourne le nombre de fois que le caractère apparaît dans la chaîne.
 * Une occurrence est le nombre de fois qu'un certain caractère apparaît dans une chaîne de caractères.
 **/

function countOccurrences(str, char) {
    str = str.toLowerCase();
    char = char.toLowerCase();

    let counter = 0; 
    for (let i = 0; i < str.length; i++) {
        
        if (str.charAt(i) == char) {
            counter += 1;         
        }
    }
    return counter; 
}

// Exemple d'utilisation
console.log(countOccurrences("hello world", "o")); // 2
console.log(countOccurrences("hello world", "O")); // 2
console.log(countOccurrences("javascript", "a")); // 2
console.log(countOccurrences("javascript", "J")); // 1
console.log(countOccurrences("javascript", "y")); // 0