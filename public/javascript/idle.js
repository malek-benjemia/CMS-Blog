var idleTime = 0;

async function idlelogout() {

    console.log(idleTime);
    idleTime = idleTime + 1;
    
    if (idleTime >= 5) { // 5 minutes
        
        const response = await fetch('/api/users/logout', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
          });
        
          if (response.ok) {
            document.location.replace('/');
          } else {
            alert(response.statusText);
          }
    }

};


//Zero the idle timer on mouse movement.
document.addEventListener('mousemove', function (e) {
    idleTime = 0;
});
document.addEventListener('keypress', function (e) {
    idleTime = 0;
});

setInterval(idlelogout, 60000);
