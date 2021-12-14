import Part from "./Part";
const Content = ({parts}) => {
    
    return(
        <div>
         {parts.map(part => 
            <Part key={part.id} name={part.name} exo={part.exercises} />)}
        </div>
    )
}

export default Content;