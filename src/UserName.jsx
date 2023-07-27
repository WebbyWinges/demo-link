import React from "react";

const UserName = (props) => {
    console.log(props);
    const onClick = () => {
        props.changeName(props.userId, 'Admin')
    };
    return (
        props.userAge > 20 ? (
            <p className="fag">
                {props.userName}
                <button onClick={onClick}>
                    Изменить имя
                </button>
            </p>
        ) : (
            <p className="hav">{props.userName}</p>
        )
    );
};

export default UserName;