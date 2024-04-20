import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadUser = useLoaderData()


    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email)
        const user = { name, email };
        fetch(`http://localhost:5000/users/${loadUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0){
                    alert('user update successfully')
                }
            })
    }

    return (
        <div>
            <h3>Update User : {loadUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" defaultValue={loadUser?.name} /><br />
                <br />
                <input type="email" name="email" id="" defaultValue={loadUser?.email} /><br />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;