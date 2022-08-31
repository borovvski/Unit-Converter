/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", function () {
  let input = document.getElementById("input").value;
  const metersToFeet = (document.getElementById("length").value = (
    input * 3.281
  ).toFixed(3));
  const litersToGallons = (document.getElementById("volume").value = (
    input * 0.264
  ).toFixed(3));
  const kgToPounds = (document.getElementById("mass").value = (
    input * 2.204
  ).toFixed(3));
  return metersToFeet, litersToGallons, kgToPounds;
});
