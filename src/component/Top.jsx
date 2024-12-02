import '../styles/Top.css';
import { forwardRef } from 'react';
const Top = forwardRef((props,ref)=>{
    return(
        <div ref={ref} className="banner">
        <h1>
          No Struggle, <br />
          No Progression
        </h1>
        <p>원민영의 포트폴리오 입니다.</p>
      </div>
    )
});
export default Top;