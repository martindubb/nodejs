const kegelVol = (radius, hoehe) => {
    return 1 / 3 * Math.PI * Math.pow(radius, 2) * hoehe;
  }
  
  const zylinderVol = (radius, hoehe) => {
    return Math.PI * Math.pow(radius, 2) * hoehe;
  }
  
  const kugelVol = (radius) => {
    return 4 / 3 * Math.PI * Math.pow(radius, 3);
  }
  
  module.exports = {
    kegelVol,
    zylinderVol,
    kugelVol
  }