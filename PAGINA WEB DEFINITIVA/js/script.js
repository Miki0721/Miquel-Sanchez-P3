(async () => {

        const { value: email } = await Swal.fire({
        title: 'Benvingut!',
        input: 'email',
        inputLabel: 'Entra amb el correu de lUVIC',
        inputPlaceholder: 'CORREU',
        confirmButtonColor:'#f11809',
        })
        
        if (email) {
        Swal.fire(`Entered email: ${email}`)
        }
        
        


        const { value: accept } = await Swal.fire({
        title: 'Terminis i Condicions',
        input: 'checkbox',
        inputValue: 1,
        inputPlaceholder:
            'Estic dacord amb els terminis i condicions',
        confirmButtonText:
            'Som-hi! <i class="fa fa-arrow-right"></i>',
        inputValidator: (result) => {
                    return !result && 'You need to agree with T&C'
                  }
                })
                
                if (accept) {
                  Swal.fire('Perfecte , moltes gràcies :)')
                }
    

    })()

const bdark=document.querySelector('#switch');
const body= document.querySelector('body');
const header= document.querySelector('header1');
bdark.addEventListener('click', e =>{
    body.classList.toggle('darkmode');
    header.classList.toggle('darkmode');

});