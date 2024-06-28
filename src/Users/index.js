import { useGetUsers } from "./hooks/useGetWeather";
// import UserCard from "../Atoms/UserCard";
import './index.css'


const Users = () => {
    const {users, loading, errors} = useGetWeather();
    console.log({users});
    return(
        <div className="Users">
            {loading && <h2 className="userNames">loading users...</h2>}
            {errors.length>0 && <h2 className="userNames">{errors}</h2>}
            {users.length > 0
            ? users.map((user) => (
                <UserCard
                key={user.id}
                image={user.image}
                fullName={`${user.firstName} ${user.lastName}`}
                />
            ) )
        : !loading && <h2 className="userNames">Users not found</h2>}
        </div>
    );
};
export default Users;