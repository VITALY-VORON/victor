import { useState } from "react";
import { data } from "../../../basa/statebasa";
import { CreateState, List } from "../../main/create";



const Offstate = () => {

    const [open, setOpen] = useState(true)

    const [newData, setNewData] = useState({});
    const [user, setUser] = useState(data);

    const handleCreateData = (e) => {
        const { name, value } = e.target;
        setNewData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdateData = () => {
        setUser((prevUser) => [...prevUser, { ...newData, id: Date.now() }]);
        setNewData({});
    };

    const close = () => setOpen(false)

    return (
        <div>
            <button onClick={() => setOpen(!open)} className="creatbut" tyle={{
                position: "absolute",
                right: 20,
                top: 20
            }}>Create Article</button>
            <List user={user} open={open} />
            {open ? <CreateState handleCreateData={handleCreateData} handleUpdateData={handleUpdateData} newData={newData} close={close} /> : null}
        </div>
    )
}

export default Offstate;