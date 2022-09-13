const couponCode= document.getElementById('coupon-code-div');
//const couponcode=document.getElementById('')
const couponbtn=document.getElementById('btn-coupon');        
couponbtn.onclick= ()=>{
  couponCode.classList.toggle('d-none');
};
const coupon= document.getElementById('coupon-code-span');
const couponText = document.getElementById('couponText');

coupon.onclick=()=>{

  navigator.clipboard.writeText(couponText.value).then(()=>{
alert('copied to clipboard');
  }); 
}
let body = document.querySelectorAll('.blur-when-modal');
let body_container = document.querySelectorAll('.body.modal-open');
let superContainer = document.querySelector('.super-container');


window.onload=()=>{
  let myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
  myModal.show();

  
  body_container[0].style.paddingRight="0px";
  
  superContainer.style.marginTop="91px";

}

let close_button = document.querySelector('.close');

close_button.onclick=()=>{
coupon.classList.toggle('d-none');

}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

