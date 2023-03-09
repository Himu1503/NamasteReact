 import React  from "react";
 import  ReactDOM from "react-dom/client";

const Title = () =>{
    return (
        <div className="nav-bar">


          <img src="https://i.pinimg.com/236x/f0/94/69/f09469d45470f487806693c7c7a6bca0--font-logo-typo-logo.jpg" />   
         <ul>
            <li>
                Home
            </li>

            <li>
                Contact Us
            </li>

            <li>
               Offers
            </li>

            <li>
                Sign In
            </li>
         </ul>

         
        </div>
    )
}
const HeadingComponent = () => {
return (
    <Title/>
)
}

const CardComponent= ()=>  {
     return(
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb"/>
     )
}
const Body = () => {
    return (
      <cardComponent/>
    )
}


const Footer = () => {
    return(
        <h4>
            Footer
        </h4>
    ) 
}

const AppComponent= ()=>{
return (
    <>

    <HeadingComponent/> 
    <Body/>
    </>
)
}




const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent/>);
