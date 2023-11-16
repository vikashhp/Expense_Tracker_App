import { Fragment } from "react";
import Button from "react-bootstrap/esm/Button";
import { useRef } from "react";
import { useContext } from "react";


const UserProfile = () => {
  const inputName = useRef();
  const inputUrl = useRef();

  const token = localStorage.getItem("token");

  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredName = inputName.current.value;
    const enteredUrl = inputUrl.current.value;

    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCwZv808OhRcTulajFFTsrXP6Qn3bwN-uE",
      {
        method:"POST",
        body:JSON.stringify({
          idToken: token,
          displayName: enteredName,
          photoUrl: enteredUrl,
          returnSecureToken: true,
        }),
        headers:{
            'Content-Type':'application/json'
        }
      }
      
    );

    const response = await res.json();


    const get = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCwZv808OhRcTulajFFTsrXP6Qn3bwN-uE',{
        method:'POST',
        body:JSON.stringify({
            idToken:token,
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })

    const getres=await get.json();

    console.log(getres)



  };

  return (
    <Fragment>
      <div>
        <h1 style={{ marginLeft: "50%" }}>Contact Details</h1>

        <div style={{ marginLeft: "30%" }}>
          <form onSubmit={submitHandler}>
            <label>
              <span>
                <img
                  style={{ height: "80px" }}
                  src="https://tse3.mm.bing.net/th?id=OIP.9B4NoA0XTQUhk62iCKkCdQHaH7&pid=Api&P=0&h=180"
                />
              </span>
              <span style={{ fontSize: "40px" }}>Full Name</span>
            </label>
            <input type="text" placeholder="Enter Your Name" ref={inputName} />
            <label>
              <span>
                <img
                  style={{ height: "80px" }}
                  src="https://tse2.mm.bing.net/th?id=OIP.U_ZntVWwH6oODPvQOviQRgHaHa&pid=Api&P=0&h=180"
                />
              </span>
              <span style={{ fontSize: "40px" }}>Profile Photo Url</span>
            </label>
            <input type="text" placeholder="Enter Photo Url" ref={inputUrl} />

            <div style={{ marginTop: "80px", marginLeft: "30%" }}>
              <Button type="submit">Update</Button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UserProfile;
