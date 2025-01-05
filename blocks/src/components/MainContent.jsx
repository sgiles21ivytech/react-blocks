// Main Content Component:
// Will display all Subcontent and Advertisement
// Center to Bottom in App
import Advertisement from "./Advertisement";
import SubContent from "./SubContent";

function MainContent () {
    
    return (

    <>
    <div className="MainContent">
    <SubContent/>
    <Advertisement/>
    </div>

    </>
    );
}

export default MainContent;
