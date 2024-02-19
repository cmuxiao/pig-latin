function convertToPigLatin() {
    let text = document.getElementById('inputText').value;
    let words = text.split(/\s+/);
    let pigLatinWords = words.map(word => {
        // Check if the word starts with a vowel
        if ('aeiou'.includes(word[0].toLowerCase())) {
            return word + "ay";
        } else {
            // Find the first vowel position
            let firstVowelIndex = word.search(/[aeiou]/i);
            if (firstVowelIndex > 0) {
                return word.substring(firstVowelIndex) + word.substring(0, firstVowelIndex) + "ay";
            } else {
                // In case there's no vowel, just add "ay" at the end
                return word + "ay";
            }
        }
    });

    document.getElementById('outputText').textContent = pigLatinWords.join(" ");
}
