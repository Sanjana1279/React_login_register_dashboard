import { useState, useEffect } from "react";

const Home = () => {
    const [customerlist, listupdate] = useState(null);

    useEffect(() => {
        // Optionally, load summary info such as customers.
        // fetch("http://localhost:8000/customer")
        //     .then(res => res.json())
        //     .then(resp => listupdate(resp))
        //     .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1 className="text-center">Welcome to Nihira Techiees</h1>
            {/* Add table display below if needed */}
        </div>
    );
};

export default Home;
