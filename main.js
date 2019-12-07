
// this is for menu
function validateForm() {
    if (isEmpty(document.getElementById('data_2').value.trim())) {
    alert('Reviewer is required!');
    return false;
    }
    if (isEmpty(document.getElementById('data_5').value.trim())) {
    alert('Title is required!');
    return false;
    }
    if (isEmpty(document.getElementById('data_8').value.trim())) {
    alert('Review is required!');
    return false;
    }
    return true;
    }
    function isEmpty(str) { return (str.length === 0 || !str.trim()); }
    function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
    return isEmpty(email) || re.test(email);
    }
// this is for catering
    function update() { 
        var element = document.getElementById("myprogressBar");    
        var width = 1; 
        var identity = setInterval(scene, 10); 
        function scene() { 
          if (width >= 100) { 
            clearInterval(identity); 
          } else { 
            width++;  
            element.style.width = width + '%';  
          } 
        } 
      } 