import React from "react";
import classes from "../Styles/Details.module.css";
import Navbar from '../Components/Navbar'

const Details = () => {
  return (
   <React.Fragment>
     <Navbar text={'details'}/>
         <div className={classes.detailsPage}>
      <h1>
        13:30 <br />
        Bangalore(IND)
        <br />
        <span className={classes.span}>1200M</span>
      </h1>

      <table className={classes.table}>

       <tbody>
       <tr style={{border: '1px solid black'}}>
          <td>
            TALL <br />
            GIRL
          </td>
          <td className={classes.tableData1}>
            3.1 <br />2
          </td>
          <td className={classes.tableData2}>
            3.1 <br />2
          </td>
        </tr>
        
        <tr className={classes.tableRow}>
          <td>
            TALL <br />
            GIRL
          </td>
          <td className={classes.tableData1}>
            3.1 <br />2
          </td>
          <td className={classes.tableData2}>
            3.1 <br />2
          </td>
        </tr>

        
        <tr className={classes.tableRow}>
          <td>
            TALL <br />
            GIRL
          </td>
          <td className={classes.tableData1}>
            3.1 <br />2
          </td>
          <td className={classes.tableData2}>
            3.1 <br />2
          </td>
        </tr>

        <tr className={classes.tableRow}>
          <td>
            TALL <br />
            GIRL
          </td>
          <td className={classes.tableData1}>
            3.1 <br />2
          </td>
          <td className={classes.tableData2}>
            3.1 <br />2
          </td>
        </tr>

        <tr className={classes.tableRow}>
          <td>
            TALL <br />
            GIRL
          </td>
          <td className={classes.tableData1}>
            3.1 <br />2
          </td>
          <td className={classes.tableData2}>
            3.1 <br />2
          </td>
        </tr>

        <tr className={classes.tableRow}>
          <td>
            TALL <br />
            GIRL
          </td>
          <td className={classes.tableData1}>
            3.1 <br />2
          </td>
          <td className={classes.tableData2}>
            3.1 <br />2
          </td>
        </tr>

        <tr className={classes.tableRow}>
          <td>
            TALL <br />
            GIRL
          </td>
          <td className={classes.tableData1}>
            3.1 <br />2
          </td>
          <td className={classes.tableData2}>
            3.1 <br />2
          </td>
        </tr>

        <tr className={classes.tableRow}>
          <td>
            TALL <br />
            GIRL
          </td>
          <td className={classes.tableData1}>
            3.1 <br />2
          </td>
          <td className={classes.tableData2}>
            3.1 <br />2
          </td>
        </tr>

        <tr className={classes.tableRow}>
          <td>
            TALL <br />
            GIRL
          </td>
          <td className={classes.tableData1}>
            3.1 <br />2
          </td>
          <td className={classes.tableData2}>
            3.1 <br />2
          </td>
        </tr>

        <tr className={classes.tableRow}>
          <td>
            TALL <br />
            GIRL
          </td>
          <td className={classes.tableData1}>
            3.1 <br />2
          </td>
          <td className={classes.tableData2}>
            3.1 <br />2
          </td>
        </tr>



       </tbody>
        
        
      </table>
    </div>
   </React.Fragment>
  );
};

export default Details;
