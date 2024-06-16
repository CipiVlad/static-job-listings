import JobListItem from "./JobListItem"
import mockData from '../../public/data.json'
import { useState } from "react"

const JobList = () => {
    const [data, setData] = useState(mockData)


    return (
        <>
            {data.map((item: any) => <JobListItem key={item.id} {...item} />)}
        </>
    )
}
export default JobList