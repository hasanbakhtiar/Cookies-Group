import React from 'react'
import { Link } from 'react-router-dom'

const DashboardItem = ({title,desc,count,img,id}) => {
  return (
    <tr>
        <th scope="row">{count+1}</th>
        <td><img width={70} src={img} alt={title} /></td>
        <td>{title}</td>
        <td>{desc.substr(0,30)}</td>
        <td><Link to={`edit/${id}`} className='btn btn-warning'>Edit</Link></td>
      </tr>

  )
}

export default DashboardItem