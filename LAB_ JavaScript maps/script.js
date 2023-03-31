function calcWordFrequencies() {
    let word = prompt();

    let list = new Map();

    let words = word.split(" ");

    for (let i = 0; i < words.length; ++i) {
        if (list.has(words[i])) {
            let count = list.get(words[i]) + 1;
            list.set(words[i], count);
        }
        else {
            list.set(words[i], 1);
        }
    }

    for (let [word, num] of list) {
        console.log(word + " " + num);
    }

}


