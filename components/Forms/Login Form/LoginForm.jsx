import React, { useEffect,useContext } from "react";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faUser , faLock , faCaretLeft , faCaretRight} from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import "./LoginForm.css"
import { ThemeModeContext } from "../../../src/App"; 

function LoginForm(){
    useEffect(()=>{
        const imgContainer = document.querySelector('.images')
        const leftBtn = document.querySelector('.leftBtn')
        const rightBtn = document.querySelector('.rightBtn')
        
        let i=0;
        let images = ['https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , 
            'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , 
            'https://images.unsplash.com/photo-1505576733088-f8a0f2f4b8a7?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1723478444451-073d876949b2?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ]
        
        setInterval(()=>{
            if(i < images.length-1){
                i++;
                imgChanger(i)
            }
            else{
                i=-1
            }
        },3000)
        
        const imgChanger = (i) =>{
            return imgContainer.style.backgroundImage= `url(${images[i]})` 
        }
        
        leftBtn.addEventListener('click',(e)=>{
            if(i>0) {  
                i--;
                imgChanger(i)
            }
        })
        
        rightBtn.addEventListener('click',(e)=>{
            if(i < images.length-1){
                i++;
                imgChanger(i)
            }
        })
    },[])

    let {themeMode} = useContext(ThemeModeContext);
    useEffect(()=>{
        if(themeMode == 'dark'){
            document.querySelector('.loginMainContainer').classList.toggle('darkMode')
        }else{
            document.querySelector('.loginMainContainer').classList.remove('darkMode')
        }
    },[themeMode])
    return(
     <div className="loginMainContainer">
            <div className="loginHeading">
                 Login To save 
                 <p>Your favourite Recipe</p>  
            </div>
        <div className="loginContainer">  
          <div className="images"> 
            <div className="leftBtn slideBtn">
               <FontAwesomeIcon icon={faCaretLeft}/>
            </div>
            <div className="rightBtn slideBtn">
               <FontAwesomeIcon icon={faCaretRight}/>
            </div>
          </div>  
          <div className="loginPage">
            <div className="user-img"></div>
            <h1 className="welcomeHeading">welcome</h1>
       
           <form action=""> 
              <label htmlFor="email1">
                 <FontAwesomeIcon icon={faEnvelope}/>
                 <input type="text" placeholder="Enter email" id="email1"/>
              </label>
              <label htmlFor="password">
                  <FontAwesomeIcon icon={faLock}/>
                 <input type="password" placeholder="Enter password"id="password"/>
              </label>
           
              <div className="links">
                <Link to="/signup" className="signUp">sign up</Link>
                {/* <Link href="#" className="forgetPas" target="_main">forget password ?</Link>      */}
              </div>
              <button className="loginBtn">login</button>
           </form>
       
         </div>
    
       </div>
    </div>
    )
}

export default LoginForm