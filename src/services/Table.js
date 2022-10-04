import React from "react";
import classes from "./Table.module.css";
import Button from "../components/Button";
import { INCREMENT, FLIP } from "../redux/features/moveList.feature";
import { useDispatch, useSelector } from "react-redux";

const Table = () => {
  const dispatch = useDispatch();
  const moveListState = useSelector((state) => state.moveList);

  const { users } = moveListState;

  const handleClick = (id) => {
    dispatch(INCREMENT(id));
    dispatch(FLIP(id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="table-responsive-xxl">
            <table className="table  text-center ">
              <thead className="bg-white text-secondary">
                <tr>
                  <th>Move-out Date</th>
                  <th>ID</th>
                  <th>Address</th>
                  <th>Room</th>
                  <th>Location</th>
                  <th>Last Occupant</th>
                  <th>UID</th>
                  <th>Balance</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="bg-light">
                {users.map((user) => {
                  const {
                    date,
                    id,
                    img,
                    uid,
                    lastOccupant,
                    location,
                    address,
                    room,
                    balance,
                  } = user;
                  return (
                    <tr key={id}>
                      <td>{date}</td>
                      <td>{id}</td>
                      <td className={classes._adscc}>
                        <div className={classes._adsccImg}>
                          <img src={img} alt="" />
                        </div>
                        {address}
                      </td>
                      <td>{room}</td>
                      <td>{location}</td>
                      <td>{lastOccupant}</td>
                      <td>{uid}</td>
                      <td>(${balance})</td>
                      <td>
                        <Button
                          userId={id}
                          room={room}
                          handleClick={handleClick}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
