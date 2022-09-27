import React, { Component } from 'react'
import PropTypes from 'prop-types'



export default class Home extends Component {
      static propTypes = {
            prop: PropTypes
      }

      render() {
            return (
                  <div className="homebackground">
                      <h1 className="text-center pt-2 orangecolor"><b><i>
                        ONLINE DAYCARE MANAGEMENT SERVICES WEBSITE FOR CHILDREN-SENIORS
                      </i></b></h1>
                      

                  </div>
                
            )
      }
}