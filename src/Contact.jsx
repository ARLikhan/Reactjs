import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname:" ",
        email:" ",
        msg:" ",
    });

    const InputEvent = (event) => {
        const{name, value}= event.target;

      setData((preVal)=> {
          return{
              ...preVal,
              [name]: value,
          };
      });

    };
    const formSubmit = (e) => {
        e.preventDefault()
        alert(`${data.fullname}`);
    };
    return( 
    <> 
    <div className="my-5">
        <h1 className="text-center"> Contact us</h1>

    </div>
    <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                
  <div class="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" 
    class="form-control" 
    id="exampleFormControlInput1" 
    name="fullname"
    value={data.fullname}
    onChange={InputEvent}
    placeholder="Enter Your Name" />
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" 
    class="form-control"
     id="exampleFormControlInput1" 
     name="email"
    value={data.email}
    onChange={InputEvent}
     placeholder="name@example.com" />
  </div>


  <div class="form-group">
    <label for="exampleFormControlTextarea1">Write Your Comment</label>
    <textarea class="form-control" 
    id="exampleFormControlTextarea1" 
    name="msg"
    value={data.msg}
    onChange={InputEvent}
    rows="3"></textarea>
  </div>
  
  <div class="col-12">
      <button class="btn btn-outline-primary" type="submit">
          Submit
      </button>

  </div>

</form> 
        

            </div>

        </div>

    </div>

    </>
    );
};

export default Contact;