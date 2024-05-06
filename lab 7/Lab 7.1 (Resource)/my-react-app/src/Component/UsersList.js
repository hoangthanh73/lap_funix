import styles from "../Styles/UsersList.module.css";
import Card from "./Card"

const UsersList = (props) => {
    const data = props.usersListData;
    return (
        <div className={styles.users}>
            <Card>
                <ul>
                    {data.map(item => {
                        return <li key={item.id}>{item.name} ({item.age} years old)</li>
                    })}
                </ul>
            </Card>
        </div>
    )
}

export default UsersList;