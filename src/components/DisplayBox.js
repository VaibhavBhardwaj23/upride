"use client"
import User from "../assets/Rectangle 60.png"
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Bookings from "./Bookings";

const DisplayBox = ({typeOf}) => {
    const [data,setData]=useState([])
    const [pageNumber, setPageNumber] = useState(1);
    const dataPerPage = 5;
    const pagesVisited = pageNumber * dataPerPage;
  
    const [dataO,setDataO]=useState([])
        useEffect(() => {
      fetch("https://upride-internships-default-rtdb.firebaseio.com/.json")
        .then((res) => res.json())
        .then((data) => {setData(data.offline_bookings); setDataO(data.online_bookings)});
    }, []);
    const offlineBookings=Object.values(data);
    const onlineBookings=Object.values(dataO);
    const allData= offlineBookings.concat(onlineBookings)

    let result= allData.filter((trips)=> trips.bookingStatus===`${typeOf}`)
    result=result.sort((a, b)=>a.bookingEpochTime - b.bookingEpochTime);

    const dataSet = result && result
    .slice(pagesVisited, pagesVisited + dataPerPage)
    .map((data) => {
      
      return (
      <Bookings data={data} key={data.bookingID}/>
      );
    });
    const pageCount = Math.ceil(result.length / dataPerPage);
    
    const changePage = ({ selected }) => {
     
        setPageNumber(selected);
      };
  
  return (
    <div className="display_table">
    <div className="heading">
      <span>Name</span>
      <span>Date</span>
      <span>Package Details</span>
      <span>Payment Mode</span>
    </div>
    <div className="scrollBox">

    {dataSet}
    </div>
       <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        containerClassName={"pagination"}
      />
    </div>
  )
}

export default DisplayBox