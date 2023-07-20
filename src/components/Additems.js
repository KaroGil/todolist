import React, {useState} from "react";
import '../App.css';

export const Additems = () => {

    //task to add
    const [task, setTask] = useState("");

    //array of tasks
    const [items, setItems] = useState(
        [
            {
                id: 0,
                task: "hello",
                completed: false,

            }
        ]
    );

    let id = items.length;

    //what happens on form submit
    const onSubmit = (e) => {
        e.preventDefault();
        if(task != ''){
            setItems([
                ...items,
                {
                    id: id,
                    task: task,
                    completed: false,
                }
            ])
        }

        setTask("");
     
    }

    //to delete a task
    const deleteItem = (props) => {

        const search = obj => obj.id === props;
        let index = items.findIndex(search)
        items.splice(index, 1);
        setItems([...items]);
    }

    //to map out the different items in the array
    const content = items.map((item) =>
    <div className="box" key={item.id}>
        <h3 >{item.task}</h3>
        <button className="dlt-btn" onClick={()=> deleteItem(item.id)}>x</button>
    </div>
    )


    return (
        <>
        <form onSubmit={onSubmit}>
            <div className="formItem">
                <input 
                type = "text"
                value = {task}
                onChange = { (e) => setTask(e.target.value)}
                placeholder="Enter task..."
                />
            </div>
            <button className="btn">Add item</button>
        </form>

        {content}
        
        </>
    
    );
}