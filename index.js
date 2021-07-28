console.log("JavaScript File Attached!");

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');
var drag=new Audio('drag.mp3');
var drop=new Audio('drop.mp3');

//Event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered!');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    })                                          //yeha humne setTimeout(0) isliye kiya kuki hum isko sbse end m chle
    drag.play();
    
});

imgBox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered!');
    e.target.className = 'imgBox';                //isse hold and hide wali property end ho jayegi dusre div m jb ye image drop hogi to
});

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('Dragover has been triggered!');
    })

    whiteBox.addEventListener('dragenter', (e) => {
        console.log('Dragenter has been triggered!');
        e.target.className+=' dashed';
    })

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('Dragleave has been triggered!');
        e.target.className='whiteBox'
    })

    whiteBox.addEventListener('drop', (e) => {
        console.log('drop has been triggered!');
        e.target.append(imgBox);                        //isse jis box mei hum rkhge wha append ho jayega
        drop.play();
    })
}