import './Banner.css';
function Banner() {
    return (
        <>
        <div className='banner-div' >
            <div className='overlay'>
                <h1 id='banner-title'>  Welcome to our Blogs website</h1>

            </div>
           < img src="/media/Banner.jpg" alt="" width={'100%'} height={'750px'} style={{objectFit:'cover'}}/>
        
        </div>
        </>
    )
}
export default Banner;
// Note: The image source is currently empty. You can replace it with a valid image URL