document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("close").addEventListener("click", () => {
    console.log('clicking')
    const boxes = document.querySelectorAll("input");
    boxes.forEach((box) => {
      box.checked = false;
    });
  });
})

// document.getElementById("close").addEventListener("click", () => {
//   console.log("clicking");
//   const boxes = document.querySelectorAll("input");
//   boxes.forEach((box) => {
//     box.checked = false;
//   });
// });


