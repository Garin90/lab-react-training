import profiles from '../data/berlin.json';

function Facebook() {
    return (
        <div>
            {profiles.map((profile) => 
                <div className='card m-3 border d-flex flex-row'>
                    <img src={profile.img} alt='img' style={{width:'200px',height:'200px'}}></img>
                    <div className='flex-column'>
                        <div className='d-flex flex-row'>
                            <h1 className='fw-bold me-3'>First name:</h1><h1 className='fw-light'>{profile.firstName}</h1>
                        </div>
                        <div className='d-flex flex-row'>
                            <h1 className='fw-bold me-3'>Last name:</h1><h1 className='fw-light'>{profile.lastName}</h1>
                        </div>
                        <div className='d-flex flex-row'>
                            <h1 className='fw-bold me-3'>Country:</h1><h1 className='fw-light'>{profile.country}</h1>
                        </div>
                        <div className='d-flex flex-row'>
                            <h1 className='fw-bold me-3'>Type:</h1><h1 className='fw-light'>{profile.isStudent ? 'Student' : 'Teacher'}</h1>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Facebook;