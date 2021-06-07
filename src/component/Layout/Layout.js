import React,{useState} from 'react'

import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import SideDrawer from './../SideDrawer/SideDrawer'

const Layout = (props) => {
    const [showDrawer,setShowDrawer] = useState(false)

    return (
        <React.Fragment>
            <SideDrawer showSD={showDrawer} toggleSD={() => setShowDrawer(prev => !prev)} />
            <Header toggleSD={() => setShowDrawer(prev => !prev)} />
            <main style={{marginTop:"9vh",position:"relative"}}>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout