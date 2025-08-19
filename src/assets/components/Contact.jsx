import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const contacts = [
    { id: 1, icon: <FaPhone /> , head: "Call Me", text: "+234 907 5802" },
    { id: 2, icon: <FaEnvelope /> , head: "Email", text: "danielchukwu2004@gmail.com" },
    { id: 3, icon: <FaMapMarkerAlt /> , head: "Address", text: "No. 4, Kusela Estate, Ologuneru, Ibadan" }
  ]

  const navigate = useNavigate();
  const [allInputs, setAllInputs] = useState([])
  const [contactInput, setContactInput] = useState({
    fname: "",
    email: "",
    message: ""
  });
  const [contactError, setContactError] = useState({});

  // const contactHandleChange = () => {

  // }
  const contactHandleChange = (e) => {
    const { name, value } = e.target;
    setContactInput((prev) => ({
      ...prev,
      [name]: value
    }));
  }
  const contactRunCheck = () => {
    const contactErrLog = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!contactInput.fname) {
      contactErrLog.fname = "First name is Required";
    }
    if (!contactInput.email || !emailRegex.test(contactInput.email)) {
      contactErrLog.email = "Email is Required";
    }
    
    if (!contactInput.message) {
      contactErrLog.message = "Message is Required";
    }
    return contactErrLog;
  }

  const contactSubmit = (e) => {
    e.preventDefault();
    const contactValidate = contactRunCheck();

    if (Object.keys(contactValidate).length > 0) {
      setContactError(contactValidate);
      // console.log(contactError);
      console.log(contactValidate)
    }
    else {
      // setAllInputs([...allInputs, contactInput])

      //setAllInputs((prev) => [...prev, contactInput]);

      // OR
      setAllInputs(prev => {
          const updated = [...prev, contactInput]
          console.log(updated)
          return updated
      })
      console.log(allInputs)
      setContactInput({
        fname: "",
        email: "",
        message: ""
      })
      navigate("/");
      // setAllInputs(contactInput)
      setContactError({})
    }
  }


  return (
    <div className='flex items-center justify-center mt-4'>
      <div className="text-white md:w-[800px] lg:w-[1000px] xl:w-[1400px xl:mx-[170px]">
        <div className='mt-6 text-center'>
          <h1 className='text-2xl lg:text-3xl bg-gradient-to-r from-purple-200 to-purple-900 bg-clip-text text-transparent'>Get In Touch With Me</h1>
          <p className='mt-3'>Contact me today, let's build something great</p>
        </div>

        <div className='row flex justify-center gap-y-6 flex-col md:flex-row mt-[50px]'>
          <div className="col w-full text-center md:ml-5 md:text-left lg:pl-16">
            {
              contacts.map(({ id, icon, head, text }) => (
                <div className='flexme  mb-4 flex flex-col md:flex-row md:items-center' key={id}>
                  {/* <i className='text-center bg-purple-600 border-0 rounded-full p-2 mr-3'>{icon}</i> */}
                  <div>
                    <h3 className='text-purple-600'>{head}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="col w-full md:pr-6 border-red-500">
            <form onSubmit={contactSubmit} className='text-left max-w-[400px] mx-auto'>
              <div className='ctc-ctn'>
                <input type="text" placeholder='Full Name' className='border-1 outline-0 px-2 py-2 w-full '
                  name='fname'
                  value={contactInput.fname}
                  onChange={contactHandleChange}
                />
                {contactError.fname &&
                  <span className='error'>{contactError.fname}</span>
                }
              </div>
              <div className='ctc-ctn'>
                <input type="text" placeholder='Email' className='border-1 outline-0 px-2 py-2 w-full'
                  name='email'
                  value={contactInput.email}
                  onChange={contactHandleChange}
                />
                {contactError.email &&
                  <span className='error'>{contactError.email}</span>
                }
              </div>
              <div className='ctc-ctn'>
                <textarea name="message" id="" placeholder='Message'
                  className='border-1 outline-0 px-2 py-2 w-full'
                  value={contactInput.message}
                  onChange={contactHandleChange}
                >
                </textarea>
                {contactError.message &&
                  <span className='error'>{contactError.message}</span>
                }
              </div>
              <div>
                <button className='bg-purple-600 text-white text-[1rem] border-0 rounded-full px-4 py-2 transition-all duration-300 hover:bg-purple-700 cursor-pointer'>Submit Message</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}


export default Contact
