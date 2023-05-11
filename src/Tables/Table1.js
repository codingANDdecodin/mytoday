import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Table1.css"

function Table1(props) {
    let navigate=useNavigate()
    const [showModal,setShowModal]=useState(false);
    const [modalData,setModalData]=useState([])

    const showData=()=>{
        setShowModal(!showModal);
      }

  const showHandler=(id)=>{
    const index=props.listData.map((i)=>{
        return i.id;
     }).indexOf(id);
     setModalData(()=>{
        return {
            MyId:id,
            MyTitle:props.listData[index].title,
            MyPrice:props.listData[index].price,
            MyRating:props.listData[index].rating.rate,
            MyImg:props.listData[index].image
        }
     });
     showData()
  }

  const sortHandler=()=>{
   return(props.listData.sort((a,b)=>{
    navigate("/")
    return (a.price>b.price ? 1:-1)
   }))
      
  }
  const ratingSort=()=>{
    return (props.listData.sort((a,b)=>{
      navigate("/")
      return(a.rating.rate<b.rating.rate ? 1:-1)
    }))
  }
  return (
    <div>
         <table border="1px solid black">
              <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th onClick={sortHandler}>price</th>
                    <th onClick={ratingSort}>rating</th>
                    <th>more details</th>
                </tr>
              </thead>
              <tbody>
                {
                    props.listData.length>0 ? props.listData.map((i,index)=>{
                        if(i.id<=10){
                            return<tr key={index} onClick={()=>{showHandler(i.id)}}>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                                <td>{i.price}</td>
                                <td>{i.rating.rate}</td>
                                <td>
                                    <button onClick={()=>{showHandler(i.id)}}>show details</button>
                                </td>
                            </tr>
                        }
                    }) :<tr><th>no data is there</th></tr>
                }
              </tbody>
        </table>
        <button onClick={()=>{navigate("/table2")}}>next</button>
        {
            showModal && <div className='modal'>
              
            <div className='overlay'></div>
            <div className='modal-containt'>
              <table border="1px"> 
                  <tr>
                  
                    <td>{modalData.MyId}</td>
                    <td>{modalData.MyTitle}</td>
                    <td>{modalData.MyPrice}</td>
                    <td><img className='myimg' src={modalData.MyImg}></img></td>
                    <td>
                      <button onClick={showData}> close</button>
                    </td>
                  </tr>
              </table>
            </div>
          </div>
          }
    </div>
  )
}

export default Table1