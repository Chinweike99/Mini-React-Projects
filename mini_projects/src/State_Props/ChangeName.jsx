export const ChangeName = ({username, 
    setUsername
}) => {

    const handleProp = () => {
        setUsername("User");
    }
    return (
        <div>
            <button onClick={handleProp}>Hide Name</button>
            <p>{username}, what are your plans for today?</p>
        </div>
    )
}