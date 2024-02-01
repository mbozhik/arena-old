
import './Gallery.css'
const Gallery = () => {
    return (
        <section className='gallery-container'>
            <h1 className='text-center'>People in Cyber Security</h1>
            <img src='./Shapes/gallery.svg' alt="" width="100%"/>
            <div className='gallery-btn'><a href="https://arenawebsecurity.net/admission"><button type="link" className="btn btn-animate">You can be the next cyber expert. <br /> Enroll Now! </button></a></div>
        </section>
    );
};

export default Gallery;