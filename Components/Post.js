const Post = (props) => {
    return (
        <ul onClick={()=>props.displayDetails(props.id)}>  
        
                <span><strong>Id:</strong> {props.id} </span>
                <span><strong>Title: </strong>{props.title} </span>
                <span><strong>Author: </strong>{props.author} </span>    
        </ul>
    );
}

export default Post;