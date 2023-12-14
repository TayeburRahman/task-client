
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import jsImg from '../../assets/imagejs.png';
import reactImg from '../../assets/imagereact.png';
import { useGetUserFormDataQuery, useLazyPostFormDataQuery } from '../../features/auth/authApi';
import CategorySelector from '../CategorySelector';
import Footer from '../shared/Footer';
import Header from '../shared/Navbar';




function Home() {
    const [name, setName] = useState('');
    const [selectedSectors, setSelectedSectors] = useState([]);
    const [agree, setAgree] = useState(false); 
    const [categories, setCategories] = useState([]);
    const [editData, setEditData] = useState(false);

    const { user_data } = useSelector((state) => state.auth);
    const localAuth = localStorage?.getItem('auth');
    const { user } = JSON.parse(localAuth);

    const [postFormData, { error: resError }] = useLazyPostFormDataQuery();
    useGetUserFormDataQuery(user?.email);

    useEffect(() => {
        fetchSectors();

        if (user_data) {
            setSelectedSectors(user_data.sectors);
            setName(user_data.name);
            setAgree(user_data.agree);
            setEditData(true);
        }
    }, [user_data]);

    const fetchSectors = async () => {
        try {
            const response = await fetch('https://task-server-api.vercel.app/api/v1/data/input');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching sectors:', error);
        }
    };

    const handleSave = async () => {
        // Validate input
        if (!name || selectedSectors?.length === 0 || !agree) {
            alert('Please fill in all mandatory fields.');
            return;
        }

        //  displayed in the form and sent to the backend
        const dataToSave = {
            name,
            sectors: selectedSectors,
            agree,
            user: user?.email,
        };  

        await postFormData(dataToSave);

        // try {
        //     // Replace 'YOUR_BACKEND_API_URL/save' with your actual backend API endpoint for saving data
        //     const response = await fetch('YOUR_BACKEND_API_URL/save', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(dataToSave),
        //     });

        //     const savedData = await response.json();
        //     setSavedData(savedData);
        // } catch (error) {
        //     console.error('Error saving data:', error);
        // }
    };


    return (
        <Fragment>
            <Header />
            <section className="banner container_">
                <div className="content__container text_left">
                    <h1>
                        Power of Versatility<br />
                        <span className="heading__1">Mastering JavaScript & </span><br />
                        <span className="heading__2">Building UI wit React</span>
                    </h1>
                    <p>
                        Building websites with JavaScript React provides developers with a powerful and efficient toolkit for creating modern and responsive user interfaces. React's component-based architecture encourages modular development, fostering code reuse and maintainability.
                    </p>
                    <form>
                        <input type="text" placeholder="What do you want to learn" />
                        <button type="submit">Search Now</button>
                    </form>
                </div>
                <div className="image__container">
                    <img src={reactImg} alt="header" />
                    <img src={jsImg} alt="header" />
                    <div className="image__content text_left">
                        <ul>
                            <li>Get 30% off on every 1st month</li>
                            <li>Expert teachers</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='container_ mt-5'>
                <h6 className='text_note'>Please enter your name and pick the Sectors you are currently involved in.</h6>
                {user_data && (
                    <div className='handler'>
                        <button className='button_' id={editData ? 'edit' : 'cancel'} onClick={() => setEditData(!editData)}>
                            {editData ? 'Edit' : 'Cancel'}
                        </button>
                    </div>
                )}
                <form className='form_ text_left'>
                    <label>
                        Name: <br />
                        <input type="text" className='form_name_input' disabled={editData && true} value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
                    </label>
                    <br />
                    <br />

                    <CategorySelector
                        disabled={editData}
                        categories={categories}
                        onSelect={setSelectedSectors}
                        defaultSelected={selectedSectors}
                    />
                    <br />
                    <br />
                    <label className="checkbox_">Agree to terms
                        <input id='checkbox_' disabled={editData && true} type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
                        <span className="checkmark"></span>
                    </label>
                    <br />
                    <br />
                    {!editData && <input className="save_button" type="button" value="Save" onClick={handleSave} />}

                    <br />
                    <br />
                </form>
            </section>
            <Footer />
        </Fragment>
    )
}

export default Home
