
import Link from 'next/link';
import './Review.css'

const Review = () => {
    return (
        <section className='review-container bg-circle'>
            <div className='container-cstm'>
                <h1 className='text-center mb-3'>Here's what others have to Say...</h1>
                <div className='star'>
                <img src='./icons/star.png' alt="" />
                <img src='./icons/star.png' alt="" />
                <img src='./icons/star.png' alt="" />
                <img src='./icons/star.png' alt="" />
                <img src='./icons/rating.png' alt="" />
                </div>
                <div className='review-img'>
                    <img src='./icons/main_review.svg' alt="" className='' width="100%"/>
                </div>
                <div className='review-btn'><Link href="/admission" className='mt-5 flex justify-center'><button type="" className="btn btn-warning btn-animate">If you Want To See Yourself Here. Then <br /> Join Now! </button></Link></div>
            </div>
        </section>
    );
};

export default Review;