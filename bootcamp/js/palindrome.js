/**
 * Consigne : Écrire une fonction `isPalindrome` qui prend une chaîne de caractères en entrée et retourne `true` si la chaîne est un palindrome et `false` sinon.
 * Rappel :  Un palindrome est une chaîne de caractères qui se lit de la même façon de gauche à droite et de droite à gauche (par exemple "radar", "level").
 **/


function isPalindrome(str) {
    let start = 0;
    let end = str.length-1;
   
    for (i = 0; i < str.length/2; i++) {
        if (str.charAt(start) !== str.charAt(end)) { 
            return false;
       
        } 

        start += 1;
        end -= 1;
          
    }
    return true; 
}

// Exemple d'utilisation
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("javascript")); // false