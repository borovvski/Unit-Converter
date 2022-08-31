/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", function () {
  let input = document.getElementById("input").value;
  const metersToFeet = (document.getElementById("meters-to-feet").value = (
    input * 3.281
  ).toFixed(3));
  const feetToMeters = (document.getElementById("feet-to-meters").value = (
    input * 0.3048
  ).toFixed(3));
  const litersToGallons = (document.getElementById("liters-to-galons").value = (
    input * 0.264
  ).toFixed(3));
  const gallonsToLiters = (document.getElementById("galons-to-liters").value = (
    input * 3.78541178
  ).toFixed(3));
  const kgToPounds = (document.getElementById("kilograms-to-pounds").value = (
    input * 2.204
  ).toFixed(3));
  const poundsToKilograms = (document.getElementById(
    "pounds-to-kilograms"
  ).value = (input * 0.45359237).toFixed(3));
  return (
    metersToFeet,
    feetToMeters,
    litersToGallons,
    gallonsToLiters,
    kgToPounds,
    poundsToKilograms
  );
});
