
import certification from '@/app/Component/TicketAssets/winner.png'
import './Certification.css'

const Certification = () => {
    return (
        <section className='certificate-container'>
            <div className='container-cstm certificate-parent'>
            <img src='./Shapes/winner.png' alt="Certification"/>
            <h1 className='mt-4 mb-3 text-center'>Certification</h1>
            <p className='text-center'>Certified by Bangladesh Institute of Cyber Security</p>
            </div>
        </section>
    );
};

export default Certification;