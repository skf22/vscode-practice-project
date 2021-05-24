const button = document.getElementById("button")
const frank = document.getElementById('el')
button.addEventListener("click", e =>
  button.textContent === "Change Background Color!"
    ? (button.textContent = "Background Changed!")(
        document.body.classList.add("background")
      )
    : (button.textContent = "Change Background Color!")(
        document.body.classList.remove("background")
      )
)