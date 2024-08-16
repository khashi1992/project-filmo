

const sub=document.querySelector('#submit');
sub.addEventListener('click',(e)=>{ 
    e.preventDefault();
    const inp=document.querySelector('#inp');
    let pattern = /[a-z0-9]/;

    if(inp.value.length==''){
        swal({
            text: "شماره موبایل خود را وارد کنید",
            buttons:false,
            icon:'info'
          });
    
    }
    else if(inp.value.length==11 && pattern.test(inp.value)){
        
        swal({
            text: "شماره موبایل درست است",
         
            buttons:false,
            icon:'success'
          });
    }else{
        swal({
            text: "شماره موبایل خود را درست وارد کنید",
            buttons:false,
            icon:'error'
          });
         
    }
})

