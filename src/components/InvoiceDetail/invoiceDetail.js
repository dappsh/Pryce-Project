import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from '../../../node_modules/axios';
import { withRouter } from 'react-router';
// import { storeInvoice } from '../../action'; //function redux 
import { connect } from 'react-redux';  //redux
import { apiHost } from './../../config';
class invoiceDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {

            detailInv: []

        }
    }

    componentDidMount() {
        this.getDetailInvoice()
    }

 
    getDetailInvoice() {
        var url = `${apiHost}/invoiceDetail/${this.props.inv}`;
        axios.get(url).then((a) => {
            console.log('INVOICE ===== GET INVOICE DATA', a.data)
            this.setState({
                detailInv: a.data
                // length: a.data
            })
            console.log('INVOICE ==== KODE INVOICE FROM REDUX : ', this.props.inv)
            console.log('INVOICE ==== DETAIL INVOICE : ', this.state.detailInv)
        })
    }



    render() {

        console.log(this.props.inv)


        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="row p-5">
                                    <div className="col-md-6">
                                        <img src="img/product/logofull.png" alt="Pryce" />
                                    </div>

                                    <div className="col-md-6 text-right">
                                        <p className="font-weight-bold mb-1">Invoice #550</p>
                                        <p className="text-muted">Due to: 4 Dec, 2019</p>
                                    </div>
                                </div>

                                <hr className="my-5" />

                                <div className="row pb-5 p-5">
                                    <div className="col-md-6">
                                        <p className="font-weight-bold mb-4">Client Information</p>
                                        <p className="mb-1">John Doe, Mrs Emma Downson</p>
                                        <p>Acme Inc</p>
                                        <p className="mb-1">Berlin, Germany</p>
                                        <p className="mb-1">6781 45P</p>
                                    </div>

                                    <div className="col-md-6 text-right">
                                        <p className="font-weight-bold mb-4">Payment Details</p>
                                        <p className="mb-1"><span className="text-muted">VAT: </span> 1425782</p>
                                        <p className="mb-1"><span className="text-muted">VAT ID: </span> 10253642</p>
                                        <p className="mb-1"><span className="text-muted">Payment Type: </span> Root</p>
                                        <p className="mb-1"><span className="text-muted">Name: </span> John Doe</p>
                                    </div>
                                </div>

                                <div className="row p-5">
                                    <div className="col-md-12">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="border-0 text-uppercase small font-weight-bold">No.</th>
                                                    <th className="border-0 text-uppercase small font-weight-bold">Product</th>
                                                    <th className="border-0 text-uppercase small font-weight-bold">Price</th>
                                                    <th className="border-0 text-uppercase small font-weight-bold">Quantity</th>
                                                    <th className="border-0 text-uppercase small font-weight-bold">Sub Total</th>
                                                    {/* <th className="border-0 text-uppercase small font-weight-bold">Total</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {this.state.detailInv.map((data, key) => {
                                                    console.log('INVOICE === DATA MAP DETAIL INV', data)
                                                    return (
                                                        <tr key={key}>
                                                            <td>{key + 1}</td>
                                                            <td>{data.productname}</td>
                                                            <td>{data.price}</td>
                                                            <td>{data.total}</td>
                                                            <td>{data.productqty}</td>
                                                           
                                                        </tr>

                                                    )
                                                }
                                                )}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* <div className="d-flex flex-row-reverse bg-dark text-white p-4">
                                    <div className="py-3 px-5 text-right">
                                        <div className="mb-2">Grand Total</div>
                                        <div className="h2 font-weight-light">{this}</div>
                                    </div> */}

                                    {/* <div className="py-3 px-5 text-right">
                                        <div className="mb-2">Discount</div>
                                        <div className="h2 font-weight-light">10%</div>
                                    </div> */}

                                    {/* <div className="py-3 px-5 text-right">
                                        <div className="mb-2">Sub - Total amount</div>
                                        <div className="h2 font-weight-light">$32,432</div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                // {/* <div className="text-light mt-5 mb-5 text-center small">by : <a className="text-light" target="_blank" href="http://totoprayogo.com">totoprayogo.com</a></div> */}

            // </div>



        )
    }
}
const mapStateToProps = (state) => {
    const user = state.user
    const inv = state.invoiceRed
    // function reduxnya userLogin
    return { user, inv }
};

export default withRouter(connect(mapStateToProps, {})(invoiceDetail));
