import './UserInput.css'

function UserInput(props) {
    return (
        <div className="input-container">
            <input placeholder={props.hint} type={props.type}></input>
        </div>
    );
}

export default UserInput;