import Link from 'next/link'


// export const getServerSideProps = async () =>{
//     const res = await fetch('http://localhost:3009/users');
//     const data = await res.json();
 
   

//     return{
//         props:{ respons: data}
//     }
// }




// const users = ({respons}) => {
//     return ( 
//         <div>
//             <h1> this is user list page </h1>
//             {respons.map( respons => (
//              <div key={respons.username}></div> 
//             ))}
//              {/* <a>
//                  <h3>{respons.full_name}</h3>
//              </a>  */}
//             <div>
//            <Link href="/"><button type="submit">Back</button></Link> 
//            </div>
//         </div>
      
//      );
// }

const users = () => {
    return ( 
        <div>
            <h1>hello user</h1>
        </div>
     );
}
 
export default users;


    
 
