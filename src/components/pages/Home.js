import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import jsImg from '../../assets/imagejs.png';
import reactImg from '../../assets/imagereact.png';
import { useGetFormDataQuery, useGetUserFormDataQuery, useLazyPostFormDataQuery } from '../../features/auth/authApi';
import CategorySelector from '../CategorySelector';
import { useHandleApiResponse } from '../HandleApiRes';
import Footer from '../shared/Footer';
import Header from '../shared/Navbar';

function Home() { 
    const [name, setName] = useState('');
    const [selectedSectors, setSelectedSectors] = useState([]);
    const [agree, setAgree] = useState(false);
    const [categories, setCategories] = useState([]);
    const [editData, setEditData] = useState(false);
    const [isError, setError] = useState(false);

    // Redux state
    const { user_data, form_data } = useSelector((state) => state.auth);
    const localAuth = localStorage?.getItem('auth');
    const { user } = JSON.parse(localAuth);

    // API queries
    const [postFormData, { data: resData, error: resError }] = useLazyPostFormDataQuery();
    useGetUserFormDataQuery(user?.email);
    useGetFormDataQuery();

     // Handle API response/error
     useHandleApiResponse(resError, resData, setError)

    // Update local state when Redux state changes
    useEffect(() => {
        setCategories(form_data);
        if (user_data) {
            setSelectedSectors(user_data.sectors);
            setName(user_data.name);
            setAgree(user_data.agree);
            setEditData(true);
        }
    }, [user_data, form_data]);

    // Function to handle form submission
    const handleSave = async () => {

        if (!name || selectedSectors?.length === 0 || !agree) { 
            toast("Please fill in all mandatory fields.", {
                type: "error",
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return;
        } 

        const dataToSave = {
            name,
            sectors: selectedSectors,
            agree,
            user: user?.email,
        };
        // Call the API to save data
        await postFormData(dataToSave);
    };

    
        // try {
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


    return (
        <Fragment>
            <Header />
            <section className="banner container_">
                <div className="content__container text-start">
                    <h1>
                        Power of Versatility<br />
                        <span className="heading__1">Making a versatile</span><br />
                        <span className="heading__2">Framework for cross-platform</span>
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
                    <div className="image__content text-start">
                        <ul>
                            <li>Make web pages interactive</li>
                            <li>Free and open-source</li>
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
                <form className='form_ text-start'>
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
                    <label className="label_checkbox"> 
                        <input className="form-check-input"  id="checkbox-signin" disabled={editData && true} type="checkbox" checked={agree} onChange={() => setAgree(!agree)} /> Agree to terms
                      
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
