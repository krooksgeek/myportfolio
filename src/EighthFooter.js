import React from 'react';
import './EighthFooter.css'


function EighthFooter(){
    return(
        <div className='footer'>
            <div className='col1'>
               <span id='colName'>Stop By.</span>
               <span id='colDetail'>🌈 Working Remotly.</span>
               <span id='socialIcon'>
                   <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
                   
               </span>
            </div>
            <div className='col2'>
               <span id='colName'>Say Hi.</span>
               <span id='colDetail'><a href="mailto:krooksgeek@gmail.com">krooksgeek@gmail.com</a></span>
            </div>
            <div className='col3'>
               <span id='colName'>Baby, it's hot outside.</span>
               <span id='colDetail'>Made with ❤️ in<br></br>Vyara, India.</span>
               <span id='copyright'>Copyright © 2021 krooksgeek LLC. All rights reserved.</span>
            </div>
            <div className='space'></div>
        </div>
    );
}

export default EighthFooter;