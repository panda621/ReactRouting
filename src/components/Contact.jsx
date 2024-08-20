import React from 'react';

const Contact = () => {
  return ( 
        <div>
            <h2>Contact Page</h2> 
            <hr />
            <p>
                Morbi aliquet libero sem, sit amet volutpat lectus commodo eget. Pellentesque id auctor diam. Vestibulum pulvinar mi sit amet mi mattis, sed finibus mi bibendum. Donec id malesuada diam. Sed in dolor et eros viverra pretium. Morbi ac orci egestas, ultricies velit in, euismod sapien. Fusce quis felis laoreet sem sollicitudin mattis. Duis velit nisl, semper eu sagittis vitae, condimentum vel leo. Suspendisse ac ligula vel tortor fermentum pulvinar. Curabitur ultrices ut enim quis cursus. Phasellus at nibh sapien. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce et nisl consectetur, cursus nisl a, ultricies mauris. Maecenas ut magna non justo malesuada faucibus eu sed magna.
            </p>
            <div className="container">
                <h3 className="text-center">Contact me</h3>
                <hr />
                <div className="row justify-content-center">
                    <form className='col-md-6'>
                        <div className="mb-3">
                            <label for="user_email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="user_email" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="name" className="form-label">Name</label>
                            <input type="name" className="form-control" id="name"/>
                        </div>
                        <div className="mb-3">
                            <label for="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="save_me"/>
                            <label className="form-check-label" for="save_me">Save my details</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
