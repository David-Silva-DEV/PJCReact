import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Pessoas from '../components/pessoas';



function Main(){
    return(
        <div>
           <Header/>
           <div className='main-content'>
                <h1> Some Stuff </h1>
                <Pessoas/>
           </div>
           
           
           <Footer/> 
        </div>
    )

}

export default Main
