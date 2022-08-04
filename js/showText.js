const showText = ()=>{
    const showBtn = document.querySelector('.btn-show-text');
    const textContent = document.querySelector('.text-content')
    const textContentIcon = document.querySelector('.icon--shown')
    showBtn.addEventListener('click',()=>{
        textContent.classList.toggle('text-content--shown')
        textContentIcon.classList.toggle('active')
    })
}
export default showText;