function greet() {
  return {
    nameUser: "",
    greetPhrase: "",
    selectedLanguage: "",
    greeting: function () {
      this.greetPhrase = this.nameUser;
    }
  }

}