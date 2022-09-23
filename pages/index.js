import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import styles from '../styles/Home.module.css'



export default function Home({results}) {
  console.log(results);
  return (
   
    <div >
      <Navbar/>
     <h1>This is user information</h1> 
     




     <table border="1">
  <tr>
    <th className="teablh">user id</th>
    <th className="teablh">First Name</th>
    <th className="teablh">Last Name</th>
    <th className="teablh">Full Name</th>
    <th className="teablh">User Name</th>
    <th className="teablh">Phone Number</th>
    <th className="teablh">Email</th>

  </tr>
  <tr>
    <td>{results && results.map(Users =>
       <h4>{Users.user_id}</h4> 
      )}</td> 

    <td>{results && results.map(Users =>
       <h4>{Users.first_name}</h4> 
      )}</td>

    <td>{results && results.map(Users =>
       <h4>{Users.last_name}</h4> 
      )}</td>

<td>{results && results.map(Users =>
       <h4>{Users.full_name}</h4> 
      )}</td>

<td>{results && results.map(Users =>
       <h4>{Users.username}</h4> 
      )}</td>

<td>{results && results.map(Users =>
       <h4>{Users.phone}</h4> 
      )}</td>

<td>{results && results.map(Users =>
       <h4>{Users.email}</h4> 
      )}</td>

  </tr>
  {/* <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr> */}
</table>

<h1>This is user Building information</h1> 
<table border="1">
  <tr>
    <th className="teablh">street</th>
    <th className="teablh">district</th>
    <th className="teablh">city</th>
    <th className="teablh">building_number</th>
   

  </tr>
  <tr>
    <td>{results && results.map(Users =>
       <h4>{Users.street}</h4> 
      )}</td> 

    <td>{results && results.map(Users =>
       <h4>{Users.district}</h4> 
      )}</td>

    <td>{results && results.map(Users =>
       <h4>{Users.city}</h4> 
      )}</td>

<td>{results && results.map(Users =>
       <h4>{Users.building_number}</h4> 
      )}</td>

  </tr>
 
</table>






     <Footer/>

      </div>
     
  )
}

export async function getServerSideProps(){
  console.log('hello from server');

  const res = await fetch("http://localhost:3009/users")
  const data = await res.json();
  console.log(data);

  return {
   props: {
     results : data
   }
  }
}

