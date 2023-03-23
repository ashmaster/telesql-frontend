import './login.css';

const Welcome = (props) => {
    return(
        <div className='container'>
            <div className='header'>
                <div className='title'>
                    <span>TeleSQL</span>
                </div>
            </div>
            <div className='main'>
                <div className='box'>
                    <div className='welcome'>
                        <span>Welcome</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome