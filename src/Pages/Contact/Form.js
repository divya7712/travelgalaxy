import React from 'react'
import './ContactStyles.css'

const Form = () => {
    return (
        <>
            <h1 className="heading" style={{background:"black", color:"white"}}>Contact-Us</h1>
            <section>
                <form>
                    <div className='container'>
                        <section>
                            <form>
                                <div className="field">
                                    <p>Name</p>
                                    <input type='text'></input>
                                </div>
                                <div className="field">
                                    <p>Email</p>
                                    <input type='email'></input>
                                </div>
                                <div className="field">
                                    <p>Phone</p>
                                    <input type='tel'></input>
                                </div>
                                <div className='form-button'>
                                    <button>Submit</button>

                                </div>
                            </form>
                        </section>

                    </div>
                </form>
            </section>
        </>
    )
}

export default Form