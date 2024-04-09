const Dreams = () => {
    return(
        <>
        <h2></h2>
        <div className="blockDream">
            <img src="./img/grandmother.png" alt="" />
            <div className="infoBlockDream">
                <h2 className="infoBlockDreamH2">Created by the world's top scientists</h2>
                <p className="infoBlockDreamP">Our expert team leads three of the largest nutrition research studies with scientists at the world’s most respected research institutions.</p>
            </div>
        </div>
        <div className="advantage">
            <div className="medicine">
                <h2>Stanford Medicine</h2>
            </div>
            <div className="health">
                <h2>Harvard T.H. Chan School of Public Health</h2>
            </div>
            <div className="hospital">
                <h2>Massachusetts General Hospital</h2>
            </div>
            <div className="college">
                <h2>King’s College London</h2>
            </div>
        </div>
        </>
    );
}

export default Dreams;