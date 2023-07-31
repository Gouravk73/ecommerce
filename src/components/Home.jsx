import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <div className="container-fluid bg-secondary text-center py-5  ">
        <div className="row" >
          <div style={{ margin: 0 }}><h1 className='text-light display-1'>The Generics</h1> </div>
          <div style={{ margin: 0 }}><Button className='btn btn bg-transparent btn-outline-primary'>Get our Latest Album </Button>  </div>
        </div>
      </div>
      <div className="container py-2 text-center ">
        <table className="table">
          <tbody>
            <tr>
              <th className='text-dark small'>JUL16</th>
              <td className='text-secondary small'>DETROIT, MI</td>
              <td className='text-secondary  small'>DTE ENERGY MUSIC THEATRE</td>
              <td ><Button className='btn btn-info btn-sm'>BUY TICKETS</Button></td>
            </tr>
            <tr>
              <th className='text-dark small'>JUL16</th>
              <td className='text-secondary small'>DETROIT, MI</td>
              <td className='text-secondary small'>DTE ENERGY MUSIC THEATRE</td>
              <td ><Button className='btn btn-info btn-sm'>BUY TICKETS</Button></td>
            </tr><tr>
              <th className='text-dark small'>JUL16</th>
              <td className='text-secondary small'>DETROIT, MI</td>
              <td className='text-secondary small'>DTE ENERGY MUSIC THEATRE</td>
              <td  ><Button className='btn btn-info btn-sm'>BUY TICKETS</Button></td>
            </tr><tr>
              <th className='text-dark small'>JUL16</th>
              <td className='text-secondary small'>DETROIT, MI</td>
              <td className='text-secondary small'>DTE ENERGY MUSIC THEATRE</td>
              <td><Button className='btn btn-info btn-sm'>BUY TICKETS</Button></td>
            </tr><tr>
              <th className='text-dark small'>JUL16</th>
              <td className='text-secondary small'>DETROIT, MI</td>
              <td className='text-secondary small'>DTE ENERGY MUSIC THEATRE</td>
              <td><Button className='btn btn-info btn-sm'>BUY TICKETS</Button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home