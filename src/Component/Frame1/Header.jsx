const Header = () => {
    return(
        <>
        <div className="frame">
        <header>
            <div className="zoe">
                <div>Why ZOE?</div>
                <div>How It Works</div>
                <div>Reviews</div>
            </div>
            <div className="help">
                <div>Learn</div>
                <div>Science</div>
                <div>Help</div>
            </div>
        </header>
       <div className="blockFood">
            <div className="navFood">
                    <h1>Understand how food affects your body</h1>
                    <button className="navFoodButton">Get started</button>
            </div>
            <div className="blockImg">
                <img src="./img/human.png" alt="" />
            </div>
       </div>
        </div>
        </>
    );
}

export default Header;