import React from 'react'
// import { Link } from 'react-router-dom'
import '../../stylesheets/footer.css'
import In from '../../images/in.jpg'
import github from '../../images/GitHub-Mark.png'

export default () => {

    return(
        <div className='footer'>
            <ul className='footer-container'>
                <li className='foot'>
                    <div>Andre Souza </div>
                    <a href='https://www.linkedin.com/in/andre-souza-2ab6a3155/'><img src={In} alt="" className='linkedin'/></a>
                    <a href="https://github.com/allsouza"><img src={github} alt="" className='git'/></a>
                </li>
                <li className='foot'>
                    <div>Arash Afghahi</div>
                    <a href='https://www.linkedin.com/in/arash-afghahi-4aa05193/'><img src={In} alt="" className='linkedin'/></a>
                    <a href="https://github.com/AAfghahi"><img src={github} alt="" className='git'/></a>
                </li>
                <li className='foot'>
                    <div>John Cody </div>
                    <a href='https://www.linkedin.com/in/johnhcody/'><img src={In} alt="" className='linkedin'/></a>
                    <a href="https://github.com/johnhcody"><img src={github} alt="" className='git'/><img src="" alt=""/></a>
                </li>
                <li className='foot'>
                    <div>Brendon Biagi</div>
                    <a href='https://www.linkedin.com/in/brendonbiagi/'><img src={In} alt="" className='linkedin'/></a>
                    <a href="https://github.com/Bman2386"><img src={github} alt="" className='git'/></a>
                </li>
            </ul>
           
        </div>
    )
}