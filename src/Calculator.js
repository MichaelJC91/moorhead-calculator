import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import hawaii from './hawaii.jpg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Logo from './Logo.png';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Numeral from 'numeral';
import Button from '@material-ui/core/Button';

class Calculator extends Component {

    constructor(props) {
        super(props)

        this.state = {
            squareFootage: undefined,
            flooring: 4,
            tiling: 27,
            cabinetry: 48,
            tops: 23,
            allowance: 11.25,
            demolition: {
                price: 3500,
                additional: null,
                finalPrice: null
            },
            drywallAndPaint: {
                price: 3500,
                additional: null,
                finalPrice: null
            },
            electricalAndPlumbing: {
                price: 3500,
                additional: null,
                finalPrice: null
            },
            timberFlooring: {
                price: 2000,
                additional: null,
                finalPrice: null
            },
            tiledFloor: {
                price: 1000,
                additional: null,
                finalPrice: null
            },
            diamondCabinetry: {
                price: 13000,
                additional: null,
                finalPrice: null
            },
            counterTops: {
                price: 6500,
                additional: null,
                finalPrice: null
            },
            kitchenSink: 1500,
            cooktopOvenRangehood: 3000,
            dishwasher: 1200,
            finalPrice: undefined
        }
    
    }

    calculateCost({ target: { value } }) {

        if(value === "") {
            this.setState({ finalPrice: undefined });
        }
        
        this.setState({ squareFootage: value });

        if(value > 0) {
            this.setState(state => ({
                ...state,
                demolition: {
                    ...state.demolition,
                    additional: state.squareFootage * state.allowance
                },
                drywallAndPaint: {
                    ...state.drywallAndPaint,
                    additional: state.squareFootage * state.allowance
                },
                electricalAndPlumbing: {
                    ...state.electricalAndPlumbing,
                    additional: state.squareFootage * state.allowance
                },
                timberFlooring: {
                    ...state.timberFlooring,
                    additional: state.squareFootage * state.flooring
                },
                tiledFloor: {
                    ...state.tiledFloor,
                    additional: state.squareFootage * state.tiling
                },
                diamondCabinetry: {
                    ...state.diamondCabinetry,
                    additional: state.squareFootage * state.cabinetry
                },
                counterTops: {
                    ...state.counterTops,
                    additional: state.squareFootage * state.tops
                }
            }));
    
            this.setState(state => ({
                ...state,
                demolition: {
                    ...state.demolition,
                    finalPrice: state.demolition.price + state.demolition.additional
                },
                drywallAndPaint: {
                    ...state.drywallAndPaint,
                    finalPrice: state.drywallAndPaint.price + state.drywallAndPaint.additional
                },
                electricalAndPlumbing: {
                    ...state.electricalAndPlumbing,
                    finalPrice: state.electricalAndPlumbing.price + state.electricalAndPlumbing.additional
                },
                timberFlooring: {
                    ...state.timberFlooring,
                    finalPrice: state.timberFlooring.price + state.timberFlooring.additional
                },
                tiledFloor: {
                    ...state.tiledFloor,
                    finalPrice: state.tiledFloor.price + state.tiledFloor.additional
                },
                diamondCabinetry: {
                    ...state.diamondCabinetry,
                    finalPrice: state.diamondCabinetry.price + state.diamondCabinetry.additional
                },
                counterTops: {
                    ...state.counterTops,
                    finalPrice: state.counterTops.price + state.counterTops.additional
                }
            }));
    
            this.setState(state => ({ 
                ...state,
                finalPrice: state.demolition.finalPrice + 
                            state.drywallAndPaint.finalPrice +
                            state.electricalAndPlumbing.finalPrice +
                            state.timberFlooring.finalPrice +
                            state.diamondCabinetry.finalPrice +
                            state.counterTops.finalPrice +
                            state.kitchenSink +
                            state.cooktopOvenRangehood +
                            state.dishwasher
            }));
        }

    }



    render() {
        return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <section style={{ padding: "0 20px",height: 400, maxHeight: 400, backgroundImage: `url(${hawaii})`, textAlign: "center" }}>
                        <img src={Logo} style={{ maxHeight: 120, paddingTop: 50, maxWidth: "100%" }} alt="Moorhead logo" />
                    </section>
                </Grid>
            </Grid>
            <Grid className="main-calc-body" justify="center" container spacing={0} style={{ position: "relative", top: "-100px" }}>
                <Grid style={{ maxWidth: 900, padding: "0 10px" }} item xs={12}>
                    <Paper style={{ padding: "20px 25px" }}>
                        <Typography variant="h4" gutterBottom align="center">
                            Moorhead and Co Pricing Calculator
                        </Typography>
                        <Typography variant="body1" paragraph>
                        The number one most searched item regarding a renovation is how much will it cost?<br/><br/>
                        This is a tough question to answer because every home is different. Some are apartments,
                        some are homes built on a concrete slab and others are in homes that are built on post and pier.
                        We took on the challenge. At Moorhead and Company we do everything in our power to go above and beyond on everything we do.
                        Building Beyond Expectations is our Mantra. We have spent the past year working on a way to answer this question for our clients, and non clients. 
                        We have created the Moorhead Calculator.<br/><br/> This will not give you an exact price, though it will give you a clear understanding of what your entire project will cost. I want to be clear, there are so many ways to do a renovation. 
                        There are expensive products, less expensive products, and cheap products. We went with midlevel quality products that people would use in their own home. 
                        This is not a good measuring tool for less expensive rental renovations. <br/><br/>These prices are for a custom renovation that gives you the space you have always wanted. 
                        Our calculator includes all materials and labor required to do your project. 
                        We based our cabinet costs on Diamond Cabinets pricing. 
                        Diamond Cabinets are the best selling cabinet company in America. 
                        They come in a variety of different colors and designs and every design costs different prices. 
                        We did our best to come up with accurate pricing and shipping to Hawaii is included in our calculator. <br/><br/>
                        We went with Quartz or Granite pricing for the countertops which include purchase of the slab material as well as fabrication and installation. 
                        For flooring we went with a luxury vinyl, which includes the labor and materials cost of the project. 
                        In our bathrooms we used a tile surround for our calculator. Pricing will vary client to client depending on what they select, and how complicated the project is. 
                        All this said, if you type in the square footage of your project you will get a good idea of what your project will cost. There are many ways to increase or decrease your costs to renovate. 
                        </Typography>
                        <div className="input-wrapper">
                            <Typography variant="h5" gutterBottom align="center">
                                What is the square footage of your project?
                            </Typography>
                            <TextField
                                type="number"
                                onChange={ (e) => this.calculateCost(e) }
                                className="square-footage-input"
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">SQFT</InputAdornment>,
                                }}
                            />
                        </div>

                        { 
                            (this.state.finalPrice) ? 
                            
                                <div>
                                    <Typography variant="title" align="center">
                                        Your Price
                                    </Typography>
                                    <Typography variant="display1" align="center" gutterBottom>
                                        {`$${Numeral(this.state.finalPrice).format("0,0")}`}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom paragraph align="center">
                                    Please click the button below to give us a call to come out and give you a FREE detailed proposal of what your project will actually cost. While we are there, ask us about ways to save you money and bring your cost down.
                                    </Typography>
                                    <div style={{ textAlign: "center" }}>
                                        <Button href="tel:+1(808)5938000" variant="contained" color="primary" size="large">
                                            Call Moorhead and Co
                                        </Button>
                                    </div>
                                </div>
                            
                            :

                            ""
                        }
                    </Paper>
                </Grid>
            </Grid>
        </div>
        );
    }
}

export default Calculator;