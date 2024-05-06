import { useState } from "react";

import AddUser from "./Component/AddUser.js";
import UsersList from "./Component/UsersList.js";
import ErrorModal from "./Component/ErrorModal.js";

function App() {
    const initialList = [];
    const [userList, setUserList] = useState(initialList);
    const [error, setError] = useState();

    // Update data
    const AddUserHandler = (name, age, id) => {
        const data = {
            name: name,
            age: age,
            id: id
        };
        userList.push(data);
        setUserList([...userList]);
    }

    // Check error, return error obj
    const checkError = (err) => {
        setError(err);
    }

    // set lại giá trị error, close erorModal
    const errorHandler = () => {
        setError();
    }

    return (
        <div className="App">
            <AddUser onAddUser={AddUserHandler} userList={userList} checkError={checkError} />
            <UsersList usersListData={userList} />
            {
                error &&
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            }
        </div>
    );
}

export default App;
