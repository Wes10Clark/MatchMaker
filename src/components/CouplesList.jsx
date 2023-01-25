import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";

const CouplesList = ({ couple }) => {
  const [match, setMatch] = useState(0);
  const [detail, setDetail] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://love-calculator.p.rapidapi.com/getPercentage",
      params: { sname: couple.lname, fname: couple.fname },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMatch(response.data["percentage"]);
        setDetail(response.data["result"]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(process.env);

  return (
    <div className="bg-danger mt-3">
      <Table>
        <tbody>
          <tr className="d-flex justify-content-around">
            <td>{couple.fname}</td>
            <td>{couple.lname}</td>
            <td>{match}%</td>
            <td>{detail}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CouplesList;
