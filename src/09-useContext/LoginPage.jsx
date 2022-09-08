import { useContext } from "react"
import { UserContext } from "./context/UseContext";

export const LoginPage = () => {

    const { user, setUser } = useContext( UserContext );
    

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre>
                {
                    JSON.stringify(user)
                }
            </pre>

            <button 
                className="btn btn-primary"
                onClick={ () => setUser({id: 123, name: 'Agustin', email: 'agustin@google.com'}) }    
            >
                Establecer usuario
            </button>
        </>
    )
}