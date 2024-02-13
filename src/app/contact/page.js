
import axios from 'axios';
import ShortFrom from '../Component/ShortFrom';
import ContactForm from '../Component/ContactForm';
const Contact = () => {
    const HandleSubmit=(e)=>{
        e.preventDefault();
        const data = new FormData(e.target);
        // console.log(data);
        axios.post("http://192.168.0.121:8000/contact/",data)
        .then(function (response) {
            e.target.reset();
        if( response.status === 200){
            Swal.fire({
                title: 'Submit Success',
                timer: 10000,
                button: false,
                timerProgressBar: true,
                customClass: 'swal-Title',
            })
        }

          
        })
        .catch(function (error) {
          console.log(error);
        });
      
    }

      
    return (
        <div className=' lg:flex gap-10 lg:h-[70vh] mt-10 lg:px-20 md:px-5 px-3' id='main'>
            <div className='h-[70vh] lg:w-1/2'>
                    <div className='h-[71vh]'>
                    <iframe className='border-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4921053577773!2d90.42471487599451!3d23.76548448819581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9998b8a324f%3A0xc7e89d05a8adc2e1!2sArena%20Web%20Security%20-%20The%20Hacker&#39;s%20Arena!5e0!3m2!1sen!2sbd!4v1685432813512!5m2!1sen!2sbd" title='map' height="100%" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                 
                </div>
                <div className='lg:w-1/2'>
                <ContactForm/>
                </div>
        </div>
    );
};

export default Contact;


