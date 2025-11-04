

function UserGreeting(props) {

      if(props.isLoggedIn){
            return <h3 className="true-greet-head" >Welcome {props.username}</h3>
        }else{
            return <h3 className="false-greet-head" >Oops... Log In to continue</h3>
        }
}

//Default login
UserGreeting.default ={
    isLoggedIn : false,
    username : "Guest"
}

export default UserGreeting;
