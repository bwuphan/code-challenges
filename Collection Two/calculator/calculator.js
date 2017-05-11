$(function () {
  let answer = document.querySelector('.calculator input');
  const numbers = new RegExp('^[0-9]+$');
  $('td').on('click', function() {
    let val = $(this).context.innerText;
    console.log(val)
    if (val === '=') {
      answer.value = eval(answer.value).toString();
      console.log(answer.value)
      // answer.value = answer.value.slice(0, answer.value.length - 1)
    } else if (val === 'C') {
      answer.value = '';
    } else {
      answer.value += $(this).context.innerText;
    }

  })
})
  // document.querySelectorAll('button').forEach((button) => {
  //   console.log(button)
  //   button.addEventListener('click', () => {
  //       console.log('clicked')
  //     });
  // });
  