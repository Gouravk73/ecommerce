import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dummy = {
      id: new Date().getTime(),
      name,
      email,
      phone,
    };
    setData((prevData) => [...prevData, dummy]);
    setName('');
    setEmail('');
    setPhone('');
    console.log('sasa',data);
    addContactToDB();
  };

async function addContactToDB(){
    console.log('addContactToDB')
    const response=await fetch('https://react-http-916a4-default-rtdb.firebaseio.com/contact.json',{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'content-type': 'application/json'
        }
    });
    const x=await response.json();
    console.log(x);

}
  return (
    <div className='container p-5'>
         <form action="" onSubmit={handleSubmit}>
         <div className="form-group mb-3">
        <label htmlFor="name ">Name</label>
        <input type="text" className="form-control " id="name"  placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="form-group mb-3">
            <label for="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter Email ID" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className="form-group mb-3">
            <label className="form-check-label" htmlFor="phone">Phone Number </label>
            <input type="number" className="form-control" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
         </form>
    </div>
  )
}

export default Contact