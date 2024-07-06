import { useState } from "react";
import { data } from "../../basa/statebasa";
import "./list.css";

export function List({ user, open }) {
  return (
    <div style={{
      opacity: open ? 0 : 1
    }} className="list">
      {user.map((item) => (
        <div className="art" key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export function CreateState({ handleCreateData, handleUpdateData, newData, close }) {
  return (
    <div style={{
      position: "absolute",
      top: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      pointerEvents: "none"
    }}>
      <div className="pepe">
        <h1>Create your own article!</h1>
        <div className="crinp" style={{
          pointerEvents: "auto"
        }}>
          <input
            className="name"
            placeholder="name of the article"
            name="name"
            value={newData.name}
            onChange={(e) => handleCreateData(e)}
          />
          <textarea
            className="text"
            placeholder="text of the article"
            name="text"
            value={newData.text}
            onChange={(e) => handleCreateData(e)}
          />
          <button className="savebut" onClick={() => {
            handleUpdateData()
            close()
          }}>Save</button>
        </div>
      </div>
    </div>
  );
}

const Create = () => {
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

  return (
    <div>
      <CreateState handleCreateData={handleCreateData} handleUpdateData={handleUpdateData} newData={newData} />
    </div>
  );
};

export default Create;
