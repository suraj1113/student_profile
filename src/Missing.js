import { Link } from 'react-router-dom';

const Missing = () => {
    return (
        <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', margin:'20px' }} >
            <h2>Comming Soon</h2>
            <p>Well, that's disappointing.</p>
            <p>
                <Link to='/'style={{ backgroundColor:'#2e84ed', color:'white', padding:'10px', borderRadius:'5px', textDecoration:'none' }}>Visit Our Homepage</Link>
            </p>
        </div>
    )
}

export default Missing