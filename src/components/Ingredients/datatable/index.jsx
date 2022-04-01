import React from 'react'
import pick from 'lodash'

const index = ({data}) => {

    var subset = pick(data[0], ['name', 'amount', 'location'])

    const columns = data[0] && Object.keys(data[1])
    const finalcolumns = data[0] && Object.keys(data[2])


  return (
      <table cellPadding={5} cellSpacing={0}>
          <thead>
              <tr>
                <th>Item</th>
                <th>Amount</th>
                <th>Perishable?</th>
              </tr>
          

              {/* <tr>{data[0] && columns.map(heading => <th>{heading}</th>)}</tr> */}
          </thead>
          <tbody>
              {data.map(row => <tr>
                  {
                      columns.map(column => <td>{row[finalcolumns]}</td>)
                  }
              </tr>)}
          </tbody>

      </table>
    
  )
}

export default index