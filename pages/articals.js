import Link from 'next/link'

export default function articals({results}) {
    console.log(results);
    return (
        <div>
            <h1>this is articals page </h1>
            <div>
            
{/* <table> */}
<table border="1">
  <tr>
    <th className="teablh">Artical Author</th>
    <th className="teablh">Artical title</th>
    <th className="teablh">Artical</th>
   
   

  </tr>
  <tr>
    <td>{results && results.map(Users =>
       <h4>{Users.username}</h4> 
      )}</td> 

    <td>{results && results.map(Users =>
       <h4>{Users.articles_title}</h4> 
      )}</td>

    <td>{results && results.map(Users =>
       <h4>{Users.articles}</h4> 
      )}</td>



  </tr>
 
</table>


            <Link href="/"><button type="submit">Back</button></Link> 
                </div>
        </div>
      );
}
 
// export default articals;

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