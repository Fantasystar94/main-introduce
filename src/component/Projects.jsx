import '../styles/projects.css'
import { forwardRef } from 'react';

const Projects = forwardRef((props,ref)=>{
    return(
        <div className="project" ref={ref}>
            <div className="mainTitle">
                <h3>
                Projects
                </h3>
            </div>
            <div className="projectWrap">
                <div className="item shadow">
                    <h4 className='itemTit'>
                        TodoList
                    </h4>
                    <a href="https://todo-local-six.vercel.app/" className='link' target='_blank'>
                    https://todo-local-git-master-fantasystar94s-projects.vercel.app/
                    </a>
                    <div className="article">  
                        <p>
                    React를 기반으로 로컬 스토리지를 활용하여 데이터를 영구적으로 관리하는 투두리스트 애플리케이션입니다. 컨텍스트 API를 통해 전역 상태를 효율적으로 관리하며, CRUD 기능을 체계적으로 구현했습니다. 또한, 반응형 디자인을 적용해 다양한 디바이스 환경에서도 최적화된 사용자 경험을 제공합니다.
                        </p>
                    </div>
                </div>
                <div className="item shadow">
                    <h4 className='itemTit'>
                        MovieBoxOffice
                    </h4>
                    <a href="https://movie-portfolio-git-main-fantasystar94s-projects.vercel.app/" className='link' target='_blank'>
                    https://movie-portfolio-git-main-fantasystar94s-projects.vercel.app/
                    </a>
                    <a href="https://movieportfolio-vue-git-main-fantasystar94s-projects.vercel.app/" className='link' target='_blank'>
                    https://movieportfolio-vue-git-main-fantasystar94s-projects.vercel.app/
                    </a>
                    <div className="article">
                        <p>
                    영화 박스오피스와 추천 영화 리스트를 보여주는 애플리케이션으로, React와 Vue를 활용해 동일한 기능을 구현했습니다. 박스오피스 API에서 수집한 영화 데이터를 기반으로, 각 영화 제목을 활용해 별도의 영화 데이터베이스 API에서 이미지와 상세 정보를 추가로 가져와 처리했습니다. 부모 컴포넌트에서 받은 데이터를 Props를 통해 자식 컴포넌트로 전달하여 모달 창과 상세 페이지를 구현했으며, React와 Vue 각각의 특성을 살려 효율적이고 직관적인 사용자 인터페이스를 완성했습니다.
                        </p>
                    </div>
                </div>
                <div className="item shadow">
                    <h4 className='itemTit'>
                        OCN Renual
                    </h4>
                    <a href="http://minyung944.dothome.co.kr/portfolio/ocn/" className='link' target='_blank'>
                    http://minyung944.dothome.co.kr/portfolio/ocn/
                    </a>
                    <div className="article">
                    OCN 사이트 리뉴얼 페이지를 제작하며, 기본적인 HTML과 CSS를 활용해 구조와 디자인을 구현했습니다. 상세 내용은 배열 형태로 데이터를 관리하여, 비동기 처리를 통해 동적으로 로드되도록 설계했습니다. 이를 통해 효율적인 데이터 처리와 사용자 경험을 개선한 직관적인 인터페이스를 완성했습니다.
                    </div>
                </div>
                <div className="item shadow">
                    <h4 className='itemTit'>
                    플랫킷싱크 쇼핑몰 메인페이지
                    </h4>
                    <a href="http://minyung944.dothome.co.kr/portfolio/shop1/" className='link' target='_blank'>
                    http://minyung944.dothome.co.kr/portfolio/shop1/
                    </a>
                    <div className="article">
                    기획서 기반으로 제작된 사이트이며, 페이드 배너 사용 및 배열로 텍스트와 이미지들을 출력했습니다.
                    </div>
                </div>
                <div className="item shadow">
                    <h4 className='itemTit'>
                    옐로우펫 쇼핑몰 관리자 페이지
                    </h4>
                    <a href="http://minyung944.dothome.co.kr/portfolio/shop/adm/" className='link' target='_blank'>
                    http://minyung944.dothome.co.kr/portfolio/shop/adm/
                    </a>
                    <div className="article">
                    동적인 웹 쇼핑몰 구현을 위한 관리자 페이지로, 배너 관리, FAQ, 회원 관리, 상품 등록, 사이트 정보 등 다양한 기능을 제공합니다. 모든 페이지는 Back-End와 연동하여 제작되었으며, MySQL을 활용해 데이터를 효율적으로 저장하고 관리할 수 있도록 설계되었습니다.<br></br>
                    로그인 계정 : master/admin2
                    </div>
                </div>
                <div className="item shadow">
                    <h4 className='itemTit'>
                    옐로우펫 쇼핑몰 페이지
                    </h4>
                    <a href="http://minyung944.dothome.co.kr/portfolio/shop/" className='link' target='_blank'>
                    http://minyung944.dothome.co.kr/portfolio/shop/
                    </a>
                    <div className="article">
                    관리자 페이지에서 관리되는 모든 데이터를 파싱하여 메인 페이지를 제작한 동적인 쇼핑몰입니다. 로그인 및 회원가입 기능, 상품 상세 페이지, 결제 시스템을 포함하며, 틀린그림찾기와 같은 이벤트 요소도 적용하여 사용자 경험을 강화했습니다.
                    </div>
                </div>
            </div>
        </div>
    )
});
export default Projects;