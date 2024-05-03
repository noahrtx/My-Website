document.addEventListener('DOMContentLoaded', function(){
  var form=document.querySelector('form');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name=document.querySelector('input[name="name"]').value;
      if(name===''){
         alert('Please enter your name!');
      } else{
    alert('Thank you, '+ name +'!');
      }
  });
});
