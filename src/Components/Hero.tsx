import profile from '/gowtham.jpeg';

function Hero() {
    return(
        <div className="h-screen min-h-max flex items-center justify-around mx-20">
            <div className="text-6xl font-bold text-SolidHeading leading-snug">
                <p>Hi 👋,</p>
                <p>My name is</p>
                <p>Gowthamkumar J</p>
                <p>I build things for web</p> 
            </div>
            <div className='border-3 border-solid border-gray-500 p-4'>
                <img src={profile} alt="gowthamk17" className='rounded-full h-96' />
            </div>
        </div>
    );
}

export default Hero;