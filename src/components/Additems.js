import React, {useState} from "react";

export const Additems = () => {

    const [task, setTask] = useState("");

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

    const deleteItem = (props) => {

        const search = obj => obj.id === props;
        let index = items.findIndex(search)

        console.log(index);
        items.splice(index, 1);
        console.log(items);
        setItems([...items]);
    }

    const content = items.map((item) =>
    <div key={item.id}>
        <h3>{item.task}</h3>
        {/* <p>{item.completed.toString()}</p> */}
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