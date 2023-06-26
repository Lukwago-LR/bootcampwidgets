function wordGame() {
    return {
        str: "",

        long: "",
        longestWordLength: 0,

        short: "",
        shortestWordLength: 0,

        allfunction: function () {
            this.longestWord();
            this.shortestWord();
            this.shortestWordLength = this.short.length;
            this.longestWordLength = this.long.length;
        },
        longestWord: function () {
            let strL = this.str.split(" ");
            var longestWord = strL[0];
            for (let word of strL) {
                if (word.length >= longestWord.length) {
                    longestWord = word;
                }
            }
            this.long = longestWord;
        },

        shortestWord: function () {
            let strL = this.str.split(" ");
            var shortestWord = strL[0];
            for (let word of strL) {
                if (word.length <= shortestWord.length) {
                    shortestWord = word;
                }
            }
            this.short = shortestWord;
        },

        wordLengths: function (strList) {
            let strL = this.strList.split(" ");
            var wordLength = 0;
            for (let word of strL) {
                wordLength += word.length;
            }
            return wordLength;
        }
    }

}