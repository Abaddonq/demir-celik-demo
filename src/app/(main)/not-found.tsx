export default function NotFound() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center'
        }}>
            <h1 style={{ color: 'red', fontSize: '12rem' ,marginBottom:'0'}}> 404</h1>
            <h2 style={{ color:'darkblue', fontSize: '2rem', padding: '5px 3px',marginTop: '0' }}>  Aradığınız web sayfası burada değil</h2>

            <a href="http://localhost:3000">
                <button style={{ marginTop: '20px', padding: '10px 20px',color:'white', backgroundColor: 'red', borderTopRightRadius: '15px' }}>
                     <span style={{ fontSize: '1.5rem' }}>⮕</span>
                       <span>Anasayfaya Dön</span>
                </button>
            </a>
        </div>
    );
}