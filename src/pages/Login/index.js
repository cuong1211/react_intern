import { useState } from "react";
import propTypes from "prop-types";
import axios from "axios";


async function loginUser(data) {
    const options = {
        url: "http://127.0.0.1:8000/api/login",
        method: "POST",
        data: data,
    };
    return axios.request(options)
        .then(response => {
            console.log(response.data);
            return response.data.access_token;
        }
        )
        .catch(err => {
            console.log(err);
        }
        )
    // const response = await fetch("https://intern_project.minhhoangjsc.io/api/login", {
    //     method: "POST",
    //     headers: {
    //         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(credentials),
    // });
    // return response.json();


}


function Login({ setToken }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        })
        // console.log(token);
        setToken(token);
    }
    const login = (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                {/* create csrf token  */}

                <div>
                    <label>
                        <p>Email</p>
                        <input type="text" onChange={e => setEmail(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>

    );
    return login
}

export default Login;

Login.propTypes = {
    setToken: propTypes.func.isRequired
}
