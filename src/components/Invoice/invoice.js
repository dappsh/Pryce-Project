import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../node_modules/axios';
import { connect } from 'react-redux';  //redux
// import { storeInvoice } from '../../action'; //function redux 
import * as moment from 'moment';
import { withRouter } from 'react-router';
import { apiHost } from './../../config';


class invoice extends Component {
  constructor(props) {
    super(props)
    this.state = {

      dataInvoice: []

    }
  }

  componentDidMount(){
    this.getDataInvoice()
  }

  getDataInvoice = () => {
    var url = `${apiHost}/historyInvoice/${this.props.user.userid}`
    axios.get(url).then((inv) => {
      console.log(inv.data)
      this.setState({
         dataInvoice: inv.data 
        })

    })
  }

 
  render() {

    console.log(this.state.dataInvoice)

    return (
      <div>
        <Link to='/invoiceDetail'> <p>ke inv detail</p></Link>
        <div className="cart_area section_padding_100 clearfix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h4>INVOICE</h4>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                    <th scope="col">DATE</th>
                      <th scope="col">INV CODE</th>
                      <th scope="col">SHIP TO</th>
                      <th scope="col">ADDRESS</th>
                      <th scope="col">GRAND TOTAL</th>

                    </tr>
                  </thead>
                  <tbody>

                    {/* =============== MAPPING DATA ===================== */}
                    {this.state.dataInvoice.map((data, key) => {
                      console.log('datainvoice map : ', data);
                      return (
                        <tr key={key}>
                         <td>{moment(data.time).format('DD-MM-YYYY')}</td>
                          <Link to="/invoiceDetail"><td>{data.invcode}</td></Link>
                         
                          <td>{data.shipto}</td>
                          <td>{data.address}</td>
                          <td>{data.total}</td> 
                        </tr>
                       )
                    }
                )
            }
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>

      </div>


    )
  }
}

const mapStateToProps = (state) => {
  const user = state.user
  // const inv = state.invoiceRed
  // function reduxnya userLogin
  return { user }
};

export default withRouter(connect(mapStateToProps, {})(invoice));

