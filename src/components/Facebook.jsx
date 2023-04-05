import { useState } from 'react';
import profiles from '../data/berlin.json';

function Facebook() {
    const countries = profiles.map((profile) => profile.country);
    const nonRepitedCountries = countries.filter((country, index) => countries.indexOf(country) === index);
    const [countryClicked, setCountryClicked] = useState('')

    function handleOnClick(event) {
        setCountryClicked(event.target.value);
    }


    return (
        <div>
            <div className='d-flex flex-row justify-content-center'>
                {nonRepitedCountries.map((country) => (
                    <button value={country} onClick={handleOnClick} className={`border p-1 m-1 ${country === countryClicked ? 'text-bg-info' : ''}`}>{country}</button>
                    ))}
            </div>
            <div>
                {profiles.map((profile) =>
                    <div className={`card m-3 border d-flex align-items-center flex-row ${profile.country === countryClicked ? 'text-bg-info' : ''}`}>
                        <img className='m-3' src={profile.img} alt='img' style={{width:'200px',height:'200px'}}></img>
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
        </div>
    )
}

export default Facebook;