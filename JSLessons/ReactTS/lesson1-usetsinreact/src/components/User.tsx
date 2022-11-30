type UserType={
    username:string,
    messageCount:number,
    isLoggedIn:boolean
}

const User = (props:UserType) => {
  return (
    <button className="alert alert-success">{props.isLoggedIn ? `Welcome,${props.username} message:${props.messageCount}`: ""}</button>
  )
}

export default User