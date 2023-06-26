function enoughAirtime() {
  return {
    strList: "",
    returnString: "",
    AT : 0,
    enoughAT: function () {
      let l = this.strList.split(",");

      var cost = 0;
      for (var n of l) {
        let name = n.trim();
        if (name == "call") {
          cost += 1.88;
        } else if (name == "sms") {
          cost += 0.75;
        } else if (name == "data") {
          cost += 12;
        }
      }

      if (cost < this.AT) {
        this.returnString = "R " + (this.AT - cost).toFixed(2);
      }else{
        this.returnString = "R " + (0).toFixed(2);
      }
    }
  }
}