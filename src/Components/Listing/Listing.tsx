import React, { useState } from 'react'
import ListingCss1 from "./Listing.module.css"
import ListingCss2 from "./Listing2.module.css"
import styled from 'styled-components'
import { FaAdjust } from "react-icons/fa";

interface Props {
    title: string,
    arr: string[],
    onSelectItem: (item: string) => void
}
export default ({ title, arr, onSelectItem }: Props) => {

    const courseLength = arr.length
    const [courseIndex, setCourseIndex] = useState(-1);
    const HeaderH1 = styled.h1`
    font-size: 32px
    `;
    return (<>
        <HeaderH1>{title}</HeaderH1>
        {courseLength > 0 ?
            <ul className="list-group">
                {arr.map((item, index) =>
                    <li className={courseIndex == index ? ListingCss1.listGroupItem1 + " active" : ListingCss2.listGroupItem1} key={index} onClick={() => {
                        setCourseIndex(index);
                        onSelectItem(item)
                    }
                    }> <FaAdjust  className={ListingCss1.iconColor}/>{item}</li>
                )}
            </ul> : <h1>no items</h1>
        }
    </>
        // courseLength>0&&<h1>there exist courses</h1>
    )
}
