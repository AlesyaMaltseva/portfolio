function buttons(buttonsArr) {

   
  buttonsArr[0].classList.add('active');
  const handleButtons = (event) => {                 
     buttonsArr.forEach(btn => btn.classList.remove('active'));    
     event.target.classList.add('active');  
  }
  buttonsArr.forEach(button => button.addEventListener('click', handleButtons));


}

export default buttons;