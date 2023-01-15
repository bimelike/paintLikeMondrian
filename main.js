const colorPickers = document.querySelectorAll('.colors')

const mondrainBlock = document.querySelectorAll('.mondrian div')

colorPickers.forEach((color) => {
  color.addEventListener('click', () => {
    let style = getComputedStyle(color)
    let paint = style.backgroundColor
    color.classList.toggle('outline')

    console.log(paint)

    mondrainBlock.forEach((block) => {
      block.addEventListener('click', () => {
        block.style.backgroundColor = paint
      })
    })
  })
})
