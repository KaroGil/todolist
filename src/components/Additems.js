import React, {useState} from "react";

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
        console.log("sub");
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
    <div key={item.id}>
        <h3>{item.task}</h3>
        <button onClick={()=> deleteItem(item.id)} className="delete-btn">x</button>
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