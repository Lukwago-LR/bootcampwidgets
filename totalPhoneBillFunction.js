function totalPhoneBill() {

  return {
    strList: "",
    returnString: "",

    bill: function () {
      let l = this.strList.split(",");
      var cost = 0;
      for (var name of l) {
        if (name.includes("call")) {
          cost += 2.75;
        } else {
          cost += 0.65;
        }
      }

      this.returnString = "R " + cost.toFixed(2);

    }

  }

}