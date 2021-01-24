import React from 'react'
import code from '../../images/code.png'

const Index = () => {
    const [selected, setSelected] = React.useState("");

    const changeSelectOptionHandler = (e) => { 
        setSelected(e.target.value); 
    }; 

    const dayTime = [ 
        "9am-10am", 
        "11am-12pm", 
    ]
    const nightTime = [
        "8pm-9pm",
        "10pm-11pm" 
    ]; 

    let type = null, options = null; 

    if (selected === "Day Time") { 
        type = dayTime; 
    } else if (selected === "Night Time") { 
        type = nightTime; 
    }

    if(type) {
        options = type.map(time => <option>{time}</option>);
        console.log(options);
    }

    const handleSubmitInfo = () => {
        alert('Submission Successful');
    }

    return (
        <div className="flex-container">
            <img src={code} alt="course"></img>
            <form onSubmit={handleSubmitInfo}>
            <h2>Please provide your details</h2>
                <input className="name" type="text" name="Name" placeholder="Name" required></input>
                <input className="contact" type="tel" name="phone" placeholder="Contact Number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required></input>
                <select onChange={changeSelectOptionHandler} classname="schedule" name="schedule">
                    <option>Select Schedule</option>
                    <option>Day Time</option>
                    <option>Night Time</option>
                </select>
                <select> 
                    <option value="Choose">Choose Time</option>
                    {options} 
                </select> 
                <input className="email" type="email" name="email" placeholder="Email" required></input>
                <textarea className="enquiry" rows="4" cols="50" name="enquiry" placeholder="Write your query. . ."></textarea>
                <button className="submit" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Index
