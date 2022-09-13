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
let body = document.querySelector('blur-when-modal');

window.onload=()=>{
  let myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
myModal.show();

body.classList.add('blur');
}

let close_button = document.querySelector('.close');

close_button.onclick=()=>{
coupon.classList.toggle('d-none');
body.classList.remove('blur');
}