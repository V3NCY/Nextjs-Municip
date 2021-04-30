
import Head from 'next/head'
import DefaultLayout from '../../components/layouts/default'
import PriceA from "../information/priceMuseums"
import PriceB from "../information/pricePool"
import Transport from "../transport/index"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import TreeView from "@material-ui/lab/TreeView"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import TreeItem from "@material-ui/lab/TreeItem"


export default function Information(props) {

    const useStyles = makeStyles({
        root: {
            height: 240,
            flexGrow: 1,
            maxWidth: 400,
        },
    });

    const classes = useStyles();

    return (
        <>
            <DefaultLayout>
                <Head>
                    <title>Информация</title>
                </Head>
                    <h1>Полезна информация</h1>
                <div className="row mt-3">
                    <div className="col">
                        {/* Image */}
                        <img
                            src="https://imgrabo.com/pics/companies/42ebb3a6595b31794f43de612c231113.jpeg"
                            alt="Info background"
                            width="100%"
                        ></img>
                    </div>
                    {/* Dropdown menu */}
                    <div className="col-md-4 my-3">
                        <TreeView
                            className={classes.root}
                            defaultCollapseIcon={<ExpandMoreIcon />}
                            defaultExpandIcon={<ChevronRightIcon />}
                        >
                            <TreeItem nodeId="1" label="Цени" className="mb-2">
                                <div className="mt-2">
                                    <PriceA />
                                    <PriceB />
                                </div>
                            </TreeItem>
                            <TreeItem nodeId="5" label="Транспорт">
                                <div className="mt-2">
                                    <Transport />
                                </div>
                            </TreeItem>
                        </TreeView>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}