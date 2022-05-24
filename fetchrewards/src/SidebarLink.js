import "./sidebarLink.css";


function SidebarLink({ text }) {
  return(
    <div className="link" >
       <h2 className="linktext">{text}</h2>
    </div>
    
  );
}
export default SidebarLink;

