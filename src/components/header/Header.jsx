import "./header.css";

export default function Header(){
    return(
        <div className="header">
            <div className="headerTiles">
                <span className="headerTitleSm">Blog</span>
                <span className="headerTitleLg">Limitless</span>
            </div> 
                <img className="headerImg"
                 src="/images/img1.jpeg" alt=""/>
      </div>
    );
}