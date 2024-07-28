export default function Main(props) {
    return (
        <div className="imgContainer" style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <video 
                autoPlay 
                loop 
                muted 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
                <source src="sundance.mp4" type="video/mp4" />
                Your browser does not support the video.
            </video>
        </div>
    );
}
