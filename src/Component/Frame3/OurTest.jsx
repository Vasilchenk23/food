const OurTest = () => {
    return(
        <>
        <div className="blockProgram">
            <div className="infoBlockProgram">
                <p className="infoBlockProgramP">OUR TESTS</p>
                    <h2 className="infoBlockProgramH2">Start your program with our at-home test.</h2>
                        <p className="infoBlockProgramP2">
                            One-size-fits-all advice doesn't work. So we'll 
                            provide you with the most advanced analysis of your gut bacteria,
                            blood sugar and blood fats available. We'll then compare your results 
                            to thousands of other people we've tested. Using patented techniques 
                            you can't get anywhere else.
                        </p>
                <button className="infoBlockProgramButton">Discover our tests</button>
            </div>
            <div className="blockProgramImg">
                <img src="./img/apple.png" alt="" />
            </div>
        </div>
        <div className="blockResult">
            <div className="blockResultImg">
                <img src="./img/snack.png" alt="" />
            </div>
            <div className="infoBlockResult">
                <p className="infoBlockResultP">YOUR PROGRAM</p>
                <h2 className="infoBlockResultH2">Get personalized advice powered by your unique test results</h2>
                    <p className="infoBlockResultP2">
                        On the ZOE Program, no food is off limits because science shows 
                        restricting yourself just doesn’t work. So, we'll teach you how 
                        to make smart combos each week, using insights from your tests 
                        to improve your meals.
                    </p>
                <button className="infoBlockResultButton">See how it works</button>
            </div>
        </div>
        </>
    );
}

export default OurTest;