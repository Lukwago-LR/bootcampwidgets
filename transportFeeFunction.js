function transportFee() {
  return {
    daytime: "",
    day:"",
    price: "",
    fee: function () {
      this.day=this.daytime;
      if (this.day == "morning") {
        this.price = "R20";
      } else if (this.day == "afternoon") {
        this.price = "R10";
      }else if (this.day == "other") {
        this.price = "free";
      }else {
        this.price = "Please choose a time";
      }
    }
  }

}