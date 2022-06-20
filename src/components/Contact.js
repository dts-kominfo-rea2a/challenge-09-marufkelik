// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({data}) => {
    return (
  
    <div className='dataKontak' style={{display:'flex', justifyContent:'center', flexDirection:'row-reverse', gap:'5em', backgroundColor:'#32bafd',
        marginLeft:'35%', marginRight:'35%', paddingBottom:'30px', paddingTop:'30px', borderRadius:'10px'
        }}>
            <div className='dataText' style={{paddingLeft:'20px', width:'30%'}}>
            <p>{data.name}</p>
            <p>{data.phone}</p>
            <p>{data.email}</p>
            </div>
            <div className='dataGambar' style={{paddingRight:'20px'}} >
            <img src={data.photo} alt='img' style={{width:'150px', height:'150px', borderRadius:'75px'}} />
            </div>
        </div> 
  
    )
}

export default Contact;