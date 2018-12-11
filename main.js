$(() => {
    const square = document.getElementById('square'),
    	  links = square.querySelectorAll('a');
    const test = document.getElementsByClassName('test')[0];
    console.log(square);
    links.forEach(hyperlink => {
        hyperlink.addEventListener('click', (() => {
            console.log(test);
            square.style.display="none";
           	test.style.width ="100%"
        }));
    })
})