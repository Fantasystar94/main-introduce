import { forwardRef } from 'react';
import '../styles/career.css'
const Career = forwardRef((props,ref)=>{
    return(
        <div className="career" ref={ref}>
            <div className="mainTitle">
                <h3>
                Career
                </h3>
            </div>
            <div className='article'>
                <div className="logo">
                    <img src="https://pds.saramin.co.kr/company/logo/202002/10/q5h23c_1127-xyldb8_logo.jpg" alt="" />
                </div>
                <div className='textTab'>
                    <div className='title'>
                        주식회사 웨이브 
                    </div>
                </div>
            </div>
        </div>
    )   
});
export default Career;